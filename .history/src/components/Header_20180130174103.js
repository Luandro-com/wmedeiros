import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../logo.png';

export default () => (
  <header className="Header">
    <img className="Header-logo" src={ Logo } alt="Wesley Medeiros Arquitetura" height="100"/>
    <div className="Header-nav">
      <Link className="transition-item" to="/">Projetos</Link>
      <Link className="transition-item" to="/about">Sobre</Link>
      <Link className="transition-item" to="/contact">Contato</Link>
    </div>
  </header>
);