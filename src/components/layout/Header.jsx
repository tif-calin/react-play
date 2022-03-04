import React from 'react';
import { Link } from 'react-router-dom';
import RainbowText from '../RainbowText';

const Header = () => {
  return (
    <header className="Header">
      {/* <Link to="/"><h1>Culi's Prototype Playground</h1></Link> */}
      <Link to="/"><span className="site-title"><RainbowText text="Culi's Prototype Playground" /></span></Link>
    </header>
  );
};

export default Header;
