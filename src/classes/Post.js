import { serverTimestamp } from 'firebase/firestore'

export class Post {
    constructor(title, username, list, ID) {
        this.title = title;
        this.username = username;
        this.list = list;
        this.votes = 0;
        this.time = serverTimestamp();
        this.ID = ID;
    }
    toString() {
        return this.title + ', ' + this.username + ', ' + this.votes + ', ' + this.time + ", " + this.list + ' ' + this.ID;
    }
}

// Firestore data converter
export const postConverter = {
    toFirestore: (post) => {
        return {
            title: post.title,
            username: post.username,
            time: post.time,
            votes: post.votes,
            list: post.list,
            ID: post.ID,
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Post(data.title, data.username, data.list, data.ID);
    }
};