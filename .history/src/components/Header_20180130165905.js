import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default () => (
  <header className="Header">
    <h1 className="Header-logo">Wesley Medeiros</h1>
    <div className="Header-nav">
      <Link to="/">Projetos</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </div>
  </header>
);