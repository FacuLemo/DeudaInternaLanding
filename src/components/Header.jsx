import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <img src='./logo.png' className='logo-img' alt="Logo" />
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={toggleMenu}>Quiénes Somos</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
          </ul>
        </nav>

        <button className={`menu-toggle ${isMenuOpen ? 'toggle-active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
      {isMenuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
