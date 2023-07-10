import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth()

export function IsLoggedIn() {
  return auth.currentUser;
}

export function Login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      return true;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Wrong username or password");
      return false;
    });
  }
  export function SignUp(email, password) {
    //validate inputs
    if(!validate_email(email) || !validate_password(password)) return
  
    //user is validated
    createUserWithEmailAndPassword(auth, email, password)
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
      var error_message = error.message
      alert(error_message)
    })
  }
  function validate_email(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) != null;
  }
  function validate_password(password) {
    return new String(password)
    .match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) != null
  }
  function validate_field(field) {
    if(field==null) {
      return false
    }
    if(field.length <= 0) {
      return false
    } else {
      return true
    }
  }