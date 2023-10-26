import { storage } from '@/services/storage';
import { FastAverageColor } from 'fast-average-color';
import {
	doc,
	serverTimestamp,
	setDoc,
	updateDoc
} from 'firebase/firestore';
import {
	ref as firebaseRef,
	uploadBytesResumable,
} from 'firebase/storage';
import { Interaction as InteractionEnum } from '../classes/Interaction.js';
import router from '../router/index.js';
import { postsRef } from '../services/firebase.js';

export class Post {
	constructor(
		{
			title = '',
			username = '',
			lists = [],
			ID = '',
			votes = 0,
			created = undefined,
			imageName = '',
			interactions = {},
			reports = {},
			color = {
				hex: '#162997',
				isDark: true,
			},
			type = 'image',
			text = '',
		} = {},
	) {
		this.title = title;
		this.username = username;
		this.lists = lists;
		this.votes = votes;
		this.created = created;
		this.ID = ID;
		this.imageName = imageName;
		this.interactions = interactions;
		this.reports = reports;
		this.color = color;
		this.type = type;
		this.text = text;
	}
	toString() {
		return (
			this.title +
			', ' +
			this.username +
			', ' +
			this.votes +
			', ' +
			this.created +
			', ' +
			this.list +
			', ' +
			this.ID +
			', ' +
			this.imageName +
			', ' +
			this.interactions +
			', ' +
			this.reports +
			', ' +
			this.color +
			', ' +
			this.type +
			', ' +
			this.text
		);
	}

	/**
	 * 
	 * @param {string} ID 
	 * @returns {Post} the post object
	 */
	static GetPost(ID) {
		const postDocRef = doc(postsRef, ID);
		return postDocRef.withConverter(postConverter).get();
	}

	Interact(interaction, user) {
		if (this.interactions[user.username] === interaction) {
			this.votes -= interaction;
			this.interactions[user.username] = InteractionEnum.None;
		} else if (
			this.interactions[user.username] !== InteractionEnum.None &&
			this.interactions[user.username] !== undefined
		) {
			this.votes += 2 * interaction;
			this.interactions[user.username] = interaction;
		} else {
			this.interactions[user.username] = interaction;
			this.votes += interaction;
		}

		if (this.interactions[user.username] === InteractionEnum.None)
			delete this.interactions[user.username];

		this.UpdatePost({ votes: this.votes, interactions: this.interactions });
	}

	Report(reason, user) {
		this.reports[user.username] = reason;
		this.UpdatePost({ reports: this.reports });
	}

	async UpdatePost(patch) {
		const postDocRef = doc(postsRef, this.ID);
		await updateDoc(postDocRef, patch);
	}

	async post(file, percent) {
		// create post
		const ref = doc(postsRef).withConverter(postConverter);
		this.ID = ref.id;
		if (this.type === 'image') {
			this.color = await getAverageColor(file);
			const storageRef = firebaseRef(
				storage,
				`/uploads/${this.ID}/${file.name}`
			);
			const uploadTask = uploadBytesResumable(storageRef, file);
			uploadTask.on(
				'state_changed',
				(snapshot) => percent.value = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
				(err) => console.log(err),
				async () => {
					await setDoc(ref, this);
					await updateDoc(ref, {
						created: serverTimestamp()
					});

					// move to HomeView
					router.push('/');
				}
			);
		}
		else if (this.type === 'text') {
			await setDoc(ref, this);
			await updateDoc(ref, {
				created: serverTimestamp()
			});

			// move to HomeView
			router.push('/');
		}
	}
}

async function getAverageColor(file) {
	const path = URL.createObjectURL(file);
	const fac = new FastAverageColor();
	return fac.getColorAsync(path, { algorithm: 'sqrt' });
}

// Firestore data converter
export const postConverter = {
	toFirestore: (post) => {
		return JSON.parse(JSON.stringify(post));
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new Post(
			JSON.parse(JSON.stringify(data))
		);
	},
};
