import React, { Component } from 'react';
import firebase from 'firebase';
import './style.css';

export default class extends Component {
  constructor(props) {
    super(props)
  }

  onComponentDidMount() {
    const ref = firebase.database().ref("portfolio");
    ref.once("value")
      .then((snapshot) => {
        console.log('snap', snapshot)
        const key = snapshot.key;
        const childKey = snapshot.child("name/last").key;
        console.log(key, childKey)
      })
      .catch(err => console.log('Error on db', err))
  }

  render() {
    const { email, password } = this.props
    console.log(this.props)
    return (
      <div className="PortfolioItem">
        <h1>Title</h1>
      </div>
    );
  } 
}