import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HelpModal from './components/HelpModal';
import Stepper from './components/Stepper';
import Step1Name from './components/Step1Name';
import Step2Order from './components/Step2Order';
import Step3Result from './components/Step3Result';

export default function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  
  const [currentUser, setCurrentUser] = useState(null);
  const [activeQr, setActiveQr] = useState(null);
  
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  // 1. Adım İşlemi
  const handleNameSubmit = (e) => {
    e?.preventDefault();
    if (!name.trim()) return;

    const storedUsers = JSON.parse(localStorage.getItem('qr_flow_users')) || {};
    const user = storedUsers[name.toLowerCase()];

    if (user && user.history && user.history.length > 0) {
      setCurrentUser(user);
      setActiveQr(user.history[0]);
      setStep(3); 
    } else {
      setStep(2);
    }
  };

  // 2. Adım İşlemi
  const handleOrderSubmit = (e) => {
    e?.preventDefault();
    if (!orderNumber.trim()) return;

    const targetUrl = `https://qrflow.curator/order/${orderNumber}`;
    const newQrItem = { id: Date.now(), orderNumber, qrData: targetUrl, createdAt: new Date().toISOString() };

    const storedUsers = JSON.parse(localStorage.getItem('qr_flow_users')) || {};
    let existingUser = storedUsers[name.toLowerCase()];
    
    if (!existingUser || !Array.isArray(existingUser.history)) {
      existingUser = { name: name, history: [] };
    }
    
    existingUser.history.unshift(newQrItem);
    storedUsers[name.toLowerCase()] = existingUser;
    localStorage.setItem('qr_flow_users', JSON.stringify(storedUsers));
    
    setCurrentUser(existingUser);
    setActiveQr(newQrItem);
    setStep(3); 
  };

  // Silme İşlemi
  const handleDelete = () => {
    if (!window.confirm("Bu QR kodu silmek istediğinize emin misiniz?")) return;

    const storedUsers = JSON.parse(localStorage.getItem('qr_flow_users')) || {};
    const updatedHistory = currentUser.history.filter(item => item.id !== activeQr.id);
    
    if (updatedHistory.length === 0) {
        delete storedUsers[name.toLowerCase()];
        localStorage.setItem('qr_flow_users', JSON.stringify(storedUsers));
        handleStartOver();
    } else {
        storedUsers[name.toLowerCase()].history = updatedHistory;
        localStorage.setItem('qr_flow_users', JSON.stringify(storedUsers));
        setCurrentUser(storedUsers[name.toLowerCase()]);
        setActiveQr(updatedHistory[0]);
    }
  };

  const handleStartOver = () => {
    setStep(1);
    setName('');
    setOrderNumber('');
    setCurrentUser(null);
    setActiveQr(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent opacity-70"></div>

      <Navbar onStartOver={handleStartOver} onOpenHelp={() => setIsHelpModalOpen(true)} />

      <main className="relative z-10 flex-grow flex flex-col items-center mt-4 px-4 pb-12">
        {step < 3 && <Stepper step={step} />}
        {step === 2 && <h1 className="text-4xl font-extrabold text-[#1E293B] mb-8 tracking-tight text-center">Sipariş Detaylarını Girin</h1>}

        {step === 1 && <Step1Name name={name} setName={setName} onSubmit={handleNameSubmit} />}
        {step === 2 && <Step2Order orderNumber={orderNumber} setOrderNumber={setOrderNumber} onSubmit={handleOrderSubmit} onBack={() => setStep(1)} />}
        {step === 3 && activeQr && currentUser && (
          <Step3Result 
            currentUser={currentUser} 
            activeQr={activeQr} 
            setActiveQr={setActiveQr} 
            onDelete={handleDelete} 
          />
        )}
      </main>

      <HelpModal isOpen={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)} />
    </div>
  );
}