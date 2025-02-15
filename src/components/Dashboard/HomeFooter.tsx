"use client";
import React from "react";
import Link from "next/link";
import { FaInstagramSquare,FaWhatsappSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const HomeFooter = () => {
  return (
    <div className="bg-dark text-dark mt-10 ml-6">
      <div className="container mx-auto px-6">
        {/* Footer top */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-16 mb-5">
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
                <Link href="/" className="text-sm hover:text-pink-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm hover:text-pink-600">
                  Gallary
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-sm hover:text-pink-600">
                  Explore Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-pink-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-pink-600">
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
                className="text-pink-600 hover:text-pink-500"
                target="_blank"
              >
                <FaSquareFacebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/sneha_rental_collection?igsh=cmgzazh0dXl0MWYw"
                className="text-pink-600 hover:text-pink-500"
                target="_blank"
              >
                <FaInstagramSquare size={24} />
              </Link>
              <Link
                href="https://wa.me/9011421508"
                className="text-pink-600 hover:text-pink-500"
                target="_blank"
              >
                <FaWhatsappSquare size={24} />
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
