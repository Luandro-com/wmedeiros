import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <ProgressiveImage src='https://picsum.photos/300/?random' placeholder='https://picsum.photos/300/?random'>
            {(src, loading) => (
              <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt='my thing'/>
            )}
          </ProgressiveImage>
          <h1 className="App-title">Welcome to React</h1>
        </header>
    );
  }
}

export default Header;
