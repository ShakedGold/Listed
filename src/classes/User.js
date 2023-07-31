import { getCurrentUser} from "../scripts/auth.js";
import { usersRef } from "../scripts/firebase.js";
import {doc, updateDoc} from "firebase/firestore";

export class User {
  constructor(email, username, following, followers, postInteractions) {
    this.email = email;
    this.username = username;
    this.following = following;
    this.followers = followers;
    this.postInteractions = postInteractions;
  }
  toString() {
    return this.email + ', ' + this.username + ', ' + this.following + ', ' + this.followers + ', ' + this.postInteractions;
  }
}
  
export async function Follow(user) {
  let currentUser = await getCurrentUser();
  user.followers.push(currentUser.username);
  currentUser.following.push(user.username);
  updateUser(user);
  updateUser(currentUser);
}
async function updateUser(user) {
  const userDocRef = doc(usersRef, user.username);
  await updateDoc(userDocRef, { followers: user.followers, following: user.following });
}
// Firestore data converter
export const userConverter = {
  toFirestore: (user) => {
    return {
      email: user.email,
      username: user.username,
      following: user.following,
      followers: user.followers,
      postInteractions: user.postInteractions,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User(data.email, data.username, data.following, data.followers, data.postInteractions);
  }
};