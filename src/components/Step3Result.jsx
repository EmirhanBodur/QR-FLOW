import React, { useState } from 'react';
import { CheckCircle2, Download, Copy, Trash2, Check } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';

export default function Step3Result({ currentUser, activeQr, setActiveQr, onDelete }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleDownload = () => {
    const canvas = document.getElementById('main-qr-canvas');
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `QR_Siparis_${activeQr.orderNumber}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const handleCopy = async () => {
    const canvas = document.getElementById('main-qr-canvas');
    if (canvas) {
      canvas.toBlob(async (blob) => {
        try {
          const item = new ClipboardItem({ 'image/png': blob });
          await navigator.clipboard.write([item]);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
          console.error('Kopyalama başarısız: ', err);
          alert('Tarayıcınız görsel kopyalamayı desteklemiyor olabilir.');
        }
      });
    }
  };

  const formatDate = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute:'2-digit' });
  };

  return (
    <div className="w-full max-w-4xl animate-fade-in flex flex-col items-center mt-4">
      <div className="flex items-center gap-2 bg-[#E2E8F0]/70 text-[#3B4C74] px-4 py-1.5 rounded-full text-[11px] font-bold mb-4">
        <CheckCircle2 size={14} className="text-[#3B4C74]" /> Adım 3 / 3 tamamlandı
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-3 text-center tracking-tight">QR Kodunuz Hazır</h1>
      <p className="text-slate-500 mb-12 text-center text-[14px] max-w-xl leading-relaxed">
        Hoş geldin {currentUser.name}! Sipariş #{activeQr.orderNumber} için yüksek çözünürlüklü QR kodun oluşturuldu.
      </p>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-14 w-full mb-20 items-center justify-center">
        <div className="w-full md:w-[55%] bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 lg:p-12 flex flex-col items-center justify-center">
          <div className="w-full max-w-[280px] aspect-square bg-[#111111] rounded-[1.5rem] p-5 flex items-center justify-center mb-10 shadow-lg relative">
             <div className="bg-white p-3 rounded-lg flex flex-col items-center justify-center w-full h-full">
                <p className="text-[9px] font-bold mb-1.5 text-center">QR-Flow Sipariş</p>
                <QRCodeCanvas 
                  id="main-qr-canvas"
                  value={activeQr.qrData} 
                  size={170} 
                  level={"H"} 
                  includeMargin={false}
                  style={{ width: '100%', height: 'auto', maxWidth: '170px' }}
                />
             </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <button onClick={handleDownload} className="flex-1 flex justify-center items-center gap-2 bg-[#8FA2DC] hover:bg-[#7B96D4] text-white px-4 py-3 rounded-full font-semibold shadow-sm transition-colors text-sm">
              <Download size={16} /> İndir
            </button>
            <button onClick={handleCopy} className={`flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-full font-semibold transition-colors text-sm ${isCopied ? 'bg-green-50 text-green-600' : 'bg-[#F4F6FB] text-[#64748B] hover:bg-[#E2E8F0]'}`}>
              {isCopied ? <><Check size={16} /> Kopyalandı</> : <><Copy size={16} /> Kopyala</>}
            </button>
            <button onClick={onDelete} className="flex justify-center items-center gap-2 bg-[#FEF2F2] text-[#EF4444] hover:bg-[#FEE2E2] px-5 py-3 rounded-full font-semibold transition-colors text-sm">
              <Trash2 size={16} /> Sil
            </button>
          </div>
        </div>

        <div className="w-full md:w-[45%] flex flex-col px-2 md:px-0">
          <h3 className="text-[#1E293B] font-extrabold text-xl mb-8">Yapılandırma Detayları</h3>
          <div className="space-y-6 text-[15px]">
            <div className="flex justify-between items-center border-b border-slate-200/50 pb-4">
              <span className="text-slate-500">Hedef Veri</span>
              <span className="font-medium text-[#3B4C74] truncate max-w-[160px]">{activeQr.qrData}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200/50 pb-4">
              <span className="text-slate-500">Hata Düzeltme</span>
              <span className="font-medium text-slate-700">Seviye H (30%)</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200/50 pb-4">
              <span className="text-slate-500">Sipariş No</span>
              <span className="font-medium text-slate-700">#{activeQr.orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Oluşturulma</span>
              <span className="font-medium text-slate-700">{formatDate(activeQr.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl font-bold text-[#1E293B] mb-1">Geçmişin</h2>
            <p className="text-slate-500 text-sm">Senin tarafından oluşturulan son akışlar.</p>
          </div>
          <span className="text-sm font-bold text-[#1E293B]">Toplam: {currentUser.history.length}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentUser.history.map((historyItem) => (
            <div 
              key={historyItem.id} 
              onClick={() => setActiveQr(historyItem)}
              className={`bg-white p-4 rounded-[1rem] flex items-center gap-4 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border transition-all cursor-pointer hover:shadow-md ${activeQr.id === historyItem.id ? 'border-[#3B4C74] ring-1 ring-[#3B4C74]' : 'border-slate-100'}`}
            >
              <div className="w-12 h-12 bg-[#111111] rounded flex items-center justify-center p-1.5 overflow-hidden shrink-0">
                  <div className="bg-white w-full h-full rounded-sm flex items-center justify-center p-0.5">
                     <QRCodeCanvas value={historyItem.qrData} size={30} includeMargin={false} />
                  </div>
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-[#1E293B] text-sm truncate w-full">Sipariş #{historyItem.orderNumber}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{formatDate(historyItem.createdAt)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}