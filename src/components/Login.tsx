"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Login = () => {
  const [mobile, setMobile] = useState("+91"); // Set default value to +91
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle mobile input change
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Ensure "+91" is always present at the beginning
    if (!value.startsWith("+91")) {
      value = "+91" + value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    }

    setMobile(value);
  };

  // Function to send OTP
  const sendOtp = async () => {
    try {
      const response = await fetch("api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });
  
      if (response.ok) {
        setSentOtp(true);
      } else {
        const data = await response.json();
        setError(data.message || "Failed to send OTP");
      }
    } catch (err) {
        console.error(err);
        setError("Network error. Please try again.");
      }
  };

  // Function to verify OTP
  const verifyOtp = async () => {
    setError("");
    try {
      const response = await fetch("api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp }),
      });
  
      if (response.ok) {
        router.push("/about");
      } else {
        const data = await response.json();
        setError(data.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="bg-dark text-dark w-full py-6">
      <div className="max-w-sm lg:max-w-6xl md:max-w-2xl mx-auto px-6">
        {/* Header Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-dark"
        >
          Login <span className="text-pink-600"> In Sneha`s House</span>
        </motion.h1>

        {!sentOtp ? (
          <>
            <div className="flex max-w-sm mx-auto border border-gray-300 rounded-md shadow-lg p-10 flex-col mt-14">
              <input
                type="text"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={handleMobileChange}
                className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:border-indigo-500 ring-1 ring-indigo-500 ring-opacity-50"
              />
              <button
                onClick={sendOtp}
                className="w-full bg-indigo-800 text-white p-2 rounded-md"
              >
                Get OTP
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex max-w-sm mx-auto border border-gray-300 rounded-md shadow-lg p-10 flex-col mt-14">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
              />
              <button
                onClick={verifyOtp}
                className="w-full bg-green-500 text-white p-2 rounded-md"
              >
                Verify OTP
              </button>
            </div>
          </>
        )}

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
