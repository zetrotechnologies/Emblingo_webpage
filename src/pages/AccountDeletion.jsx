import React from 'react';
import LegalLayout from '../components/LegalLayout';
import { siteConfig } from '../config/site';

const AccountDeletion = () => {
  return (
    <LegalLayout title="Account Deletion" lastUpdated="[Date Placeholder]">
      <div className="placeholderNote">
        <p><strong>Note for Legal Review:</strong> The exact data deletion processes must be verified against actual backend implementation.</p>
      </div>

      <h2>How to Request Account Deletion</h2>
      <p>
        If you wish to permanently delete your Emblingo account, you can submit a deletion request. Once processed, this action cannot be undone.
      </p>

      <h3>In-App Deletion (If Applicable)</h3>
      <p>
        [Placeholder: Describe how users can delete their account directly from the Emblingo app settings.]
      </p>

      <h3>Email Request</h3>
      <p>
        Alternatively, you can request account deletion by emailing our support team at <strong>{siteConfig.supportEmail}</strong> with the subject line "Account Deletion Request". Please email us from the address associated with your Emblingo account.
      </p>

      <h2>What Happens After Deletion</h2>
      <ul>
        <li>Your profile information will be permanently removed.</li>
        <li>Your learning progress, test scores, and bookmarks will be deleted.</li>
        <li>You will lose access to all personalized content on the platform.</li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        [Placeholder: Explain what data might be retained for legal/regulatory reasons (e.g., transaction records if payment features are added in the future).]
      </p>
    </LegalLayout>
  );
};

export default AccountDeletion;
