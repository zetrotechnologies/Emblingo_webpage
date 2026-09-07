import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, BarChart2 } from 'lucide-react';
import Button from '../components/Button';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homePage}>
      {/* App-Synced Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>EMBLINGO LEARNING</div>
            <h1 className={styles.heroTitle}>Prepare Smarter.<br/>Achieve Further.</h1>
            <p className={styles.heroDescription}>
              A focused digital learning experience designed to help students learn systematically, practice effectively, and make meaningful progress.
            </p>
            <div className={styles.heroBtns}>
              <Link to="/products/keam-master">
                <Button variant="primary">Start Learning</Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary">Explore Emblingo</Button>
              </Link>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.appMockup}>
              <div className={styles.mockupHeader}>
                <div className={styles.dots}>
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.greetingCard}>
                  <h4>Continue Learning</h4>
                  <p>Pick up right where you left off.</p>
                </div>
                
                <div className={styles.subjectCards}>
                  <div className={styles.subjectCard}>
                    <div className={`${styles.subjectIcon} ${styles.iconPhysics}`}>
                      <Target size={20} />
                    </div>
                    <span>Physics</span>
                  </div>
                  <div className={styles.subjectCard}>
                    <div className={`${styles.subjectIcon} ${styles.iconChemistry}`}>
                      <BookOpen size={20} />
                    </div>
                    <span>Chemistry</span>
                  </div>
                  <div className={styles.subjectCard}>
                    <div className={`${styles.subjectIcon} ${styles.iconMath}`}>
                      <BarChart2 size={20} />
                    </div>
                    <span>Mathematics</span>
                  </div>
                </div>
                
                <div className={styles.progressCard}>
                  <div className={styles.progressText}>
                    <h4>Your Progress</h4>
                    <p>Keep up the good work!</p>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A smarter way to learn */}
      <section className={`py-section ${styles.featuresSection}`}>
        <div className="container">
          <h2 className="text-center mb-4">A smarter way to learn</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>
                <BookOpen size={24} />
              </div>
              <h3>Structured Learning</h3>
              <p>Systematically broken down chapters and subjects designed for maximum retention.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>
                <Target size={24} />
              </div>
              <h3>Focused Practice</h3>
              <p>Engage with previous year questions and targeted exercises without distractions.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>
                <BarChart2 size={24} />
              </div>
              <h3>Progress Tracking</h3>
              <p>Monitor your improvements through clear, honest insights into your learning journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Flow */}
      <section className={`py-section ${styles.flowSection}`}>
        <div className="container text-center">
          <h2 className="mb-4">The Learning Path</h2>
          <div className={styles.flowContainer}>
            <div className={styles.flowNode}>
              <div className={styles.flowIcon}>01</div>
              <h4>Learn</h4>
            </div>
            <div className={styles.flowLine}></div>
            <div className={styles.flowNode}>
              <div className={styles.flowIcon}>02</div>
              <h4>Practice</h4>
            </div>
            <div className={styles.flowLine}></div>
            <div className={styles.flowNode}>
              <div className={`${styles.flowIcon} ${styles.flowIconActive}`}>03</div>
              <h4>Improve</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={`py-section ${styles.productsSection}`}>
        <div className="container">
          <div className={styles.productMinimal}>
            <div className={styles.productContent}>
              <div className={styles.eyebrowLight}>Emblingo Learning</div>
              <h2>Focused preparation for competitive examinations.</h2>
              <p>
                Structured KEAM preparation through Emblingo, delivering comprehensive exam tools, solutions, hints, and structured progress tracking.
              </p>
              <Link to="/products/keam-master" className={styles.textLink}>
                Explore KEAM Preparation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-section ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaContainer}`}>
          <h2>Ready to learn smarter?</h2>
          <p>Build a better study routine with Emblingo.</p>
          <div className="mt-4">
            <Link to="/products">
              <Button variant="secondary" style={{ border: 'none', color: 'var(--primary)', backgroundColor: '#fff' }}>Get Started</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
