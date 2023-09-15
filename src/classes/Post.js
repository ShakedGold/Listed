import { doc, updateDoc } from 'firebase/firestore';
import { Interaction as InteractionEnum } from '../classes/Interaction.js';
import { postsRef } from '../services/firebase.js';

export class Post {
	constructor(
		title = '',
		username = '',
		lists = [],
		ID = '',
		votes = 0,
		created = undefined,
		imageName = '',
		interactions = {},
		reports = {},
		color = '',
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
			this.color
		);
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
}

// Firestore data converter
export const postConverter = {
	toFirestore: (post) => {
		return JSON.parse(JSON.stringify(post));
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new Post(
			data.title,
			data.username,
			data.lists,
			data.ID,
			data.votes,
			data.created,
			data.imageName,
			data.interactions,
			data.reports,
			data.color,
		);
	},
};
