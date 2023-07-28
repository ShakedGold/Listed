export class Post {
    constructor(title, username, list, ID, votes, time, likedBy, dislikedBy, imageName) {
        this.title = title;
        this.username = username;
        this.list = list;
        this.votes = votes;
        this.time = time;
        this.ID = ID;
        this.likedBy = likedBy;
        this.dislikedBy = dislikedBy;
        this.imageName = imageName;
    }
    toString() {
        return this.title + ', ' + this.username + ', ' + this.votes + ', ' + this.time + ", " +
            this.list + ', ' + this.ID + ', ' + this.likedBy + ', ' + this.dislikedBy + ', ' + this.imageName;
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
            likedBy: post.likedBy,
            dislikedBy: post.dislikedBy,
            imageName: post.imageName,
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Post(data.title, data.username, data.list, data.ID, data.votes, data.time, data.likedBy, data.dislikedBy, data.imageName);
    }
};