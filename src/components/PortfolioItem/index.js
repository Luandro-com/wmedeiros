import React, { Component } from 'react';
import firebase from 'firebase';
import './style.css';

export default class extends Component {
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
    const { match: { params: { slug } } } = this.props
    return (
      <div className="PortfolioItem">
        <h1>{slug}</h1>
      </div>
    );
  } 
}