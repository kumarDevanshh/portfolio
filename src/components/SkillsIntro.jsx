"use client";

export default function SkillsIntro() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-5xl mx-auto px-6 space-y-24">

        {/* ================= SERVICES ================= */}
        <div className="text-center animate-fadeUp">

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Services I Offer
          </h2>

          {/* UNDERLINE */}
          <div className="mx-auto mt-3 h-[3px] w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>

          {/* CARD (COMPACT) */}
          <div
            className="
              mt-10
              bg-[#0f172a]
              max-w-3xl mx-auto
              rounded-2xl
              px-6 py-5
              shadow-lg
            "
          >
            {/* Fake editor header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-3 w-3 bg-red-500 rounded-full"></span>
              <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
            </div>

            <p className="font-mono text-[13px] leading-relaxed text-gray-300">
              <span className="text-blue-400">&gt;</span>{" "}
              I specialize in building scalable, high-performance web
              applications—crafting responsive interfaces, developing robust
              backend systems, and delivering clean, production-ready solutions
              with long-term maintainability.
            </p>
          </div>
        </div>

        {/* ================= WORKFLOW ================= */}
        <div className="text-center animate-fadeUp delay-200">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Development Process
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-28 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>

          <div
            className="
              mt-10
              bg-[#0f172a]
              max-w-3xl mx-auto
              rounded-2xl
              px-6 py-5
              shadow-lg
            "
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-3 w-3 bg-red-500 rounded-full"></span>
              <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
            </div>

            <p className="font-mono text-[13px] leading-relaxed text-gray-300">
              <span className="text-blue-400">&gt;</span>{" "}
              My workflow follows a structured approach—requirements analysis,
              design planning, implementation, testing, optimization, and
              seamless deployment—to ensure reliability, scalability, and
              performance.
            </p>
          </div>
        </div>

      </div>

      {/* ===== SUBTLE ANIMATION ===== */}
      <style jsx>{`
        .animate-fadeUp {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.9s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
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
