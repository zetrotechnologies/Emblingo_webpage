import React from 'react';
import styles from './LegalLayout.module.css';

const LegalLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className={styles.legalPage}>
      <header className={styles.legalHeader}>
        <div className="container">
          <h1 className={styles.title}>{title}</h1>
          {lastUpdated && <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>}
        </div>
      </header>
      
      <div className={styles.contentWrapper}>
        <div className={`container ${styles.legalContent}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LegalLayout;
