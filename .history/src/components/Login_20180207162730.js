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

  handleSubmit = (info) => {
    console.log('Form', info)
    // const cred = firebase.auth.EmailAuthProvider.credential(
    //   email,
    //   password
    // );
  }  

  render() {
    const { email } = this.props
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <label>
            E-mail:
            <input type="email" onChange={(input) => this.setState({ email: input })} placeholder={email} />
          </label>
        </form>
      </div>
    );
  } 
}