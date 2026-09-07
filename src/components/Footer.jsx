import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logoWrapper}>
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
          <p className={styles.description}>{siteConfig.description}</p>
        </div>
        
        <div className={styles.linksCol}>
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className={styles.linksCol}>
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/account-deletion">Account Deletion</Link></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <div className="container">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
