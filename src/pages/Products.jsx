import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import styles from './Products.module.css';

const Products = () => {
  return (
    <div className={styles.productsPage}>
      <header className={styles.header}>
        <div className="container text-center">
          <div className={styles.eyebrow}>CURRICULUM</div>
          <h1 className={styles.headerTitle}>Educational Products</h1>
          <p className={styles.headerSubtitle}>
            Focused preparation platforms provided by Emblingo.
          </p>
        </div>
      </header>

      <section className={styles.productList}>
        <div className="container">
          <div className={styles.productCard}>
            <div className={styles.productInfo}>
              <div className={styles.eyebrowLight}>PREPARATION</div>
              <h3>Emblingo — KEAM Preparation</h3>
              <p className={styles.productDesc}>
                A competitive-examination preparation platform designed to help students practice and strengthen their preparation through structured subject and chapter-based learning, previous-year questions, solutions, hints, and progress tracking specifically tailored for the KEAM syllabus.
              </p>
              
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <Check size={18} className={styles.checkIcon} /> 
                  <span>Subject-wise preparation</span>
                </div>
                <div className={styles.featureItem}>
                  <Check size={18} className={styles.checkIcon} /> 
                  <span>Chapter-wise practice</span>
                </div>
                <div className={styles.featureItem}>
                  <Check size={18} className={styles.checkIcon} /> 
                  <span>Previous year questions</span>
                </div>
                <div className={styles.featureItem}>
                  <Check size={18} className={styles.checkIcon} /> 
                  <span>Progress tracking</span>
                </div>
              </div>

              <div className={styles.actionArea}>
                <Link to="/products/keam-master">
                  <Button variant="primary">Explore KEAM Preparation</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
