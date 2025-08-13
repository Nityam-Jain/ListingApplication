import { useState, useEffect } from "react";

const slides = [
  "/images/laptop1.jpg",
  "/images/laptop2.jpg",
  "/images/laptop3.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Background image slideshow
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4">
          Your Trusted Laptop Repair & Sales Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Quality repairs, unbeatable deals, and expert service — all in one
          place.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="bg-gray-100 text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 max-w-6xl"
      >
        {[
          {
            title: "Laptop Sales",
            desc: "New & refurbished laptops from top brands with warranties.",
          },
          {
            title: "Repair Services",
            desc: "Fast, reliable repairs for hardware & software issues.",
          },
          {
            title: "Upgrades",
            desc: "RAM, SSD, battery replacements & performance boosts.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white/90 text-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
            <h2 className="font-bold text-2xl mb-3">{service.title}</h2>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
