"use client";

import Script from "next/script";
import { useState } from "react";

// Extend the global window interface to include Razorpay
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

// Razorpay Options Interface
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

// Razorpay Response Interface
interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// Razorpay Instance Interface
interface RazorpayInstance {
  open: () => void;
}

const PaymentPage = () => {
  const AMOUNT = 100; // Payment amount
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      // Fetch the order ID from your API
      const response = await fetch("/api/create-order", { method: "POST" });
      const data = await response.json();

      // Options for Razorpay
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string, // Razorpay key
        amount: AMOUNT * 100, // Amount in paise
        currency: "INR",
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: data.orderId, // Order ID from backend
        handler: function (response: RazorpayResponse) {
          console.log("Payment Successful", response);
          alert("Payment Successful!");
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc", // Theme color
        },
      };

      // Initialize and open Razorpay
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment failed", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      {/* Razorpay checkout script */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    
            <button onClick={handlePayment} disabled={isProcessing}>
                {isProcessing ? "Processing..." : "GET MY PLAN"}
            </button>
        
    </div>
  )
}

export default PaymentPage