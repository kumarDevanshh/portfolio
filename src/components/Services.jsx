"use client";

import { FaCheckCircle } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { HiServer, HiSquares2X2 } from "react-icons/hi2";

export default function Services() {
  return (
    <section className="bg-gray-50 py-5">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADING ===== */}
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Services I Offer
        </h2>

        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          From concept to deployment, I provide comprehensive development services
          to bring your ideas to life.
        </p>

        {/* ===== CARDS ===== */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {/* FRONTEND */}
          <div className="group bg-white rounded-2xl border border-gray-200 p-8
            shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-blue-100 text-blue-600
              transition-transform duration-300 group-hover:scale-110">
              <HiCode className="text-2xl" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-center text-gray-900">
              Front-End Development
            </h3>

            <p className="mt-4 text-gray-600 text-center leading-relaxed">
              Crafting responsive and interactive user interfaces using HTML,
              CSS, and JavaScript, with a focus on modern frameworks like
              Bootstrap and TailwindCSS. Expertise in ReactJS for building
              dynamic single-page applications.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> Responsive Design</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> Modern Frameworks</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> ReactJS</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> Interactive UI</li>
            </ul>
          </div>

          {/* BACKEND */}
          <div className="group bg-white rounded-2xl border border-gray-200 p-8
            shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-green-100 text-green-600
              transition-transform duration-300 group-hover:scale-110">
              <HiServer className="text-2xl" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-center text-gray-900">
              Back-End Development
            </h3>

            <p className="mt-4 text-gray-600 text-center leading-relaxed">
              Developing robust server-side applications using Node.js and
              Express.js, alongside traditional technologies like PHP and
              MySQL. Skilled in creating RESTful APIs and managing databases.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> Node.js & Express</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> PHP & MySQL</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> RESTful APIs</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> Database Management</li>
            </ul>
          </div>

          {/* FULL STACK */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 p-8
            shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <span className="absolute -top-3 right-6 px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
              Most Popular
            </span>

            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-purple-100 text-purple-600
              transition-transform duration-300 group-hover:scale-110">
              <HiSquares2X2 className="text-2xl" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-center text-gray-900">
              Full-Stack Development
            </h3>

            <p className="mt-4 text-gray-600 text-center leading-relaxed">
              Offering comprehensive web solutions by handling both front-end
              and back-end development, leveraging the MERN stack for seamless
              integration and efficient development.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> MERN Stack</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> End-to-End Solutions</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> Seamless Integration</li>
              <li className="flex gap-2"><FaCheckCircle className="text-green-500" /> Efficient Development</li>
            </ul>
          </div>

        </div>

        {/* ===== BUTTON (CARDS KE NEECHE) ===== */}
        <div className="mt-12 text-center">
          <button className="
            px-8 py-3 rounded-lg
            bg-gradient-to-r from-blue-600 to-purple-600
            text-white font-semibold
            transition-all duration-300
            hover:scale-105
          ">
            View All Services →
          </button>
        </div>

      </div>
    </section>
  );
}
