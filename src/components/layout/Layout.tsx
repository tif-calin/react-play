import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './Layout.css';

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;