"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <span className="inline-block mb-5 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
            Available for new opportunities
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Hi, I&apos;m <span className="text-blue-600">Kumar Devansh</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-700">
            Full Stack Developer<span className="text-blue-600">|</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            I&apos;m a passionate full stack web developer specializing in
            building fast, scalable, and responsive web applications using
            React, Next.js, Node.js, MongoDB, and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold transition-transform hover:scale-105 active:scale-95 text-center"
            >
              View My Work →
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold transition-all hover:bg-blue-600 hover:text-white active:scale-95 text-center"
            >
              Download Resume
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-6 justify-center md:justify-start text-2xl text-gray-700">
            <a
              href="https://github.com/your-username"
              target="_blank"
              className="transition-transform hover:scale-110 active:scale-95"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              className="transition-transform hover:scale-110 active:scale-95 hover:text-blue-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full" />
            <img
              src="/profile.jpg"
              alt="profile"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
