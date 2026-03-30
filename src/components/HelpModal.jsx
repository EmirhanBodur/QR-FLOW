import React from 'react';
import { X, HelpCircle, User, QrCode as QrIcon, Download } from 'lucide-react';

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md p-8 relative transform transition-all">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition-colors bg-slate-50 p-2 rounded-full">
          <X size={20} />
        </button>
        
        <div className="w-14 h-14 bg-[#F4F6FB] text-[#3B4C74] rounded-2xl flex items-center justify-center mb-6">
          <HelpCircle size={28} strokeWidth={2} />
        </div>
        
        <h2 className="text-2xl font-extrabold text-[#1E293B] mb-3">QR-Flow Nedir?</h2>
        <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
          Sipariş numaralarınızı ve kargo verilerinizi anında yüksek çözünürlüklü vektörel QR kodlara dönüştüren akıllı bir araçtır.
        </p>
        
        <div className="space-y-5 mb-8">
          <div className="flex gap-4 items-start">
            <div className="bg-[#F4F6FB] p-2.5 rounded-xl text-[#3B4C74] shrink-0"><User size={18} /></div>
            <div>
              <h4 className="text-[14px] font-bold text-slate-800">Akıllı Önbellek & Geçmiş</h4>
              <p className="text-[13px] text-slate-500 mt-1 leading-relaxed">Sisteme girdiğiniz isimle sizi hatırlar. Geçmişte ürettiğiniz tüm kodlara tek sayfadan ulaşırsınız.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-[#F4F6FB] p-2.5 rounded-xl text-[#3B4C74] shrink-0"><QrIcon size={18} /></div>
            <div>
              <h4 className="text-[14px] font-bold text-slate-800">Üstün Okunabilirlik</h4>
              <p className="text-[13px] text-slate-500 mt-1 leading-relaxed">Üretilen kodlar "Seviye H (%30)" hata düzeltme standardına sahiptir. Yıpranma durumunda bile okunur.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-[#F4F6FB] p-2.5 rounded-xl text-[#3B4C74] shrink-0"><Download size={18} /></div>
            <div>
              <h4 className="text-[14px] font-bold text-slate-800">Hızlı Dışa Aktarım</h4>
              <p className="text-[13px] text-slate-500 mt-1 leading-relaxed">Kodlarınızı saniyeler içinde şeffaf PNG olarak bilgisayarınıza indirebilir veya panoya kopyalayabilirsiniz.</p>
            </div>
          </div>
        </div>
        
        <button onClick={onClose} className="w-full bg-[#3B4C74] text-white font-bold py-4 rounded-[1rem] hover:bg-[#2c3957] transition-all shadow-md shadow-[#3B4C74]/20">
          Anladım, Kapat
        </button>
      </div>
    </div>
  );
}