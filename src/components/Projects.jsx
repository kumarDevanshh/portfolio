"use client";

/*
  Projects component
  Ye "My Projects" section show karta hai
*/

export default function Projects() {
  return (
    /*
      bg-gray-50 = halka background
      py-20 = upar neeche spacing
    */
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* ===== HEADING ===== */}
        <h2 className="text-3xl font-bold text-gray-900">
          My Projects
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience in full-stack development.
        </p>

        {/* ===== PROJECT CARDS GRID ===== */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {/* ================= PROJECT 1 ================= */}
          <div
            className="
              bg-white rounded-xl overflow-hidden border
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg
            "
          >
            {/* Project Image */}
            <img
              src="/project1.png"
              alt="Project 1"
              className="w-full h-44 object-cover"
            />

            {/* Card Content */}
            <div className="p-6 text-left">
              <h3 className="text-lg font-bold text-gray-900">
                Luxe Interior Designer Website
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                A fully responsive and modern interior designer website built
                using Next.js and Tailwind CSS.
              </p>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/yourusername/project1"
                  target="_blank"
                  className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-lg"
                >
                  Code
                </a>

                <a
                  href="#"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* ================= PROJECT 2 ================= */}
          <div
            className="
              bg-white rounded-xl overflow-hidden border
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg
            "
          >
            <img
              src="/project2.png"
              alt="Project 2"
              className="w-full h-44 object-cover"
            />

            <div className="p-6 text-left">
              <h3 className="text-lg font-bold text-gray-900">
                BrightSmile Dental Website
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                A modern dental clinic website with clean UI built using
                Next.js, Tailwind CSS, and ShadCN UI.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/yourusername/project2"
                  target="_blank"
                  className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-lg"
                >
                  Code
                </a>

                <a
                  href="#"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* ================= PROJECT 3 ================= */}
          <div
            className="
              bg-white rounded-xl overflow-hidden border
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg
            "
          >
            <img
              src="/project3.png"
              alt="Project 3"
              className="w-full h-44 object-cover"
            />

            <div className="p-6 text-left">
              <h3 className="text-lg font-bold text-gray-900">
                Bella Vista Restaurant Landing Page
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                A restaurant landing page with beautiful UI and responsive
                layout built using Next.js and Tailwind CSS.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/yourusername/project3"
                  target="_blank"
                  className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-lg"
                >
                  Code
                </a>

                <a
                  href="#"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ===== VIEW ALL BUTTON ===== */}
        <div className="mt-12">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold">
            View All Projects →
          </button>
        </div>

      </div>
    </section>
  );
}
