"use client";

/*
  Projects component
  Ye "My Projects" section show karta hai
*/

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-14">
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

          {/* PROJECT 1 */}
          <div className="bg-white rounded-xl overflow-hidden border transition-all hover:scale-105 hover:shadow-lg">
            <img src="/project1.png" alt="Project 1" className="w-full h-44 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-lg font-bold">Luxe Interior Designer Website</h3>
              <p className="mt-2 text-sm text-gray-600">
                A fully responsive and modern interior designer website built
                using Next.js and Tailwind CSS.
              </p>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="bg-white rounded-xl overflow-hidden border transition-all hover:scale-105 hover:shadow-lg">
            <img src="/project2.png" alt="Project 2" className="w-full h-44 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-lg font-bold">BrightSmile Dental Website</h3>
              <p className="mt-2 text-sm text-gray-600">
                A modern dental clinic website built using Next.js & Tailwind.
              </p>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="bg-white rounded-xl overflow-hidden border transition-all hover:scale-105 hover:shadow-lg">
            <img src="/project3.png" alt="Project 3" className="w-full h-44 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-lg font-bold">Bella Vista Restaurant</h3>
              <p className="mt-2 text-sm text-gray-600">
                Restaurant landing page with beautiful UI.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
