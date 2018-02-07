import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default () => (
  <header className="Header">
    <img className="Header-logo" src="../logo.png" alt="Wesley Medeiros Arquitetura" />
    <div className="Header-nav">
      <Link className="transition-item" to="/">Projetos</Link>
      <Link className="transition-item" to="/about">Sobre</Link>
      <Link className="transition-item" to="/contact">Contato</Link>
    </div>
  </header>
);