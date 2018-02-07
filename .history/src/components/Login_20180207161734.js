import React, { Component } from 'react';
import firebase from 'firebase';
import { Form, Field } from 'simple-react-form';
import './Login.css';

function submitForm(info) {
  console.log('Form', info)
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="Login">
        <Form state={this.state} onChange={state => this.setState(state)}>
          <Field fieldName='email' label='E-mail' type={Text} />
          <Field fieldName='password' label='Password' type={Text} />
        </Form>
        <button onClick={() => submitForm()}>Submit</button>
      </div>
    );
  } 
}