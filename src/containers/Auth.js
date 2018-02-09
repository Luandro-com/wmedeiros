import { Container } from 'unstated'
import firebase from 'firebase';

export default class extends Container {
  state = {
    uid: null,
    name: null,
    role: null,
  };

  check = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ uid: user.uid });
      }
      return false
    })    
  }

  login = (email, password) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
          console.log('Success', data.uid)
          this.setState({ uid: data.uid });
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert(error)
      });      
  }

  logout = () => {
    firebase.auth().signOut()
    this.setState({ uid: null });
    
  }
}