"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="text-blue-600 text-xl">&lt;/&gt;</span>
          <span className="text-gray-900">Kumar Devansh</span>
        </Link>

        {/* CENTER: MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-900">
          <li>
            <Link href="/#home" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>

          <li>
            <Link href="/#services" className="hover:text-blue-600">
              Services
            </Link>
          </li>

          <li>
            <Link href="/#projects" className="hover:text-blue-600">
              Projects
            </Link>
          </li>

          <li>
            <Link href="/#skills" className="hover:text-blue-600">
              Skills
            </Link>
          </li>

          <li>
            <Link href="/#contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* RIGHT: ICONS */}
        <div className="flex items-center gap-4 text-gray-700 text-xl">
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

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-red-500 transition-colors"
          >
            <HiMail />
          </a>
        </div>

      </nav>
    </header>
  );
}
