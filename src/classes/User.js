import { usersRef } from "../scripts/firebase.js";
import { doc, updateDoc } from "firebase/firestore";

export class User {
  constructor(email = '', username = 'Listed', following = [], followers = [], postInteractions = {}) {
    this.email = email;
    this.username = username;
    this.following = following;
    this.followers = followers;
    this.postInteractions = postInteractions;
  }
  toString() {
    return this.email + ', ' + this.username + ', ' + this.following + ', ' + this.followers + ', ' + this.postInteractions;
  }
  async UpdateUser(patch) {
    const userDocRef = doc(usersRef, this.username);
    await updateDoc(userDocRef, patch);
  }

  Follow(user) {
    this.following.push(user.username);
    user.followers.push(this.username);
    console.log(user.UpdateUser);
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