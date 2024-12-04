"use client"

import { useState , useEffect } from "react"; 

const UpgradeModal = ({ isOpen, onClose }) => {

   useEffect(() => {
     const script = document.createElement("script");
     script.src = "https://www.payhere.lk/lib/payhere.js";
     script.async = true;
     document.body.appendChild(script);
     return () => {
       document.body.removeChild(script);
     };
   }, []);

   const handlePayment = () => {
     
     const payment = {
       sandbox: true,
       
       merchant_id: "1225803",
       
       return_url: undefined, 
       cancel_url: undefined, 
       
       notify_url: "http://localhost:3501/api/payment-notify",
       
       order_id: "DIMEN12345", 
       
       items: "Premium Subscription",
       
       amount: "9.99", 
       
       currency: "USD", 
       
       first_name: "John", 
       
       last_name: "Doe", 
       
       email: "john.doe@example.com", 
       
       phone: "0771234567", 
       
       address: "No.1, Main Street", 
       city:"Colombo",
       
       country: "Sri Lanka", 
     };

   
     if (window.payhere) {
       window.payhere.startPayment(payment);
     } else {
       console.error("PayHere SDK not loaded!");
     }
   };

    
    
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000">
      <div className="w-full max-w-sm p-6 text-center text-white bg-black rounded-lg">
        <h2 className="mb-4 font-semibold text-14px">Upgrade to Premium</h2>
        <p className="mb-6 text-gray-400">
          Unlock all premium features on Dimen
        </p>
        <p className="mb-6 font-semibold text-white text-18px">$9.99 / month</p>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 font-semibold bg-gray-600 rounded hover:bg-gray-700 text-12px"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 font-semibold rounded text-12px bg-theme1 hover:bg-hover2"
            onClick={handlePayment}
          >
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
