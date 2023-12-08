import React from 'react';
import { useSelector } from 'react-redux';
import DateTime from './DateTime';
import Logo from './Logo';
import './Header.css';

const Header = ({ title }) => {
  const logoImagePath = useSelector((state) => state.logoImagePath);

  return (
    <header className="header">
      <Logo />
      <h1>{title}</h1>
      <div className="date-time">
        <DateTime />
      </div>
    </header>
  );
};

export default Header;
