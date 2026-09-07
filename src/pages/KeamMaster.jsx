import React from 'react';
import { BookOpen, Target, BarChart2 } from 'lucide-react';
import styles from './KeamMaster.module.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const KeamMaster = () => {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>EMBLINGO EXAM PREPARATION</div>
            <h1 className={styles.heroTitle}>Emblingo — KEAM Preparation</h1>
            <p className={styles.heroDescription}>
              Strengthen your preparation with structured subject and chapter-based learning, previous-year questions, and detailed progress tracking specifically tailored for the KEAM syllabus.
            </p>
            <div className={styles.ctaWrapper}>
              <Link to="/contact">
                <Button variant="primary">Get Access</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={`py-section ${styles.introSection}`}>
        <div className="container text-center">
          <h2 className="mb-4">Focused Curriculum</h2>
          <p className={styles.introText}>
            Our KEAM syllabus environment offers a structured approach to learning, focusing on practice, understanding solutions, and monitoring personal progress across all relevant subjects.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className={`py-section ${styles.featuresSection}`}>
        <div className="container">
          <h2 className="text-center mb-4">Core Capabilities</h2>
          <div className={styles.featuresGrid}>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <BookOpen size={32} />
              </div>
              <div>
                <h3>Subject-Wise Structure</h3>
                <p>Content is logically divided by subjects and chapters, ensuring systematic coverage of the syllabus.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Target size={32} />
              </div>
              <div>
                <h3>Extensive Question Bank</h3>
                <p>Practice with previous year questions and chapter-specific exercises designed for targeted improvement.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <BarChart2 size={32} />
              </div>
              <div>
                <h3>Progress Analytics</h3>
                <p>Track your practice history, evaluate your scores, and identify areas that require more focus.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-section ${styles.ctaSection}`}>
        <div className="container">
          <h2>Ready to start your preparation?</h2>
          <div className="mt-4">
            <Link to="/contact">
              <Button variant="secondary">Contact Us to Enroll</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeamMaster;
