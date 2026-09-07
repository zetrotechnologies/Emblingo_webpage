import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.aboutHero}>
        <div className="container text-center">
          <h1 className={styles.heroTitle}>About Emblingo</h1>
          <p className={styles.heroSubtitle}>
            Building a smarter way to prepare for competitive examinations.
          </p>
        </div>
      </header>

      <section className={`py-section ${styles.contentSection}`}>
        <div className={`container ${styles.containerNarrow}`}>
          <div className={styles.contentBlock}>
            <h2>Our Mission</h2>
            <p>
              Emblingo is being built with a simple goal: make competitive-exam preparation more structured, accessible, and technology-driven. We believe that with the right tools, focused practice, and meaningful feedback, students can achieve their full potential.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2>Our Vision</h2>
            <p>
              To become the leading platform for competitive examination preparation by providing students with a structured learning experience that emphasizes continuous improvement, rather than just rote memorization.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2>Our Approach</h2>
            <p>
              We focus on combining proven educational methods with modern technology. Our approach centers around:
            </p>
            <ul>
              <li><strong>Structured Learning:</strong> Breaking down complex syllabi into manageable, chapter-wise learning paths.</li>
              <li><strong>Focused Practice:</strong> Providing high-quality questions, including previous years' papers, to test and reinforce understanding.</li>
              <li><strong>Insightful Progress:</strong> Giving students clear visibility into their strengths and areas requiring improvement.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
