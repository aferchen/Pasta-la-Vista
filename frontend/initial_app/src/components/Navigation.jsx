import React from 'react';
import userImg from '../assets/user.jpg';

const Navigation = ({ setStep }) => {
  return (
    <nav className="bg-slate-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-lime-700 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Pasta la Vista</h1>
        <div className="flex space-x-4">
          <button onClick={() => setStep("browse")} className="hover:bg-slate-400 px-4 py-2 rounded-full transition-all">
            Browse
          </button>
          <button onClick={() => setStep("cart")} className="hover:bg-slate-400 px-4 py-2 rounded-full transition-all">
            Cart
          </button>
          <button onClick={() => setStep("payment")} className="hover:bg-slate-400 px-4 py-2 rounded-full transition-all">
            Payment
          </button>
          {/* <button onClick={() => setStep("summary")} className="hover:bg-slate-400 px-4 py-2 rounded-full transition-all">Summary</button> */}
          <button onClick={() => setStep("about")} className="hover:bg-slate-400 px-4 py-2 rounded-full transition-all">
            About
          </button>
          <button onClick={() => setStep("user")} className="ml-4">
            <img  src= {userImg} alt="User Profile" className="w-10 h-10 rounded-full border-2 border-white hover:scale-105 transition-transform"/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
