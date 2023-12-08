import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Logo = () => {
  const imagePath = useSelector((state) => state.logoImagePath);
  return (
    <div className="logo">
      <Link to="/">
        <img src={imagePath} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
