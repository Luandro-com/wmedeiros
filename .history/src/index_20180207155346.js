import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import "typeface-lato";
import App from './components/App';
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
