"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  const experiences = [
    {
      company: "Axcend Automation and Software Solutions",
      location: "Chennai, India",
      period: "2022 - 2024",
      role: "Full Stack Developer",
      responsibilities: [
        "Developed a workflow application to streamline operational management using Node.js, React.js, Tailwind CSS, and MongoDB.",
        "Built core backend components and established the development framework as the Subject Matter Expert (SME).",
      ],
    },
    {
      company: "DigitalXC",
      location: "Remote",
      period: "2021 - 2022",
      role: "Automation Engineer",
      responsibilities: [
        "Developed automation solutions with Terraform to streamline infrastructure deployments across AWS, Azure, and GCP for strategic clients.",
      ],
    },
    {
      company: "Karvy Innotech Limited",
      location: "Puducherry",
      period: "2019 - 2021",
      role: "Associate",
      responsibilities: [
        "Built on-premises applications and managed deployments.",
        "Provided technical support for the Pink Verification Certificate.",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
      style={{ backgroundImage: "url('/backgroundImage.jpg')" }} >
      <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-center font-bold text-5xl p-8 text-white-800 dark:text-white drop-shadow-lg"> PROFESSIONAL EXPERIENCE</h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group text-base md:text-lg lg:text-3xl"
              data-aos="fade-up"
            >
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2 flex items-center space-x-4 drop-shadow-md">
                <Briefcase className="w-7 h-7 text-indigo-500" />
                <span>{exp.company}</span>
              </h3>
              <div className="flex items-center text-2xl text-gray-600 dark:text-gray-400 mb-2 space-x-3 drop-shadow-sm">
                <MapPin className="w-6 h-6" />
                <span>{exp.location}</span>
              </div>
              <div className="flex items-center text-2xl text-gray-600 dark:text-gray-400 mb-2 space-x-3 drop-shadow-sm">
                <Calendar className="w-6 h-6" />
                <span>{exp.period}</span>
              </div>
              <div className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4 drop-shadow-sm">
                <strong>Role:</strong> {exp.role}
              </div>
              <ul className="list-disc list-inside space-y-3 text-2xl text-gray-600 dark:text-gray-400 drop-shadow-sm">
                {exp.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
