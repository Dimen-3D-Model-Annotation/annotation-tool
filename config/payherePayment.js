import axios from 'axios';

export const initiatePayHerePayment = async (paymentDetails) => {
  const paymentData = {
    sandbox: true,
    merchant_id: "MTgwOTM3NDE0MzQxMTE5ODg1NzEzNDQ2Njk2OTUwMzAzMTM5OTAyOA==",
    return_url: "http://localhost:3001/payment/success",
    cancel_url: "http://localhost:3001/payment/cancel",
    notify_url: "http://localhost:3501/api/payhere/webhook", // Server-side webhook
    currency: "USD",
    ...paymentDetails,
  };

  try {
    const response = await fetch("http://localhost:3501/api/payhere/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();
    if (data) {
      // Assuming PayHere returns a URL or status
      if (data.checkout_url) {
        window.location.href = data.checkout_url; // Redirect to PayHere checkout page
      }
    }
  } catch (error) {
    console.error("Error initiating payment:", error);
  }
};
