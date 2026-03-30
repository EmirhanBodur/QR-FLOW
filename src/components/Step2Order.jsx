import React from 'react';
import { Receipt, QrCode as QrIcon, ArrowLeft } from 'lucide-react';

export default function Step2Order({ orderNumber, setOrderNumber, onSubmit, onBack }) {
  return (
    <div className="w-full max-w-[600px] flex flex-col items-center animate-fade-in">
      <div className="w-full bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-[#F1F5F9] rounded-full flex items-center justify-center text-[#3B4C74] mb-8">
          <Receipt size={28} strokeWidth={2} />
        </div>
        <form onSubmit={onSubmit} className="w-full flex flex-col items-center">
          <div className="w-full text-left mb-2">
            <label className="text-sm font-semibold text-slate-600 ml-1">Sipariş Numarası</label>
          </div>
          <input
            type="text"
            placeholder="Sipariş numarasını girin"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="w-full bg-[#E2E8F0]/50 text-slate-800 placeholder-slate-400 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B4C74]/20 transition-all font-medium mb-6"
            autoFocus
          />
          <button type="submit" disabled={!orderNumber.trim()} className="bg-gradient-to-r from-[#5C73A4] to-[#8FA2DC] hover:opacity-90 disabled:opacity-50 text-white font-semibold py-4 px-10 rounded-full flex items-center gap-2 transition-all shadow-md w-[80%] justify-center">
            QR Kod Oluştur <QrIcon size={18} />
          </button>
        </form>
      </div>
      <button onClick={onBack} className="mt-8 flex items-center gap-2 text-[#3B4C74] font-semibold hover:text-[#1E293B] transition-colors">
        <ArrowLeft size={18} /> Seçime geri dön
      </button>
    </div>
  );
}