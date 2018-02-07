import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './reset.css';
import './index.css';
import "typeface-lato";
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
const config = {
  apiKey: "AIzaSyAb3xJVNG-hd2F59HAXRRF4DvenRQsNYII",
  authDomain: "wmarquitetura-b9781.firebaseapp.com",
  databaseURL: "https://wmarquitetura-b9781.firebaseio.com",
  projectId: "wmarquitetura-b9781",
  storageBucket: "",
  messagingSenderId: "888983865049"
};
firebase.initializeApp(config);

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
