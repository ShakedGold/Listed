import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { User, userConverter } from "@/classes/user.js";
import { usersRef } from "@/scripts/firebase.js";
import { getDocs, setDoc, doc, query, where } from "firebase/firestore";
import { auth } from "./firebase";
import router, { requestedPath } from "../router";

onAuthStateChanged(auth, (user) => {
  if (user) {
    router.push(requestedPath || "/");
  }
});

export function getUserFromUsername(username) {
  const q = query(usersRef, where("username", "==", username));
  return new Promise((resolve, reject) => {
    getDocs(q).then((querySnapshot) => {
      if (querySnapshot.docs.length == 0) reject("No user found");
      resolve(querySnapshot.docs[0].data());
    }).catch((error) => {
      reject(error)
    });
  });
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    if (auth.currentUser == null) reject("No user found");
    getUserFromUsername(auth.currentUser.displayName).then((userFromDB) => {
      resolve(userFromDB);
    }).catch((error) => {
      reject(error);
    })
  });
}

export function getCurrentUserOrNew() {
  return new Promise((resolve, reject) => {
    if (auth.currentUser === null) resolve(new User("", "Listed", [], {}));
    getUserFromUsername(auth.currentUser.displayName).then((userFromDB) => {
      resolve(userFromDB);
    }).catch((error) => {
      reject(error);
    })
  });
}

export function SignOut() {
  signOut(auth).then(() => {
    router.push({ name: "Login" });
  }).catch((error) => {
    // An error happened.
  });
}

export function Login(username, password) {
  // when the email is returned we log in with the email and password and return a promise that resolves when the login is successful
  return new Promise((resolve, reject) => {
    getEmailFromUsername(username)
      .then((email) => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
          resolve();
        })
          .catch((error) => {
            alert("Wrong username or password");
            reject();
          });
      })
      .catch((error) => {
        alert("Wrong username or password");
        reject();
      });
  });
}
export function SignUp(email, password, username) {
  if (!validate_password(password)) return

  // TODO check if username is already taken with a query


  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Update the user's display name directly during signup
        await updateProfile(user, {
          displayName: username
        })
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });

        const ref = doc(usersRef, username).withConverter(userConverter);
        await setDoc(ref, new User(email, username, [], {}));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/email-already-in-use") {
          alert("Email already in use");
        } else if (errorCode == "auth/invalid-email") {
          alert("Invalid email");
        } else if (errorCode == "auth/weak-password") {
          alert("Password is too weak");
        }
        reject();
      });
  });
}
function validate_password(password) {
  return new String(password)
    .match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) != null
}

/* 
Explanation: 
we pass in a username but in order to log in we need the email that is corresponding to the username
so we get the email by a query where the username is the username we passed in (there should only be one user with that username)
then we get the email with a promise (getDocs returns a promise) and return the email in a promise when the getDocs finished successfully
*/
function getEmailFromUsername(username) {
  const q = query(usersRef, where("username", "==", username));
  return new Promise((resolve, reject) => {
    getDocs(q).then((querySnapshot) => {
      if (querySnapshot.docs.length == 0) reject("No user found");
      resolve(querySnapshot.docs[0].data().email);
    }).catch((error) => {
      reject(error)
    });
  });
}