import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { siteConfig } from '../config/site';

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="September 2026">
      <h2>1. Introduction</h2>
      <p>
        Welcome to Emblingo. We respect your privacy and are committed to protecting your personal data. 
        This Privacy Policy informs you about how we handle your personal information when you use the Emblingo 
        application and access our educational products, including the KEAM syllabus material.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We only collect the information necessary to provide and improve our educational services:</p>
      <ul>
        <li><strong>Account Information:</strong> When you create an account, we may collect basic details such as your name, email address, and authentication credentials.</li>
        <li><strong>Learning Data:</strong> As you use our KEAM preparation materials and other educational content, we collect data regarding your practice progress, scores, chapter completions, and learning patterns to provide you with insights and track your progress.</li>
        <li><strong>Communication Data:</strong> If you contact our support team, we retain the correspondence to assist you effectively.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>Your information is used strictly to deliver and enhance the Emblingo platform:</p>
      <ul>
        <li>To provide, maintain, and secure your account.</li>
        <li>To deliver educational content and track your academic progress within our KEAM preparation modules.</li>
        <li>To respond to your inquiries and support requests.</li>
        <li>To notify you about important updates to our platform or your account.</li>
      </ul>

      <h2>4. Data Storage and Security</h2>
      <p>
        We employ appropriate technical and organizational measures to secure your personal data. 
        Your data is stored securely, and we follow industry-standard practices to protect it against unauthorized access, alteration, or deletion.
      </p>

      <h2>5. Sharing of Information</h2>
      <p>
        We do not sell, rent, or trade your personal information. We may share information only in the following limited circumstances:
      </p>
      <ul>
        <li>With trusted service providers who assist us in operating our application (e.g., cloud hosting), bound by confidentiality obligations.</li>
        <li>If required by law, regulation, or legal process.</li>
      </ul>

      <h2>6. Account Deletion and Data Retention</h2>
      <p>
        You have the right to request the deletion of your account and associated data at any time. 
        We retain your information only for as long as your account is active or as needed to provide you services, 
        comply with our legal obligations, or resolve disputes.
      </p>

      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <strong>{siteConfig.contactEmail}</strong>.
      </p>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
