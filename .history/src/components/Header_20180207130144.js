import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../logo.png';
import Menu from '../menu.svg';
import Close from '../close.svg';

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }
  render () {
    return (
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
        <div className="Header-modal" style={ modalOpen ? { display: 'flex' } : { display: 'none' }}>
          <img src={Close} alt="close" />
        </div>
      </header>
    );
  }
}