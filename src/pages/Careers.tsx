import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, Users, MapPin } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Careers at AsiaMart</h1>

          {/* Company Overview */}
          <div className="space-y-8 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800">Join Our Team</h2>
            <p className="text-lg text-gray-700">
              At AsiaMart, we are always looking for passionate and driven individuals to join our team. We believe in fostering a collaborative environment where creativity and innovation thrive.
            </p>
            <p className="text-lg text-gray-700">
              Whether you’re interested in working in technology, marketing, customer support, or operations, we offer a range of exciting career opportunities. Come and be a part of something special as we grow our online marketplace to bring Asian products to the world.
            </p>
          </div>

          {/* Available Positions */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800">Available Positions</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Briefcase className="w-8 h-8 text-shopee" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Product Manager</h3>
                  <p className="text-gray-700">Location: Remote | Full-Time</p>
                  <p className="text-gray-700">
                    As a Product Manager, you will lead the development of new features and product enhancements, working closely with engineering and design teams.
                  </p>
                  <a href="#apply" className="text-shopee font-semibold hover:underline">
                    Apply Now
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-shopee" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Customer Support Specialist</h3>
                  <p className="text-gray-700">Location: Remote | Full-Time</p>
                  <p className="text-gray-700">
                    We are looking for a Customer Support Specialist to help resolve issues, answer queries, and ensure customers have a seamless shopping experience.
                  </p>
                  <a href="#apply" className="text-shopee font-semibold hover:underline">
                    Apply Now
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-shopee" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Operations Coordinator</h3>
                  <p className="text-gray-700">Location: Headquarters | Full-Time</p>
                  <p className="text-gray-700">
                    The Operations Coordinator will manage logistics, oversee daily operations, and coordinate between teams to ensure smooth execution.
                  </p>
                  <a href="#apply" className="text-shopee font-semibold hover:underline">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* How to Apply */}
          <div className="space-y-6 mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">How to Apply</h2>
            <p className="text-lg text-gray-700">
              To apply for any of the positions listed above, please send your resume and a cover letter to <strong>careers@asiamart.com</strong>. Make sure to mention the position you're applying for in the subject line.
            </p>
            <p className="text-lg text-gray-700">
              We look forward to hearing from you and welcoming talented individuals to our growing team.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
