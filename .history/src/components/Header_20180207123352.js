import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../logo.png';
import Menu from '../menu.svg';

export default () => (
  <header className="Header">
    <div className="Header-logo">
      <img src={ Logo } alt="Wesley Medeiros Arquitetura" />
    </div>
    <div className="Header-button">
      <Menu />
    </div>
    <div className="Header-nav">
      <Link to="/">Projetos</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </div>
  </header>
);