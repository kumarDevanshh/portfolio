"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const roles = [
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-left">

          <span className="inline-block mb-5 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
            Available for new opportunities
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-600">Kumar Devansh</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-700 leading-snug">
            {text}
            <span className="text-blue-600">|</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            I'm a passionate full stack web developer specializing in building
            fast, scalable, and responsive web applications using React,
            Next.js, Node.js, MongoDB, and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
              View My Work →
            </button>

            <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold">
              Download Resume
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex items-center gap-6 text-2xl text-gray-700">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-black transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>
            <img
              src="/profile.jpg"
              alt="profile"
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
