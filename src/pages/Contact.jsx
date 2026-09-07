import React from 'react';
import styles from './Support.module.css';
import { siteConfig } from '../config/site';
import { Mail, Building } from 'lucide-react';

const Contact = () => {
  return (
    <div className={styles.supportPage}>
      <header className={styles.pageHeader}>
        <div className="container text-center">
          <h1 className={styles.headerTitle}>Contact Us</h1>
          <p className={styles.headerSubtitle}>
            Get in touch with the Emblingo team.
          </p>
        </div>
      </header>

      <section className={`py-section ${styles.contentSection}`}>
        <div className={`container ${styles.containerNarrow}`}>
          
          <div className={styles.contactBlock}>
            <h2>Get in Touch</h2>
            <p>For general inquiries, partnerships, or support, please reach out via email.</p>
            
            <div className={styles.contactInfoList}>
              <div className={styles.contactInfoItem}>
                <Mail className={styles.infoIcon} size={24} />
                <div>
                  <strong>Email</strong>
                  <br />
                  <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
                </div>
              </div>
              
              <div className={styles.contactInfoItem}>
                <Building className={styles.infoIcon} size={24} />
                <div>
                  <strong>Headquarters</strong>
                  <br />
                  <span>[Placeholder: Official Registered Address]</span>
                </div>
              </div>
            </div>
            
            <div className="placeholderNote mt-4">
              <p><strong>Note:</strong> Official contact details and addresses are pending configuration.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
