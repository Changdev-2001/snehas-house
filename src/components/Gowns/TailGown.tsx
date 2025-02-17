"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Phone } from "lucide-react";

const basePath = "/snehas-house"; // Must match basePath in next.config.js
const gowns = [
  {
    id: 1,
    image: `${basePath}/img1.jpg`,
    name: "Elegant Red Tail Gown",
  },
  {
    id: 2,
    image: `${basePath}/img2.jpg`,
    name: "Royal Blue Flowing Gown",
  },
  {
    id: 3,
    image: `${basePath}/img3.jpg`,
    name: "Golden Embellished Gown",
  },
  {
    id: 4,
    image: `${basePath}/img4.jpg`,
    name: "Classic Black Tail Gown",
  },
  {
    id: 5,
    image: `${basePath}/img1.jpg`,
    name: "Classic Black Tail Gown",
  },
  {
    id: 6,
    image: `${basePath}/img1.jpg`,
    name: "Classic Black Tail Gown",
  },
];

const TailGown = () => {
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({});

  const handleLike = (id: number) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleContact = (image: string, name: string) => {
    const phoneNumber = "9011421508"; // WhatsApp number
    const whatsappMessage = `Hello, I'm interested in this gown: ${name}. Here is the image: ${image}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallNow = () => {
    const phoneNumber = "9970502327"; // Direct calling number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Tail Gowns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gowns.map((gown) => (
          <div key={gown.id} className="bg-dark rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={gown.image}
                alt={gown.name}
                width={300}
                height={400}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => handleLike(gown.id)}
                className="absolute top-3 right-3 bg-dark p-2 rounded-full shadow-md hover:scale-110 transition"
              >
                <Heart
                  size={24}
                  className={`transition ${liked[gown.id] ? "fill-red-500 text-red-500" : "text-dark"}`}
                />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{gown.name}</h3>
              <div className="mt-4 flex justify-between items-center gap-3">
                {/* Contact Button */}
                <button
                  onClick={() => handleContact(gown.image, gown.name)}
                  className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
                >
                  <MessageCircle size={20} /> Contact
                </button>

                {/* Call Now Button */}
                <button
                  onClick={handleCallNow}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-600 transition"
                >
                  <Phone size={20} /> Call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailGown;
