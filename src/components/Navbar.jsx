"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="text-blue-600 text-xl">&lt;/&gt;</span>
          Kumar Devansh
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-semibold">
          <NavItem href="/#home" label="Home" />
          <NavItem href="/about" label="About" />
          <NavItem href="/#services" label="Services" />
          <NavItem href="/#projects" label="Projects" />
          <NavItem href="/skills" label="Skills" />
          <NavItem href="/contact" label="Contact" />
        </ul>

        {/* DESKTOP ICONS */}
        <div className="hidden md:flex gap-4 text-xl">
          <FaGithub />
          <FaLinkedinIn />
          <HiMail />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t animate-slideDown">
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold">
            <NavItem href="/#home" label="Home" onClick={() => setOpen(false)} />
            <NavItem href="/about" label="About" onClick={() => setOpen(false)} />
            <NavItem href="/#services" label="Services" onClick={() => setOpen(false)} />
            <NavItem href="/#projects" label="Projects" onClick={() => setOpen(false)} />
            <NavItem href="/skills" label="Skills" onClick={() => setOpen(false)} />
            <NavItem href="/contact" label="Contact" onClick={() => setOpen(false)} />
          </ul>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label, onClick }) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="hover:text-blue-600 transition"
      >
        {label}
      </Link>
    </li>
  );
}
