export class User {
  constructor(email, username, following) {
    this.email = email;
    this.username = username;
    this.following = following;
  }
  toString() {
    return this.email + ', ' + this.username + ' ' + this.following;
  }
}

// Firestore data converter
export const userConverter = {
  toFirestore: (user) => {
    return {
      email: user.email,
      username: user.username,
      following: user.following
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User(data.email, data.username, data.following);
  }
};