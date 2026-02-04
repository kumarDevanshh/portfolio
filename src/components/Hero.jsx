"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "React & Next.js Developer",
    "MERN Stack Engineer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!deleting && subIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      }, 120);
    } else if (deleting && subIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
      }, 80);
    } else if (!deleting && subIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((index + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <span className="inline-block mb-5 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
            Available for new opportunities
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Hi, I&apos;m <span className="text-blue-600">Kumar Devansh</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-700">
            {text}
            <span className="text-blue-600">|</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            I'm a passionate full stack web developer specializing in building
            fast, scalable, and responsive web applications using React,
            Next.js, Node.js, MongoDB, and Tailwind CSS.
          </p>

          {/* 🔥 BUTTONS */}
          <div className="mt-8 flex gap-4">

            {/* VIEW MY WORK */}
            <Link
              href="/#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold inline-block"
            >
              View My Work →
            </Link>

            {/* DOWNLOAD RESUME */}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold inline-block"
            >
              Download Resume
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-6 text-2xl text-gray-700">
            <a
              href="https://github.com/your-username"
              target="_blank"
              className="hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              className="hover:text-blue-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-72 h-72 rounded-full object-cover border-4 border-white"
          />
        </div>

      </div>
    </section>
  );
}
