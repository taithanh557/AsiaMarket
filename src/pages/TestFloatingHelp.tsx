import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestFloatingHelp: React.FC = () => {
  const [open, setOpen] = useState(false);
  console.log('✅ TestFloatingHelp mounted');

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl p-4">Test Floating Help</h1>

      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="rounded-full h-14 w-14 bg-blue-500 text-white shadow-lg flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          <MessageCircle size={24} />
        </Button>

        {open && (
          <div className="absolute bottom-16 right-0 bg-white p-4 rounded-xl shadow-xl w-72 text-sm">
            <h3 className="font-semibold mb-2 text-blue-500">Need help?</h3>
            <p className="text-gray-700 mb-3">
              Visit our <a href="/customer-service" className="text-blue-600 underline">Help Center</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestFloatingHelp;
