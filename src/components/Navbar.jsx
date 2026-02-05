"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white border-b border-gray-200 z-[999]">
      <nav className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-blue-600 text-xl">&lt;/&gt;</span>
          <span>Kumar Devansh</span>
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <li><Link href="/#home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
          <li><Link href="/#skills">Skills</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* ICONS */}
        <div className="flex gap-4 text-xl">
          <FaGithub />
          <FaLinkedinIn />
          <HiMail />
        </div>

      </nav>
    </header>
  );
}
