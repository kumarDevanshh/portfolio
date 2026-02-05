"use client";

import Link from "next/link";
import { HiSparkles, HiLightningBolt, HiShieldCheck } from "react-icons/hi";

export default function ServicesDetails() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      
      {/* background glow blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white space-y-32">

        {/* ================= HERO ================= */}
        <div className="text-center animate-fadeUp">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            High-Impact Development Services
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            I don’t just build websites — I craft fast, scalable, and visually
            powerful digital products that help brands grow and stand out.
          </p>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="glass-card">
            <HiSparkles className="text-4xl text-cyan-300" />
            <h3 className="mt-6 text-2xl font-bold">Frontend Experience</h3>
            <p className="mt-4 text-white/80 leading-relaxed">
              Modern, responsive, and animated interfaces using React, Next.js,
              Tailwind CSS — designed to convert users into customers.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="glass-card">
            <HiLightningBolt className="text-4xl text-yellow-300" />
            <h3 className="mt-6 text-2xl font-bold">Backend Power</h3>
            <p className="mt-4 text-white/80 leading-relaxed">
              Secure and scalable backend systems using Node.js, Express,
              databases, APIs, and authentication built for performance.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="glass-card">
            <HiShieldCheck className="text-4xl text-green-300" />
            <h3 className="mt-6 text-2xl font-bold">Full-Stack Solutions</h3>
            <p className="mt-4 text-white/80 leading-relaxed">
              End-to-end solutions — architecture, development, deployment,
              optimization, and long-term support.
            </p>
          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="text-center animate-fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Build Something Bold
          </h2>

          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Have an idea? Let’s turn it into a product that looks stunning and
            performs flawlessly.
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/contact">
              <button className="
                px-14 py-4 rounded-full
                bg-white text-indigo-600 font-bold
                transition-all duration-300
                hover:scale-110 hover:shadow-2xl
              ">
                Get in Touch 🚀
              </button>
            </Link>
          </div>
        </div>

      </div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        .animate-fadeUp {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.9s ease-out forwards;
        }

        .glass-card {
          backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 1.5rem;
          padding: 2.5rem;
          transition: all 0.35s ease;
          transform-style: preserve-3d;
        }

        .glass-card:hover {
          transform: translateY(-12px) rotateX(6deg);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
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
