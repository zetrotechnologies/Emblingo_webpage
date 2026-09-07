import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { siteConfig } from '../config/site';

const Terms = () => {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="[Date Placeholder]">
      <div className="placeholderNote">
        <p><strong>Note for Legal Review:</strong> These terms contain placeholders and require final legal review to ensure accuracy with business operations.</p>
      </div>

      <h2>1. Acceptance</h2>
      <p>
        By accessing and using Emblingo services (including the website and Emblingo application), you agree to be bound by these Terms and Conditions.
      </p>

      <h2>2. Account Responsibility</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
      </p>

      <h2>3. Use of Services</h2>
      <p>
        [Placeholder: Define acceptable use of the platform.]
      </p>

      <h2>4. Educational Content</h2>
      <p>
        The content provided on Emblingo is for educational preparation purposes. While we strive for accuracy, we do not guarantee specific examination results or admissions.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content, including text, graphics, logos, and software, is the property of Emblingo and is protected by intellectual property laws.
      </p>

      <h2>6. Prohibited Use</h2>
      <p>
        You agree not to use the platform for any illegal activities, not to distribute malware, and not to scrape or reverse-engineer our services.
      </p>

      <h2>7. Availability</h2>
      <p>
        We aim to provide uninterrupted service but do not guarantee that the platform will be available at all times. Maintenance and updates may cause temporary disruptions.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        [Placeholder: Include necessary legal disclaimers regarding service provision, warranty, etc.]
      </p>

      <h2>9. Account Termination</h2>
      <p>
        We reserve the right to suspend or terminate your account if you violate these terms.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may modify these Terms at any time. Your continued use of the platform constitutes acceptance of those changes.
      </p>

      <h2>11. Contact</h2>
      <p>
        For questions regarding these terms, contact: {siteConfig.contactEmail}
      </p>
    </LegalLayout>
  );
};

export default Terms;
