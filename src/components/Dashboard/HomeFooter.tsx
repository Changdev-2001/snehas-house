"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const HomeFooter = () => {
  return (
    <div className="bg-dark text-dark py-10 mt-16 lg:ml-10">
      <div className="container mx-auto px-6">
        {/* Footer top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Sneha Rental House Branding */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Sneha Rental House</h2>
            <p className="text-sm">
              Discover elegant gowns for every occasion, from casual parties to
              grand celebrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-sm hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-sm hover:text-yellow-400">
                  Explore Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul>
              <li className="text-sm">✉️ Email: snehaagawane08498@gmail.com</li>
              <li className="text-sm">
                📞 Phone: <br />
                +91 9011421508
              </li>
              <li className="text-sm">
                📍 Address: Rohidas Chouk, Shrigonda City
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-yellow-400 hover:text-yellow-500"
                target="_blank"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/sneha_rental_collection?igsh=cmgzazh0dXl0MWYw"
                className="text-yellow-400 hover:text-yellow-500"
                target="_blank"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://wa.me/9011421508"
                className="text-yellow-400 hover:text-yellow-500"
                target="_blank"
              >
                <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-600 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Sneha Rental House. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
