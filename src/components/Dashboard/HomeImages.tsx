"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const gownImages = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
];

const duplicatedImages = [...gownImages, ...gownImages]; // Duplicate for smooth infinite scroll

const HomeImages = () => {
  return (
    <div className="w-full overflow-hidden mt-16 px-4">
      {/* Center the scrolling images and restrict width */}
      <div className="max-w-xs lg:max-w-lg mx-auto relative">
        <motion.div
          className="flex gap-6 flex-nowrap"
          animate={{ x: ["0%", "-100%"] }} // Move images left infinitely
          transition={{
            ease: "linear",
            duration: 10, // Adjust speed (lower = faster)
            repeat: Infinity, // Infinite scroll
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="flex-none w-64 h-96 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`Gown ${index + 1}`}
                width={256}
                height={384}
                className="object-cover w-full h-full rounded-lg"
                unoptimized={true}
                priority={index < gownImages.length} // Load first set of images fast
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeImages;
