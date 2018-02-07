import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import Header from './Header';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home}/>
      </Router>
    );
  }
}

export default App;
