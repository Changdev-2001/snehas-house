"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-dark text-dark w-full py-10">
      <div className="max-w-sm lg:max-w-6xl md:max-w-2xl mx-auto px-6">
        {/* Header Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-dark"
        >
          About <span className="text-pink-600">Sneha`s House</span>
        </motion.h1>

        {/* Image Section */}
        <div className="flex justify-center my-8">
          <Image
            src="/about-banner.jpg"
            alt="Sneha's House"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg max-w-full"
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-dark text-center max-w-3xl mx-auto"
        >
          Welcome to <span className="text-pink-600 font-semibold">Sneha’s House</span>,
          where elegance meets fashion. We offer a stunning collection of **Tail Gowns,
          Ball Gowns, Maternity Gowns, Party Gowns, and Engagement Gowns**, carefully curated
          to make every woman feel special.
        </motion.p>

        {/* Features Section - No Horizontal Scroll */}
        <div className="mt-12 grid text-dark grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Exquisite Designs",
              description: "Our gowns are crafted with the finest materials to ensure comfort and luxury.",
            },
            {
              title: "Customization",
              description: "Personalize your gown to match your style with our customization options.",
            },
            {
              title: "Fast Delivery",
              description: "We ensure quick and safe delivery, so you get your gown on time.",
            },
            {
              title: "Affordable Pricing",
              description: "Get premium quality gowns at the best prices.",
            },
            {
              title: "Customer Satisfaction",
              description: "Our customers love our collection and service.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold text-pink-600">{feature.title}</h3>
              <p className="text-dark mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-dark"
          >
            Discover the perfect gown for your special occasion today.
          </motion.p>
          <Link href="/categories">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-pink-700 transition"
            >
              Explore Collection
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
