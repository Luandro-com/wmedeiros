import React from 'react';
import firebase from 'firebase';
import { Form, Field } from 'simple-react-form';
import './Login.css';

export default () => (
  <div className="Login">
    <Form ref='form' state={this.props.initialDoc} onSubmit={this.onSubmit}>
      <Field fieldName='email' label='E-mail' type={Text} />
      <Field fieldName='password' label='Password' type={Text} />
    </Form>
    <button onClick={() => this.refs.form.submit()}>Submit</button>
  </div>
);