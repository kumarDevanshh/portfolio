"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 pt-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Status */}
        <span className="inline-block mb-5 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Available for Freelance Projects
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Helping Businesses Build
          <span className="text-blue-600"> Modern Websites</span>
        </h1>

        {/* Subheading */}
        <h2 className="mt-4 text-xl md:text-3xl font-bold text-gray-700">
          Full Stack Developer & Website Builder
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          I help restaurants, clinics, salons, interior designers and local
          businesses build fast, modern and mobile-friendly websites that
          attract customers and strengthen their online presence.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold transition-transform hover:scale-105"
          >
            View My Work
          </a>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold transition-all hover:bg-blue-600 hover:text-white"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex gap-6 justify-center text-2xl text-gray-700">
          <a
            href="https://github.com/kumarDevanshh"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-blue-600"
          >
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </section>
  );
}