import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { siteConfig } from '../config/site';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" className={styles.logoWrapper} onClick={closeMenu}>
          <img 
            src={siteConfig.logoUrl} 
            alt="Emblingo Logo" 
            className={styles.logoImage} 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className={styles.logoText} style={{ display: 'none' }}>
            {siteConfig.name}
          </span>
        </Link>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <Link to="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={styles.navLink} onClick={closeMenu}>About</Link>
          <Link to="/products" className={styles.navLink} onClick={closeMenu}>Products</Link>
          <Link to="/support" className={styles.navLink} onClick={closeMenu}>Support</Link>
          
          <div className={styles.ctaWrapper}>
            <Link to="/products/keam-master" onClick={closeMenu}>
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>
        </nav>

        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
