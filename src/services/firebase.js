import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBFxN77gcTkOiGsrKM-2ClgOyNTAmEUSzI',
	authDomain: 'listed-230f4.firebaseapp.com',
	projectId: 'listed-230f4',
	storageBucket: 'listed-230f4.appspot.com',
	messagingSenderId: '462579772181',
	appId: '1:462579772181:web:7a89a7456ddede702b971c',
	measurementId: 'G-66Z45Z11B6',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const db = getFirestore(app);
export const postsRef = collection(db, 'posts');
export const listsRef = collection(db, 'lists');
export const usersRef = collection(db, 'users');
