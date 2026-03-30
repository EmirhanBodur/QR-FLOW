import React from 'react';
import { QrCode as QrIcon, ArrowRight } from 'lucide-react';

export default function Step1Name({ name, setName, onSubmit }) {
  return (
    <div className="w-full max-w-[540px] flex flex-col gap-6 animate-fade-in">
      <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 relative text-center">
        <div className="absolute -top-4 right-8 bg-[#F4F6FB] text-[#3B4C74] p-3 rounded-2xl shadow-sm border border-white">
          <QrIcon size={24} />
        </div>
        <h1 className="text-4xl font-bold text-[#1E293B] mb-4 leading-tight">QR-Flow'a <br/> Hoş Geldiniz</h1>
        <p className="text-slate-500 mb-8 text-[15px]">Sizi tanıyarak başlayalım. Size nasıl hitap edelim?</p>
        <form onSubmit={onSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Ad Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#F4F6FB] text-slate-800 placeholder-slate-400 text-center px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B4C74]/20 transition-all font-medium mb-8"
            autoFocus
          />
          <button type="submit" disabled={!name.trim()} className="bg-[#3B4C74] hover:bg-[#2c3957] disabled:opacity-50 text-white font-semibold py-3.5 px-8 rounded-full flex items-center gap-2 transition-all shadow-md shadow-[#3B4C74]/20">
            Devam Et <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}