"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HomeImages from "./HomeImages";
import HomeFooter from "./HomeFooter";

const Home: React.FC = () => {
  return (
    <>
    <div className="block items-center justify-center mt-16">
      <div className="text-center text-dark px-6">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4 text-dark"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-yellow-300">Sneha Rental House</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl mb-6 text-dark"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover elegant and stylish gowns for every special occasion.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/explore">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
              Explore Collection
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
      <HomeImages/>
      <HomeFooter/>
      </>
  );
};

export default Home;
