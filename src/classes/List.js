export class List {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
}

// Firestore data converter
export const listConverter = {
    toFirestore: (list) => {
        return unpack(list);
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new List(data.name);
    }
};