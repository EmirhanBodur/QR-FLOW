import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function Navbar({ onStartOver, onOpenHelp }) {
  return (
    <nav className="relative z-10 flex justify-between items-center px-6 md:px-10 py-6">
      <button onClick={onStartOver} className="text-[#2B3654] font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity">
        QR-Flow
      </button>
      <div className="flex space-x-4 text-[#3B4C74]">
        <button 
          onClick={onOpenHelp}
          className="p-2 bg-slate-100/50 rounded-full hover:bg-slate-200 transition-colors"
          title="Yardım & Bilgi"
        >
          <HelpCircle size={20} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  );
}