import React from 'react';
import './Home.css';

export default () => (
  <header className="Header">
    <h1 className="Header-logo">Wesley Medeiros</h1>
    <div className="Header-nav">
      <Link to="/">Home</Link>
    </div>
  </header>
);