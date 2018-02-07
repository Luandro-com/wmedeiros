import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../logo.png';
import Menu from '../menu.svg';
import Close from '../close.svg';

export default () => (
  <header className="Header">
    <div className="Header-logo">
      <img src={ Logo } alt="Wesley Medeiros Arquitetura" />
    </div>
    <div onClick={handleClick} className="Header-button">
      <img src={Menu} alt="menu" />
    </div>
    <div className="Header-nav">
      <Link to="/">Projetos</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </div>
    <div className="Header-modal">
      <img src={Close} alt="close" />
    </div>
  </header>
);