"use client";

import { useEffect } from "react";
import Lottie from "react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";
import GraduationAnimation from "./assets/graduation.json";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const educationDetails = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Manakula Vinayagar Institute of Technology",
      university: "Pondicherry University",
      period: "2015 – 2019",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden"
      style={{ backgroundImage: "url('/backgroundImage.jpg')" }}
    >
      <div className="container mx-auto px-6">
        <div
          className="flex items-center justify-center space-x-4 p-8"
          data-aos="fade-up"
        >
          <GraduationCap className="w-10 h-10 text-white" />
          <h2 className="text-center font-bold text-5xl p-8 text-white-800 dark:text-white drop-shadow-lg">
            EDUCATION
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            className="md:w-1/2 bg-white text-gray-800 p-8 rounded-lg shadow-lg mb-8 md:mb-0"
            data-aos="fade-right"
          >
            {educationDetails.map((edu, index) => (
              <div
                key={index}
                className="rounded-lg transition-transform transform hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-3xl font-semibold">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-center text-base md:text-xl lg:text-xl mb-2">
                  {edu.institution}
                </p>
                <p className="text-center text-base md:text-xl lg:text-xl mb-2">
                  {edu.university}
                </p>
                <p className="text-center text-base md:text-xl lg:text-xl mb-2">{edu.period}</p>
              </div>
            ))}
          </div>
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <Lottie
              animationData={GraduationAnimation}
              className="w-80 h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
