"use client";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative bg-gray-50 py-28 overflow-hidden">

      {/* soft ambient glow (very subtle) */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* ================= LEFT: TRUST / INFO ================= */}
          <div className="animate-fadeUp">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Let’s Talk About Your Project
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
              Looking to build something reliable and high-quality?  
              Reach out directly or send a short message — I typically respond
              within <span className="font-semibold text-gray-900">24 hours</span>.
            </p>

            {/* subtle divider */}
            <div className="mt-10 h-px w-24 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

            {/* CONTACT DETAILS */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4 bg-white p-5 rounded-xl border shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-900">
                    giridevansh484@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-xl border shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact Number</p>
                  <p className="font-semibold text-gray-900">
                    +91 87665663296
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: COMPACT FORM ================= */}
          <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md mx-auto animate-fadeUp">

            <h2 className="text-2xl font-bold text-gray-900">
              Send a Message
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              A short overview is perfect — we’ll discuss details later.
            </p>

            <form className="mt-8 space-y-5">

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input-field"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input-field"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Project Details
                </label>
                <textarea
                  rows="3"
                  placeholder="Briefly describe what you’re looking to build…"
                  className="textarea-field"
                />
              </div>

              <button type="submit" className="send-btn">
                Send Message
              </button>

              {/* reassurance micro-copy */}
              <p className="text-xs text-gray-500 text-center mt-2">
                Your details stay private. No spam — ever.
              </p>

            </form>
          </div>

        </div>
      </div>

      {/* ===== STYLES ===== */}
      <style jsx>{`
        .input-field {
          margin-top: 0.5rem;
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-field:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
        }

        .textarea-field {
          margin-top: 0.5rem;
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 1rem;
          outline: none;
          resize: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .textarea-field:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
        }

        .send-btn {
          width: 100%;
          margin-top: 0.5rem;
          padding: 0.9rem;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #4f46e5, #9333ea);
          color: white;
          font-weight: 600;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .send-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .animate-fadeUp {
          opacity: 0;
          transform: translateY(22px);
          animation: fadeUp 0.75s ease-out forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
