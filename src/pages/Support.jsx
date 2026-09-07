import React from 'react';
import styles from './Support.module.css';
import { siteConfig } from '../config/site';
import { HelpCircle, AlertCircle, Book, Lock, Mail } from 'lucide-react';

const Support = () => {
  return (
    <div className={styles.supportPage}>
      <header className={styles.pageHeader}>
        <div className="container text-center">
          <h1 className={styles.headerTitle}>Need Help?</h1>
          <p className={styles.headerSubtitle}>
            We're here to support your learning journey.
          </p>
        </div>
      </header>

      <section className={`py-section ${styles.contentSection}`}>
        <div className={`container ${styles.containerNarrow}`}>
          
          <div className={styles.helpGrid}>
            <div className={styles.helpCard}>
              <Lock className={styles.icon} size={28} />
              <h3>Account & Login</h3>
              <p>Issues with password resets, accessing your account, or updating your profile information.</p>
            </div>
            
            <div className={styles.helpCard}>
              <AlertCircle className={styles.icon} size={28} />
              <h3>App Support</h3>
              <p>Technical assistance for the Emblingo mobile application.</p>
            </div>
            
            <div className={styles.helpCard}>
              <Book className={styles.icon} size={28} />
              <h3>Learning Content</h3>
              <p>Questions about syllabus coverage, errors in questions, or clarification on solutions.</p>
            </div>
            
            <div className={styles.helpCard}>
              <HelpCircle className={styles.icon} size={28} />
              <h3>Privacy & Data</h3>
              <p>Inquiries regarding your personal data or our privacy practices.</p>
            </div>
          </div>

          <div className={styles.contactBlock}>
            <Mail className={styles.contactIcon} size={40} />
            <h2>Contact Support</h2>
            <p>If you couldn't find the answer you were looking for, our support team is ready to help.</p>
            <a href={`mailto:${siteConfig.supportEmail}`} className={styles.emailLink}>
              {siteConfig.supportEmail}
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Support;
