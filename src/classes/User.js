//import { getCurrentUser} from "../scripts/auth.js";
//let currentUser =  getCurrentUser();

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
  follow(user) {
    alert(this.username + user.username);
    this.followers+=user;
    user.following+=this;
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