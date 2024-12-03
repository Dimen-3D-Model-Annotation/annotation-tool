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
     // Define the payment details
     const payment = {
       sandbox: true, // Use false for production
       merchant_id: "1225803", // Replace with your Merchant ID
       return_url: undefined, // Optional, redirect back after payment
       cancel_url: undefined, // Optional, redirect if payment is canceled
       notify_url: "http://localhost:3501/api/payment-notify", // Your server endpoint
       order_id: "DIMEN12345", // Unique order ID
       items: "Premium Subscription", // Item name
       amount: "9.99", // Amount
       currency: "USD", // Currency code
       first_name: "John", // Customer's first name
       last_name: "Doe", // Customer's last name
       email: "john.doe@example.com", // Customer's email
       phone: "0771234567", // Customer's phone
       address: "No.1, Main Street", // Customer's address
       city: "Colombo", // Customer's city
       country: "Sri Lanka", // Customer's country
     };

     // Check if PayHere is available and start the payment process
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
