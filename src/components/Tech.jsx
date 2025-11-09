import { FaAngular, FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiSelenium, SiPostman } from "react-icons/si";

const techStack = [
  { icon: <FaJava />, label: "Java", color: "text-red-600" },
  { icon: <FaPython />, label: "Python", color: "text-yellow-500" },
  { icon: <FaReact />, label: "React", color: "text-sky-400" },
  { icon: <FaAngular />, label: "Angular", color: "text-red-700" },
  { icon: <RiTailwindCssFill />, label: "Tailwind", color: "text-cyan-500" },
  { icon: <DiMysql />, label: "MySQL", color: "text-blue-700" },
  { icon: <BiLogoSpringBoot />, label: "Spring Boot", color: "text-green-600" },
  { icon: <SiSelenium />, label: "Selenium", color: "text-gray-700" },
  { icon: <SiPostman />, label: "Postman", color: "text-orange-500" },
];

export default function Tech() {
  return (
    <section className="py-10 px-6 text-black text-center">
      <h1 className="text-3xl font-bold mb-8 inline-block border-2 border-gray-800 px-4 py-2 rounded-lg">
        Tech Stack
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mt-6 ">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in-out"
          >
            <div className={`text-6xl ${tech.color}`}>{tech.icon}</div>
            <p className="mt-2 text-sm font-medium">{tech.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
