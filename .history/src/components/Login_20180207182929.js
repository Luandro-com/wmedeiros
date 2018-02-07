import React, { Component } from 'react';
import firebase from 'firebase';
import './Login.css';

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'your@email.com',
      password: ''
    }
  }

  onComponentDidMount() {
    const ref = firebase.database().ref("Portfolio");
    ref.once("value")
      .then((snapshot) => {
        console.log('snap', snapshot)
        const key = snapshot.key;
        const childKey = snapshot.child("name/last").key;
        console.log(key, childKey)
      })
      .catch(err => console.log('Error on db', err))
  }

  handleSubmit = (e) => {
    const { email, password } = this.state
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((e) => {
        console.log('Success', e.uid)
      })
      .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });

  }  

  render() {
    const { email, password } = this.props
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>E-mail:</h3>
            <input type="email" onChange={(e) => this.setState({ email: e.target.value })} value={email} />
          </div>
          <div>
            <h3>Password:</h3>
            <input type="password" onChange={(e) => this.setState({ password: e.target.value })} value={password} />
          </div>
          <br />
          <button type="submit" value="Submit">
            Login
          </button>
        </form>
      </div>
    );
  } 
}