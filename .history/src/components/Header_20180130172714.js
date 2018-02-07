import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default () => (
  <header className="Header">
    <h1 className="Header-logo">Wesley Medeiros</h1>
    <div className="Header-nav">
      <Link className="transition-item" to="/">Projetos</Link>
      <Link className="transition-item" to="/about">Sobre</Link>
      <Link className="transition-item" to="/contact">Contato</Link>
    </div>
  </header>
);