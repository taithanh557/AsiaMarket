import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingHelp: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Nút hình tròn */}
      <Button
        className="rounded-full h-14 w-14 bg-shopee text-white shadow-lg hover:bg-shopee-dark flex items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        <MessageCircle size={24} />
      </Button>

      {/* Popup khi mở */}
      {open && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-xl shadow-xl w-72 text-sm">
          <h3 className="font-semibold mb-2 text-shopee">Need help?</h3>
          <p className="text-gray-700 mb-3">
            Chat with us or visit the <a href="/customer-service" className="text-shopee underline">Help Center</a>.
          </p>
          <Button variant="outline" className="w-full" onClick={() => window.location.href = '/customer-service'}>
            Go to Help Center
          </Button>
        </div>
      )}
    </div>
  );
};

export default FloatingHelp;
