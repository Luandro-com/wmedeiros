import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProgressiveImage src='http://unsplash.it/500' placeholder='http://unsplash.it/200'>
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
