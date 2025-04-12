import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles.css';

function Header() {
  return (
    <nav className="header">
      <h1>
        <Link to="/">Mike</Link>
      </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}

export default Header;