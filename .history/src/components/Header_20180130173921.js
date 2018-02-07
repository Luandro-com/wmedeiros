import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import Logo from '../logo.png';

export default () => (
  <header className="Header">
    <div className="Header-logo" />
    <div className="Header-nav">
      <Link className="transition-item" to="/">Projetos</Link>
      <Link className="transition-item" to="/about">Sobre</Link>
      <Link className="transition-item" to="/contact">Contato</Link>
    </div>
  </header>
);