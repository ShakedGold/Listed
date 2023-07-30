export class User {
  constructor(email, username, following, postInteractions) {
    this.email = email;
    this.username = username;
    this.following = following;
    this.postInteractions = postInteractions;
  }
  toString() {
    return this.email + ', ' + this.username + ', ' + this.following + ', ' + this.postInteractions;
  }
}

// Firestore data converter
export const userConverter = {
  toFirestore: (user) => {
    return {
      email: user.email,
      username: user.username,
      following: user.following,
      postInteractions: user.postInteractions,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User(data.email, data.username, data.following, data.postInteractions);
  }
};