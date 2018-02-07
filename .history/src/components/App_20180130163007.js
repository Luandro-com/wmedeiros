import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProgressiveImage src='large-image.jpg' placeholder='tiny-image.jpg'>
            {(src, loading) => (
              <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt='an image'/>
            )}
          </ProgressiveImage>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
