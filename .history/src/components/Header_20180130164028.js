import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="Header">
          <h1 className="Header-logo">Wesley Medeiros</h1>
          <div className="Header-nav">
            <nav></nav>
          </div>
        </header>
    );
  }
}

export default Header;
