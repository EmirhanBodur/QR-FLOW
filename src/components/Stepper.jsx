import React from 'react';

export default function Stepper({ step }) {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 1 ? 'bg-[#3B4C74] text-white shadow-md' : 'bg-[#D6E4FF] text-[#3B4C74]'}`}>1</div>
        <div className={`w-10 h-[2px] ${step >= 2 ? 'bg-[#3B4C74]' : 'bg-slate-200'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 2 ? 'bg-[#3B4C74] text-white shadow-md' : 'bg-slate-100 text-slate-400'}`}>2</div>
        <div className={`w-10 h-[2px] bg-slate-200`}></div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-slate-100 text-slate-400">3</div>
      </div>
      <p className="text-[10px] font-bold text-slate-400 tracking-widest mt-4 uppercase">Adım {step} / 3</p>
    </div>
  );
}