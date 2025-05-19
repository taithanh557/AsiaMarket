import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Terms & Conditions</h1>

          <div className="space-y-6 text-lg text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
              <p>
                Welcome to AsiaMart! These terms and conditions outline the rules and regulations for the use of our website and services. By accessing or using our services, you agree to comply with these terms. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Use of Our Services</h2>
              <p>
                You must use the services provided by AsiaMart in accordance with applicable laws and regulations. You agree not to use the site for any unlawful activities or activities that could harm the reputation of AsiaMart.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Account Registration</h2>
              <p>
                In order to access certain features of the website, you may need to register an account. You agree to provide accurate and complete information during registration and to update it if necessary. You are responsible for maintaining the confidentiality of your account details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Pricing and Payments</h2>
              <p>
                All prices listed on the AsiaMart website are in the applicable currency and may change from time to time. You agree to pay the total amount for your order, including taxes, shipping, and handling fees. Payments must be made through the available payment methods on the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Returns and Refunds</h2>
              <p>
                Our returns and refunds policy can be found on a separate page of the website. Please review it for information on how to return products and request a refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Privacy Policy</h2>
              <p>
                Your privacy is important to us. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p>
                AsiaMart is not liable for any indirect, incidental, or consequential damages arising from the use of our services or products. In the event of a product defect or issue, your sole remedy is to return the product for a refund or exchange, subject to our return policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Termination</h2>
              <p>
                AsiaMart reserves the right to suspend or terminate your account if we believe you have violated these terms and conditions. Upon termination, you will lose access to certain features of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions shall be governed by and construed in accordance with the laws of the country in which AsiaMart operates. Any disputes arising from these terms shall be resolved in the appropriate courts of that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
              <p>
                AsiaMart reserves the right to update or change these terms at any time. Any changes will be posted on this page with the updated date. Your continued use of the website after such changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at <strong>support@asiamart.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
