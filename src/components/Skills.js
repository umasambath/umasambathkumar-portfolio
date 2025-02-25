"use client";

import { Code, Server, Database, Layout, GitBranch, Terminal, Layers, Cpu, Workflow } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    icon: <Code className="w-10 h-10 text-blue-500" />,
    name: "Frontend Development",
    tech: "React.js, JavaScript",
    description: "Crafting responsive and interactive user interfaces with modern React features and Next.js for optimal performance.",
  },
  {
    icon: <Server className="w-10 h-10 text-green-500" />,
    name: "Backend Development",
    tech: "Node.js, Express",
    description: "Building robust server-side applications focusing on scalability and clean architecture.",
  },
  {
    icon: <Database className="w-10 h-10 text-purple-500" />,
    name: "Database Management",
    tech: "SQL, NoSQL",
    description: "Designing and implementing efficient database schemas and queries for optimal data management.",
  },
  {
    icon: <Layout className="w-10 h-10 text-pink-500" />,
    name: "UI/UX Design",
    tech: "Tailwind CSS, Material UI, Tailwind UI",
    description: "Creating intuitive user interfaces with modern design principles and frameworks.",
  },
  {
    icon: <GitBranch className="w-10 h-10 text-orange-500" />,
    name: "Version Control",
    tech: "Git, GitHub",
    description: "Efficiently managing code versions and collaborating through GitHub.",
  },
  {
    icon: <Terminal className="w-10 h-10 text-yellow-500" />,
    name: "Scripting",
    tech: "Bash",
    description: "Writing scripts for automation and improved developer workflows.",
  },
  {
    icon: <Layers className="w-10 h-10 text-indigo-500" />,
    name: "State Management",
    tech: "Redux, Context API",
    description: "Handling complex application state with modern management solutions.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-red-500" />,
    name: "API Development",
    tech: "REST",
    description: "Designing efficient APIs for seamless data communication.",
  },
  {
    icon: <Workflow className="w-10 h-10 text-cyan-500" />,
    name: "Agile Methodologies",
    tech: "Scrum, Kanban",
    description: "Operating in agile environments with a focus on continuous delivery.",
  },
];

export default function Skill() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="static py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-90 dark:to-purple-90 transition-colors duration-300 overflow-hidden relative" style={{ backgroundImage: "url('/backgroundImage.jpg')" }}>
       <h2
          className="text-center font-bold text-5xl p-8 text-white-800 dark:text-white drop-shadow-lg"
          data-aos="fade-up"
        >
          SKILLS
        </h2>
      <div className="md:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center mb-4">
              {skill.icon}
            </div>
            <h3 className="text-center text-base md:text-lg lg:text-3xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-center text-base md:text-lg lg:text-3xl text-gray-600 mb-1">{skill.tech}</p>
            <p className="text-center text-base md:text-lg lg:text-3xl text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
