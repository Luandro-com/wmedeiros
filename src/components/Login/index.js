import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import AuthContainer from '../../containers/Auth';
import './style.css';

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'your@email.com',
      password: ''
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <Subscribe to={[AuthContainer]}>
        {auth => 
          <div className="Login">
            <form onSubmit={(e) => { e.preventDefault(); auth.login(email, password) }}>
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
        }
      </Subscribe>
    );
  } 
}
