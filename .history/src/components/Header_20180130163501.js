import React, { Component } from 'react';
import './Header.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProgressiveImage src='https://picsum.photos/300/?random' placeholder='https://picsum.photos/300/?random'>
            {(src, loading) => (
              <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt='my thing'/>
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
