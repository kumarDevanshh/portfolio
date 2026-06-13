"use client";

export default function CTA() {
  return (
    <section className="py-12 px-6">
      <div
        className="
          max-w-6xl mx-auto
          rounded-2xl
          bg-gradient-to-r from-blue-600 to-purple-600
          text-white
          py-16 px-6
          text-center
          shadow-xl
        "
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Need a Website for Your Business?
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-3xl mx-auto text-blue-100 text-lg">
          Whether you're a restaurant, clinic, salon, lawyer, or local
          business, I can help you build a modern website that attracts
          customers and strengthens your online presence.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="
              bg-white
              text-blue-600
              font-bold
              px-7 py-3
              rounded-lg
              hover:scale-105
              transition
            "
          >
            Start Your Project
          </a>

          <a
            href="#projects"
            className="
              border
              border-white
              px-7 py-3
              rounded-lg
              font-bold
              hover:bg-white
              hover:text-blue-600
              transition
            "
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
