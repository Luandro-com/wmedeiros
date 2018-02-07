import React, { Component } from 'react';
import firebase from 'firebase';
import './Login.css';

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'your@email.com'
    }
  }

  submitForm = (info) => {
    console.log('Form', info)
    // const cred = firebase.auth.EmailAuthProvider.credential(
    //   email,
    //   password
    // );
  }  

  render() {
    return (
      <div className="Login">
        <form>
            <input onChange={(input) => this.setState({ email: input })} />
        </form>
      </div>
    );
  } 
}