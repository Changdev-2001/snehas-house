"use client";

import React, { useState } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";
import { FaImages, FaChevronDown } from "react-icons/fa";
import { FiHome, FiPhone, FiShoppingBag } from "react-icons/fi";
import { GiAmpleDress } from "react-icons/gi";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [isGownDropdownOpen, setIsGownDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-black text-white shadow-lg duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/">
            <span className="text-xl font-bold">SNEHA`S HOUSE</span>
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current text-white"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto px-4 scrollbar-hide">
          {/* Gown Category with Dropdown */}
          <h3 className="mt-6 px-4 text-sm font-semibold uppercase text-gray-400">
            Menu
          </h3>
          <Link
            href="/"
            className="flex items-center space-x-3 py-2 px-4 hover:bg-gray-700 rounded"
          >
            <FiHome />
            <span>Home</span>
          </Link>
          <h3 className="mt-6 px-4 text-sm font-semibold uppercase text-gray-400">
            Categories
          </h3>
          <ul className="mt-2 space-y-2">
            {/* Dropdown Trigger */}
            <li>
              <button
                onClick={() => setIsGownDropdownOpen(!isGownDropdownOpen)}
                className="flex items-center justify-between w-full p-3 rounded-md hover:bg-gray-700"
              >
                {/* Home */}
                <div className="flex items-center gap-3">
                  <GiAmpleDress />
                  <span>Gowns</span>
                </div>
                <FaChevronDown
                  className={`transition-transform ${
                    isGownDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>

            {/* Dropdown Content */}
            {isGownDropdownOpen && (
              <ul className="pl-6 space-y-2">
                <li>
                  <Link
                    href="/categories/tail-gown"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700"
                  >
                    <span>Tail Gown</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/ball-gown"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700"
                  >
                    <span>Ball Gown</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/maternity-gown"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700"
                  >
                    <span>Maternity Gown</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/party-gown"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700"
                  >
                    <span>Party Gown</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/engagement-gown"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700"
                  >
                    <span>Engagement Gown</span>
                  </Link>
                </li>
              </ul>
            )}
          </ul>

          {/* Others */}
          <h3 className="mt-6 px-4 text-sm font-semibold uppercase text-gray-400">
            Others
          </h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/gallary"
                className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700"
              >
                <FaImages />
                <span>Gallery</span>
              </Link>
            </li>
            <li>
              <Link
                href="/gallary"
                className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700"
              >
                <FiShoppingBag />
                <span>New Arrivals</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700"
              >
                <FiPhone />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700"
              >
                <FiPhone />
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
