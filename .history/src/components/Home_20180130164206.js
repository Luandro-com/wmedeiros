import React, { Component } from 'react';
import './Header.css';

class Home extends Component {
  render() {
    return (
        <header className="Header">
          <h1 className="Header-logo">Home</h1>
          <div className="Header-nav">
            <nav></nav>
          </div>
        </header>
    );
  }
}

export default Home;
