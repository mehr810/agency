// app/privacy-policy/page.tsx (App Router)
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800 py-10">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy | Mighty Five</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: 19-09-2025</p>

      <p className="mb-4">
        Mighty Five respects your privacy and is committed to protecting the
        personal information you share with us. This Privacy Policy explains how
        we collect, use, disclose, and safeguard your data when you visit our
        website, use our services, or interact with our 24/7 call center.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
      <p className="mb-4">
        This Privacy Policy applies to all visitors, clients, and users of our
        website mighty-five.com, as well as customers who engage with our
        marketing, branding, or call center services. By using our site or
        services, you agree to the terms described here.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Personal Identification Data:</strong> Name, email address,
          phone number, business details, job title.
        </li>
        <li>
          <strong>Service Data:</strong> Information provided during campaign
          creation, call center interactions, or client onboarding.
        </li>
        <li>
          <strong>Technical Data:</strong> IP address, browser type, device
          information, cookies, and analytics identifiers.
        </li>
        <li>
          <strong>Payment Information:</strong> Limited billing details (handled
          securely by third-party payment processors).
        </li>
        <li>
          <strong>Call Records & Messages:</strong> For clients using our call
          center or virtual assistant services, we may securely record
          interactions as part of quality control.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Deliver and improve our digital marketing and call center services.</li>
        <li>Respond to inquiries, provide estimates, and maintain customer support.</li>
        <li>Manage contracts, invoicing, and client relationships.</li>
        <li>
          Analyze site traffic and marketing performance (via tools like Google
          Analytics).
        </li>
        <li>
          Ensure compliance with legal, regulatory, or contractual obligations.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing & Disclosure</h2>
      <p className="mb-4">
        We do not sell personal information. However, we may share your data
        with:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          Trusted service providers (e.g., cloud hosting, analytics, CRM,
          payment processors).
        </li>
        <li>Business partners and subcontractors working on your campaigns.</li>
        <li>
          Legal authorities when required to comply with law or protect our
          rights.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies & Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies, pixels, and similar technologies to:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Personalize your browsing experience.</li>
        <li>Measure campaign effectiveness.</li>
        <li>Track website performance.</li>
      </ul>
      <p className="mb-4">
        You can control or delete cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Retention</h2>
      <p className="mb-4">
        We retain personal data only as long as necessary for service delivery,
        business purposes, or legal compliance. Call records and campaign data
        may be archived securely for quality and auditing.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. International Data Transfers</h2>
      <p className="mb-4">
        If you are located outside the United States, your data may be
        transferred to and processed in the U.S. and other jurisdictions where
        we operate. We take steps to ensure adequate safeguards, including
        GDPR-compliant agreements where applicable.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Your Rights</h2>
      <p className="mb-4">Depending on your jurisdiction, you may have the following rights:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Access & Portability:</strong> Request a copy of your data.
        </li>
        <li>
          <strong>Correction:</strong> Ask us to update or fix inaccurate data.
        </li>
        <li>
          <strong>Deletion:</strong> Request removal of your information.
        </li>
        <li>
          <strong>Opt-out:</strong> Decline marketing communications at any
          time.
        </li>
        <li>
          <strong>GDPR Users (EU/UK):</strong> Rights under Articles 15–22,
          including objection to automated decision-making.
        </li>
        <li>
          <strong>CCPA Users (California):</strong> Right to know, delete, and
          opt-out of “sale” of data (though we do not sell personal data).
        </li>
      </ul>
      <p className="mb-4">
        To exercise rights, contact us at{" "}
        <a
          href="mailto:privacy@mighty-five.com"
          className="text-blue-600 underline"
        >
          privacy@mighty-five.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures including encryption,
        access controls, and secure hosting. However, no method of transmission
        is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Children’s Privacy</h2>
      <p className="mb-4">
        Our services are not directed to children under 16. We do not knowingly
        collect personal data from minors.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">11. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy periodically to reflect changes in law
        or business practices. Updates will be posted with a revised “Last
        Updated” date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">12. Contact Us</h2>
      <p className="mb-2">For questions or requests related to this Privacy Policy, please contact us at:</p>
      <p className="mb-1">Mighty Five</p>
      <p className="mb-1">5900 Balcones Drive, Suite 7070</p>
      <p className="mb-1">Austin, TX 78731, USA</p>
      <p className="mb-1">
        📧 Email:{" "}
        <a
          href="mailto:privacy@mighty-five.com"
          className="text-blue-600 underline"
        >
          privacy@mighty-five.com
        </a>
      </p>
      <p>📞 Phone: +1 (512) 555-0199</p>
    </main>
  );
}
