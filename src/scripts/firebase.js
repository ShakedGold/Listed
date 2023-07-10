import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth, creatUsersByEmailAndPassword } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFxN77gcTkOiGsrKM-2ClgOyNTAmEUSzI",
  authDomain: "listed-230f4.firebaseapp.com",
  projectId: "listed-230f4",
  storageBucket: "listed-230f4.appspot.com",
  messagingSenderId: "462579772181",
  appId: "1:462579772181:web:7a89a7456ddede702b971c",
  measurementId: "G-66Z45Z11B6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

let db = getFirestore(app)
export const postRef = collection(db, "posts");
export const listsRef = collection(db, "lists");
export const usersRef = collection(db, "users");


///LogIn / Sign up
function login() {

}
function signup() {
  var username = document.getElementById("user_name")
  var email = document.getElementById("Email")
  var password = document.getElementById("Password")

  //validate inputs
  if(validate_email(email) == false || validate_password(password) == false) {
    return
  }
  if(validate_field(email) == false || validate_field(password) == false || validate_field(username) == false) {
    alert("one or more than the fields are missing")
    return
  }

  //user is validated
  auth.creatUsersByEmailAndPassword(email, password)
  .then(function(){
    var user = auth.currentUser
    alert("user created!")
    ///add user to db
      var user_data = {
        email : email,
        username : username,
        last_login : Date.now()
      }
      usersRef.child(user.uid).set(user_data) 
  })
  .catch(function(){
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if((expression).test(email) == true) {
    return true
    ///email is in the right format
  }else{
    return false
    alert("Not a valid email adress")
    ///email is in the wrong format
  }
}
function validate_password(password) {
  if (password<6) {
    return false
    alert("Password must be longer than 6 characters")
  } else {
    return true
  }
}
function validate_field(field) {
  if(field==null) {
    return false
  }
  if(field.length <=0) {
    return false
  } else {
    return true
  }
}