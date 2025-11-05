import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <span className="logo-text">Deuda Interna</span>
        </div>
        <nav>
          <a href="#about">Quiénes Somos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
