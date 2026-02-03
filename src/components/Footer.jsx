"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">

        {/* LEFT */}
        <div>
          <h3 className="text-lg font-extrabold">
            &lt;/&gt; Kumar Devansh
          </h3>

          <p className="mt-4 text-gray-600 text-sm max-w-sm">
            Full Stack Developer passionate about creating exceptional
            digital experiences with modern technologies and clean,
            efficient code.
          </p>

          {/* 🔥 ICONS */}
          <div className="mt-4 flex gap-4 text-gray-700 text-xl">
            
            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedinIn />
            </a>

            {/* Email */}
            <a
              href="mailto:yourmail@gmail.com"
              className="hover:text-red-500 transition-colors"
            >
              <HiMail />
            </a>

          </div>
        </div>

        {/* CENTER */}
        <div>
          <h4 className="font-bold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h4 className="font-bold mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Lucknow  (W), Uttar Pradesh </li>
            <li>giridevanmsh484@gmail.com</li>
            <li>+91 9619579304</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between text-sm text-gray-500">
          <span>© 2025 Kumar Devansh. All rights reserved.</span>
          <span>Made with ❤️</span>
        </div>
      </div>
    </footer>
  );
}
