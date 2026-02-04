"use client";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCloudinary,
  SiFirebase,
  SiDocker,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML / CSS", icon: <SiHtml5 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Cloudinary", icon: <SiCloudinary /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Docker", icon: <SiDocker /> },
  ];

  return (
<section id="skills" className="bg-gray-50 py-14">
<div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-900">
          Skills & Technologies
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          I work with modern technologies and frameworks to build robust,
          scalable applications.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-xl p-6 border border-gray-200
                flex flex-col items-center justify-center
                transition-all duration-300
                hover:scale-105 hover:shadow-lg
              "
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-3 bg-gray-100 text-gray-700">
                <span className="text-2xl">{skill.icon}</span>
              </div>

              <p className="text-sm font-bold text-gray-900">
                {skill.name}
              </p>

              <span className="mt-3 h-1 w-0 bg-blue-600 rounded transition-all duration-300 group-hover:w-10"></span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
            View All Skills →
          </button>
        </div>

      </div>
    </section>
  );
}

