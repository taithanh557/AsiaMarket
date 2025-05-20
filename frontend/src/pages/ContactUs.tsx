import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission
    alert('Your message has been sent successfully!');
    setMessage('');
    setEmail('');
    setName('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Contact Info Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-shopee" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-700">ntai3091@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-shopee" />
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-700">+84 931 935 503</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-shopee" />
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-gray-700">K10/11/14E Pham Van Nghi, Da Nang City, Viet Nam</p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    rows={4}
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-shopee text-white py-2 rounded-md mt-4 hover:bg-shopee-dark">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
