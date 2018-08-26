import React from 'react';
import logo from '../logo.svg';
import '../styles/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <h3 className="footer__title">Powered by React</h3>
    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" >
      <img src={logo} className="footer__logo" alt="logo" />
    </a>
    <h3 className="footer__title">Made by Mateusz Janeczek</h3>
  </footer>
);

export default Footer;