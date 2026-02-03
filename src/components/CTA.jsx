"use client";

export default function CTA() {
  return (
    // 🔹 Outer section (page se distance)
    <section className="py--6 px-6">
      
      {/* 🔹 Center box */}
      <div
        className="
          max-w-6xl mx-auto
          rounded-2xl
          bg-gradient-to-r from-blue-600 to-purple-600
          text-white
          py-14 px-6
          text-center
        "
      >
        {/* 🔹 Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Let's Work Together
        </h2>

        {/* 🔹 Description */}
        <p className="mt-4 max-w-2xl mx-auto text-blue-100 font-medium">
          I'm always interested in new opportunities and exciting projects.
          Let's discuss how we can bring your ideas to life.
        </p>

        {/* 🔹 Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg">
            Get In Touch
          </button>

          <button className="border border-white px-6 py-3 rounded-lg font-bold">
            Send Email
          </button>
        </div>
      </div>
    </section>
  );
}



