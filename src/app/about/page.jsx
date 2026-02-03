export default function AboutPage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* ===== TOP ABOUT SECTION ===== */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10">

          <img
            src="/profile.jpg"
            alt="profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md"
          />

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            About Me
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate{" "}
            <span className="font-semibold text-blue-600">
              Full Stack Developer
            </span>{" "}
            with over 4 years of experience creating digital solutions that make
            a difference. I love building clean, scalable, and user-friendly
            applications.
          </p>

          <p className="mt-4 text-sm italic text-gray-500">
            “Crafting clean code and seamless user experiences is my superpower.”
          </p>
        </div>

        {/* ===== PERSONAL INFO CARD ===== */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">

            <div>
              <p className="font-semibold">Location</p>
              <p>Kalyan (W), Thane, Maharashtra</p>
            </div>

            <div>
              <p className="font-semibold">Experience</p>
              <p>4+ Years</p>
            </div>

            <div>
              <p className="font-semibold">Specialization</p>
              <p>Full Stack Development</p>
            </div>

            <div>
              <p className="font-semibold">Availability</p>
              <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                Available for hire
              </span>
            </div>

          </div>

          <p className="mt-6 text-gray-600 text-sm leading-relaxed">
            When I'm not coding, I enjoy learning new technologies, contributing
            to open-source projects, and continuously improving my skills to
            stay up-to-date with industry trends.
          </p>

        </div>

      </div>
    </section>
  );
}
