/**
 * This service contains the functions that are used to authenticate users and get user data from firebase.
 * @module
 */

import { User, userConverter } from '@/classes/user.js';
import { usersRef } from '@/services/firebase.js';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import router, { requestedPath } from '../router';
import { auth } from './firebase';

onAuthStateChanged(auth, (user) => {
	if (user)
		router.push(requestedPath || { name: 'Home' });
});

/**
 * Gets a user from firebase by the username.
 * @param {string} username - The username of the user that will be returned from firebase.
 * @returns {User} The user that was found in firebase.
 * @author ShakedGold <shakedgold@listed.com>
 */
export async function getUserFromUsername(username) {
	if(!username)
		return new User();
	const userRef = doc(usersRef, username).withConverter(userConverter);
	const userDoc = await getDoc(userRef);
	return userDoc.data();
}

/**
 * Gets a user from firebase by the email address of the user.
 * @returns {User} The current authenticated user or null if the user is not authenticated.
 */
export function getCurrentUser() {
	if (!auth.currentUser)
		return null;
	return getUserFromUsername(auth.currentUser.displayName);
}

/**
 * Gets a user from firebase by the email address of the user.
 * @returns {User} The current authenticated user or a new user if the user is not authenticated.
 */
export function getCurrentUserOrNew() {
	if (auth.currentUser === null)
		return new User();
	return getUserFromUsername(auth.currentUser.displayName);
}

/**
 * Login the user with the username and password and redirects to the requested path or the home page if there is no requested path.
 * @param {string} username - The username of the user that will be logged in.
 * @param {string} password - The password of the user that will be logged in.
 * @returns {Promise} A promise that resolves when the login is successful.
 */
export function Login(username, password) {
	// when the email is returned we log in with the email and password and return a promise that resolves when the login is successful
	return new Promise((resolve, reject) => {
		getEmailFromUsername(username)
			.then((email) => {
				signInWithEmailAndPassword(auth, email, password)
					.then(() => {
						router.push(requestedPath || '/');
						resolve();
					})
					.catch((error) => {
						reject('Wrong email or password');
					});
			})
			.catch((error) => {
				reject(error);
			});
	});
}

/**
 * Signs up the user with the email, password and username and redirects to the requested path or the home page if there is no requested path.
 * @param {string} email - The email of the user that will be signed up.
 * @param {string} username - The username of the user that will be signed up.
 * @param {string} password - The password of the user that will be signed up.
 * @todo Check if username is already taken with a query.
 */
export function SignUp(email, username, password) {
	// TODO check if username is already taken with a query
	return new Promise((resolve, reject) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				const user = userCredential.user;

				// Update the user's display name directly during signup
				updateProfile(user, {
					displayName: username,
				}).then(() => {
					resolve();
				}).catch((error) => {
					reject(error);
				});

				const ref = doc(usersRef, username).withConverter(userConverter);
				await setDoc(ref, new User(email, username));
			})
			.catch((error) => {
				const errorCode = error.code;
				if (errorCode == 'auth/email-already-in-use')
					reject('Email already in use');
				else if (errorCode == 'auth/invalid-email')
					reject('Invalid email');
				else if (errorCode == 'auth/weak-password')
					reject('Password is too weak');
				else
					reject(errorCode);
			});
	});
}

/*
Explanation:
we pass in a username but in order to log in we need the email that is corresponding to the username
so we get the email by a query where the username is the username we passed in (there should only be one user with that username)
then we get the email with a promise (getDocs returns a promise) and return the email in a promise when the getDocs finished successfully
*/
/**
 * Gets the email of a user from firebase by the username.
 * @param {string} username - The username of the user that will be returned from firebase.
 * @returns {Promise} A promise that resolves when the email is returned from firebase.
 */
function getEmailFromUsername(username) {
	const q = query(usersRef, where('username', '==', username)).withConverter(
		userConverter
	);
	return new Promise((resolve, reject) => {
		getDocs(q)
			.then((querySnapshot) => {
				if (querySnapshot.docs.length == 0)
					reject('No user found');
				resolve(querySnapshot.docs[0].data().email);
			})
			.catch((error) => {
				reject(error);
			});
	});
}
