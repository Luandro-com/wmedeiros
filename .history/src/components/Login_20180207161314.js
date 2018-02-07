import React from 'react';
import firebase from 'firebase';
import { Form, Field } from 'simple-react-form';
import './Login.css';

export default () => (
  <div className="Login">
    <Form ref='form' state={this.props.initialDoc} onSubmit={this.onSubmit}>
      <Field fieldName='name' label='Name' type={Text} />
      <Field fieldName='date' label='A Date' type={DatePicker} />
    </Form>
    <button onClick={() => this.refs.form.submit()}>Submit</button>
  </div>
);