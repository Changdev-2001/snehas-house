"use client";

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import HomeFooter from "./Dashboard/HomeFooter";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Ensure only numbers are entered in mobile field
    if (e.target.name === "mobile") {
      const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
      if (value.length <= 10) {
        setFormData({ ...formData, [e.target.name]: value });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, mobile, message } = formData;

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!name || !mobile || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Encode message for URL
    // Format message with line breaks
    const text = `Hello, my name is ${name},\nMy contact number is ${mobile},\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);

    // WhatsApp number (change this to your business number)
    const whatsappNumber = "+919011421508";

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");

    // Reset Form
    setFormData({ name: "", mobile: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
        Contact Sneha`s Rental House
      </h1>

      <div className="grid md:grid-cols-2 gap-8 ">
        <div className="bg-dark p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4 bg-dark">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Your Mobile"
              required
              maxLength={10}
              pattern="[0-9]{10}"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={2}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition"
            >
              Send Message via WhatsApp
            </button>
          </form>
        </div>

        <div className="space-y-4 md:mt-28 md:ml-10">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-pink-600 text-xl" />
            <p className="text-lg">Rohidas Chouk, Shrigonda, Ahilyanagar</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-pink-600 text-xl" />
            <p className="text-lg">
              <Link href="https://wa.me/9011421508" className="hover:underline">
                +91 9011421508
              </Link>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-pink-600 text-xl" />
            <p className="text-lg">
              <Link
                href="https://mailto:snehaagawane08489@gmail.com"
                className="hover:underline"
              >
                snehaagawane08489@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Find Us on the Map
        </h2>
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d945.2724637421799!2d74.7009444!3d18.615027800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM2JzU0LjEiTiA3NMKwNDInMDMuNCJF!5e0!3m2!1sen!2sin!4v1739624280991!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Contact;
