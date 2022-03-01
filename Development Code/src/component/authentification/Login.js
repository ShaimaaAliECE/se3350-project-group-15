import React from "react";

//TODO: check if user already exisits in real time database
function Login() {
  const { email, username, password } = this.state;

  let rootRef = firebase.database().ref();

  rootRef
    .child("users")
    .orderByChild("username")
    .equalTo(username)
    .once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        let userData = snapshot.val();
        console.log(userData);
        Alert.alert("username is taken");
        return userData;
      } else {
        console.log("not found");
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(async (user) => {
            console.log("Data created", user);
          });
      }
    });
  return <div>Login</div>;
}

export default Login;
