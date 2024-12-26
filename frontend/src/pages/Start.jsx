import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Start = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
      {/* Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-200 text-gray-900" : "bg-gray-800 text-gray-200"
          } shadow-md hover:shadow-lg transition`}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Header Section */}
      <header
        className={`relative py-20 px-6 ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 via-gray-700 to-black text-gray-200"
            : "bg-gradient-to-br from-black via-gray-800 to-gray-700 text-white"
        }`}
      >
        <div className="absolute inset-0 bg-opacity-40 bg-[url('https://images.unsplash.com/photo-1543163521-1bf164c0d389?w=1080&q=80&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Go anywhere with <br />
            <span className="text-yellow-400">Uber</span>
          </h1>
          <p className="text-lg md:text-2xl mt-6 mb-6">
            Seamless rides, deliveries, and reservations, all in one place.
          </p>
          <Link
            to="/login"
            className="px-8 py-3 bg-yellow-400 text-black text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Login Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-12 py-20 px-6 md:px-20">
        {/* Login Card */}
        <div
          className={`p-10 w-full md:w-1/2 rounded-xl shadow-lg hover:shadow-2xl transition ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6">
            Log in to see your recent activity
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            View past trips, tailored suggestions, support resources, and more.
          </p>
          <Link
            to="/login"
            className={`w-full px-6 py-3 font-medium rounded-lg shadow-lg transition transform hover:scale-105 ${
              darkMode
                ? "bg-yellow-400 text-black hover:bg-yellow-500"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            Log in to your account
          </Link>
        </div>

        {/* Illustration */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div
            className={`absolute top-0 left-0 w-48 h-48 ${
              darkMode ? "bg-yellow-400" : "bg-yellow-400"
            } rounded-full blur-2xl opacity-30`}
          ></div>
          <img
            src="https://images.unsplash.com/photo-1716339362685-f3e74cabaf69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Illustration"
            className="rounded-lg shadow-2xl h-72 w-full object-cover md:h-80 md:w-3/4 transform hover:scale-110 transition duration-500"
          />
          <div
            className={`absolute bottom-0 right-0 w-48 h-48 ${
              darkMode ? "bg-gray-600" : "bg-black"
            } rounded-full blur-2xl opacity-30`}
          ></div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`py-20 px-6 md:px-20 ${
          darkMode
            ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
            : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Explore Uber Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Ride",
              description: "Go anywhere with Uber. Request a ride, hop in, and go.",
              imgSrc: "https://mobile-content.uber.com/launch-experience/ride.png",
            },
            {
              title: "Reserve",
              description: "Reserve your ride in advance so you can relax on the day of your trip.",
              imgSrc: "https://mobile-content.uber.com/uber_reserve/reserve_clock.png",
            },
            {
              title: "Courier",
              description: "Uber makes same-day item delivery easier than ever and ease.",
              imgSrc: "https://cn-geo1.uber.com/static/mobile-content/Courier.png",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-2xl transition ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="mb-4 h-20 w-20 object-contain transform hover:scale-110 transition duration-500"
              />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-center mb-4">{feature.description}</p>
              <button
                className={`px-6 py-2 font-medium rounded-lg transition transform hover:scale-105 ${
                  darkMode
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-10 ${
          darkMode ? "bg-black text-gray-400" : "bg-gray-800 text-gray-200"
        }`}
      >
        <div className="flex justify-center gap-6 mb-6">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition transform hover:scale-110"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-center">© {new Date().getFullYear()} Uber. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Start;
