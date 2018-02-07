import React, { Component } from 'react';
import firebase from 'firebase';
import { Form, Field } from 'simple-react-form';
import './Login.css';

function submitForm(info) {
  console.log('Form', info)
}

export default class extends Component {
  render() {
    return (
      <div className="Login">
        <Form ref='form' state={this.props.initialDoc} onSubmit={this.onSubmit}>
          <Field fieldName='email' label='E-mail' type={Text} />
          <Field fieldName='password' label='Password' type={Text} />
        </Form>
        <button onClick={() => submitForm()}>Submit</button>
      </div>
    );
  } 
}