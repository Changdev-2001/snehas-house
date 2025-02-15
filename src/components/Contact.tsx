"use client";

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import HomeFooter from "./Dashboard/HomeFooter";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent! We will contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
        Contact Sneha`s Rental House
      </h1>

      {/* Contact Info Section */}
      <div className="grid md:grid-cols-2 gap-8 ">
        

        {/* Contact Form */}
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
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-pink-600 text-xl" />
            <p className="text-lg">Rohidas Chouk, Shrigonda,Shrigonda, Ahilyanagar</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-pink-600 text-xl" />
            <p className="text-lg">
              <Link href="tel:+1234567890" className="hover:underline">
                +91 9011421508
              </Link>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-pink-600 text-xl" />
            <p className="text-lg">
              <Link
                href="mailto:snehaagawane08489@gmail.com"
                className="hover:underline"
              >
                snehaagawane08489@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>


      {/* Google Maps Embed */}
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
      <HomeFooter/>
    </div>
  );
};
export default Contact;
