import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../logo.png';

export default () => (
  <header className="Header">
    <div className="Header-logo">
      <img src={ Logo } alt="Wesley Medeiros Arquitetura" />
    </div>
    <div className="Header-nav">
      <Link className="transition-item list-page" to="/">Projetos</Link>
      <Link className="transition-item list-page" to="/about">Sobre</Link>
      <Link className="transition-item list-page" to="/contact">Contato</Link>
    </div>
  </header>
);