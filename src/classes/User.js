import { doc, updateDoc } from 'firebase/firestore';
import { auth, usersRef } from '../services/firebase.js';

import { signOut } from 'firebase/auth';
import router from '../router/index.js';

export class User {
	constructor(
		email = '',
		username = 'Listed',
		following = [],
		followers = [],
		postInteractions = {},
		reportedPosts = {}
	) {
		this.email = email;
		this.username = username;
		this.following = following;
		this.followers = followers;
		this.postInteractions = postInteractions;
		this.reportedPosts = reportedPosts;
	}
	toString() {
		return (
			this.email +
			', ' +
			this.username +
			', ' +
			this.following +
			', ' +
			this.followers +
			', ' +
			this.postInteractions +
			', '
		);
	}
	async UpdateUser(patch) {
		const userDocRef = doc(usersRef, this.username);
		await updateDoc(userDocRef, patch);
	}

	Follow(user) {
		this.following.push(user.username);
		user.followers.push(this.username);

		user.UpdateUser({ followers: user.followers });
		this.UpdateUser({ following: this.following });
	}
	UnFollow(user) {
		this.following.pop(user.username);
		user.followers.pop(this.username);

		user.UpdateUser({ followers: user.followers });
		this.UpdateUser({ following: this.following });
	}

	IsFollowing(user) {
		return this.following.includes(user.username);
	}

	SignOut() {
		signOut(auth)
			.then(() => {
				router.push({ name: 'Login' });
			})
			.catch((error) => {
				console.log(error);
				// An error happened.
			});
	}
}
// Firestore data converter
export const userConverter = {
	toFirestore: (user) => {
		return JSON.parse(JSON.stringify(user));
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new User(
			data.email,
			data.username,
			data.following,
			data.followers,
			data.postInteractions,
			data.reportedPosts
		);
	},
};
