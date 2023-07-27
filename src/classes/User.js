export class User {
  constructor(email, username) {
    this.email = email;
    this.username = username;
  }
  toString() {
    return this.email + ', ' + this.username;
  }
}

// Firestore data converter
export const userConverter = {
  toFirestore: (user) => {
    return {
      email: user.email,
      username: user.username,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User(data.email, data.username);
  }
};