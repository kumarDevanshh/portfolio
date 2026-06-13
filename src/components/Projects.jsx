"use client";

import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Featured Business Websites
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          A collection of modern, responsive websites built for businesses to
          improve their online presence and attract more customers.
        </p>

        {/* PROJECT GRID */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {/* PROJECT 1 */}
          <div className="bg-white rounded-xl overflow-hidden border transition-all hover:scale-105 hover:shadow-lg">
            <img
              src="/project1.png"
              alt="Interior Designer Website"
              className="w-full h-44 object-cover"
            />

            <div className="p-6 text-left">
              <h3 className="text-lg font-bold">
                Luxe Interior Designer Website
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Premium interior design website with service showcase,
                portfolio gallery and lead generation features.
              </p>

              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  Get Similar Website
                </Link>
              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="bg-white rounded-xl overflow-hidden border transition-all hover:scale-105 hover:shadow-lg">
            <img
              src="/project2.png"
              alt="Dental Clinic Website"
              className="w-full h-44 object-cover"
            />

            <div className="p-6 text-left">
              <h3 className="text-lg font-bold">
                BrightSmile Dental Website
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Professional dental clinic website with appointment-focused
                design and mobile-friendly experience.
              </p>

              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  Get Similar Website
                </Link>
              </div>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="bg-white rounded-xl overflow-hidden border transition-all hover:scale-105 hover:shadow-lg">
            <img
              src="/project3.png"
              alt="Restaurant Website"
              className="w-full h-44 object-cover"
            />

            <div className="p-6 text-left">
              <h3 className="text-lg font-bold">
                Bella Vista Restaurant
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Modern restaurant landing page featuring menu highlights,
                contact details and customer engagement sections.
              </p>

              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  Get Similar Website
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}