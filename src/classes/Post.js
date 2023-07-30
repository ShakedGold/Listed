export class Post {
    constructor(title, username, list, ID, votes, time, imageName) {
        this.title = title;
        this.username = username;
        this.list = list;
        this.votes = votes;
        this.time = time;
        this.ID = ID;
        this.imageName = imageName;
    }
    toString() {
        return this.title + ', ' + this.username + ', ' + this.votes + ', ' + this.time + ", " +
            this.list + ', ' + this.ID + ', ' + this.imageName;
    }
}

// Firestore data converter
export const postConverter = {
    toFirestore: (post) => {
        return {
            title: post.title,
            username: post.username,
            list: post.list,
            ID: post.ID,
            votes: post.votes,
            time: post.time,
            imageName: post.imageName,
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Post(data.title, data.username, data.list, data.ID, data.votes, data.time, data.imageName);
    }
};