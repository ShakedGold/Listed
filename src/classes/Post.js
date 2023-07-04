import { serverTimestamp } from 'firebase/firestore'

export class Post {
    constructor (title, author, list, ID) {
        this.title = title;
        this.list = list;
        this.votes = 0;
        this.author = author;
        this.time = serverTimestamp();
        this.ID = ID;
    }
    toString() {
        return this.title + ', ' + this.author + ', ' + this.votes + ', ' + this.time;
    }
}

// Firestore data converter
export const postConverter = {
    toFirestore: (post) => {
        return {
            title: post.title,
            author: post.author,
            time: post.time,
            votes: post.votes,
            ID: post.ID,
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Post(data.title, data.author, data.list, data.ID);
    }
};