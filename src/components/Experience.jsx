// components/TimelineSection.jsx
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";

const data = [
  {
    type: "experience",
    title: "Quality Assurance Intern",
    institution: "S&P Global",
    duration: "Jun 2024 - Aug 2024",
    description:
      "Developed and optimized automated test scripts using Python ,Selenium WebDriver and QA processes, reducing manual testing.",
  },
  {
    type: "education",
    title: "Bachelor's of Technology (CSE)",
    institution: "CMR Engineering College",
    duration: "2021 - 2025",
    description: "8.76 CGPA",
  },
  {
    type: "education",
    title: "Intermediate - MPC",
    institution: "Krishnaveni Junior College",
    duration: "2019 - 2021",
    description: "98.2%",
  },
  {
    type: "education",
    title: "10th Class",
    institution: "Karunya Jyothi High School",
    duration: "2019",
    description: "10 CGPA",
  },
];

export default function Experience() {
  return (
    <section id="journey" className="py-10 scroll-mt-15">
      <h2 className="text-4xl font-bold text-center mb-10 text-black">
        My Journey
      </h2>
      <VerticalTimeline>
        {data.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: item.type === "education" ? "#4f46e5" : "#16a34a",
              color: "black",
            }}
            contentArrowStyle={{ borderRight: "7px solid #999" }}
            date={item.duration}
            iconStyle={{
              background: item.type === "education" ? "#4f46e5" : "#16a34a",
              color: "#fff",
            }}
            icon={item.type === "education" ? <MdSchool /> : <MdWork />}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <h4 className="text-md">{item.institution}</h4>
            <p className="mt-2">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
