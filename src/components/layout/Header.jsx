import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <Link to="/"><h1>Culi's Prototype Playground</h1></Link>
    </header>
  );
};

export default Header;
