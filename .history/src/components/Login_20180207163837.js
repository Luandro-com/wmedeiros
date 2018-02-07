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

  handleSubmit = (e) => {
    const { email, password } = this.state
    e.preventDefault()
    console.log(email, password)
    const cred = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );
    console.log('cred', cred)
  }  

  render() {
    const { email, password } = this.props
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>E-mail:</h3>
            <input type="email" onChange={(input) => this.setState({ email: input })} value={email} />
          </div>
          <div>
            <h3>Password:</h3>
            <input type="password" onChange={(input) => this.setState({ password: input })} value={password} />
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