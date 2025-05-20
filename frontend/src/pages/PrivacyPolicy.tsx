import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Privacy Policy</h1>

          <div className="space-y-6 text-lg text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
              <p>
                At AsiaMart, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services. By using our website, you agree to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p>
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6">
                <li>Personal identification information (such as name, email address, shipping address, etc.)</li>
                <li>Payment information (such as credit card details, billing address, etc.)</li>
                <li>Usage data (such as browsing history, IP address, location, etc.)</li>
                <li>Cookies and tracking technologies to improve your experience on our site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p>
                The information we collect may be used for the following purposes:
              </p>
              <ul className="list-disc pl-6">
                <li>To process your orders and provide the products and services you request.</li>
                <li>To communicate with you regarding your account, orders, and customer support inquiries.</li>
                <li>To improve our website and services based on user feedback and analytics.</li>
                <li>To send promotional emails and offers (you may opt-out at any time).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Protect Your Information</h2>
              <p>
                We use a variety of security measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6">
                <li>Encryption of sensitive data transmitted through our website.</li>
                <li>Access controls and secure servers to prevent unauthorized access.</li>
                <li>Regular security updates and monitoring to ensure the safety of your data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6">
                <li>With trusted third-party service providers who assist us in operating our website and processing payments.</li>
                <li>If required by law or to protect the rights and safety of AsiaMart, our users, or others.</li>
                <li>With our partners for marketing purposes (with your consent).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
              <p>
                As a user, you have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6">
                <li>The right to access the personal information we hold about you.</li>
                <li>The right to correct or update any inaccurate or incomplete information.</li>
                <li>The right to request the deletion of your personal data (subject to certain legal restrictions).</li>
                <li>The right to object to or restrict the processing of your personal data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience. A cookie is a small file placed on your device that allows us to remember certain preferences and actions. You can adjust your browser settings to reject cookies, but this may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Privacy Policy</h2>
              <p>
                AsiaMart reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with the updated date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at <strong>support@asiamart.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
