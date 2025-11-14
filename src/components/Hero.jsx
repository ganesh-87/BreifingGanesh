import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center space-y-4 text-center bg-gradient-to-br scroll-mt-15 "
    >
      <div className="p-[3px] mt-4 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transform transition duration-300 shadow-xl">
        <img
          src="/ganesh.jpg"
          alt="Ganesh"
          className="rounded-full w-52 h-52 object-cover"
        />
      </div>

      <h2 className="text-black text-3xl md:text-5xl font-bold mb-4">
        <TypeAnimation
          sequence={[
            "Hi, I'm Ganesh 👋", // Types this string
            2000, // Waits 2s
            "", // Deletes it
            "SWE Intern@ Airbus 🚀",
            2000,
            "",
            "Let's build something cool! 🔧",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </h2>
      <p className="text-xl text-black">
        Full Stack Development and Software Testing
      </p>
      <p className="text-black">
        I'm a passionate engineer with experience in building full-stack
        applications from Airbus and Test Automation from S&P Global.
      </p>
      <a
        href="#contact"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Contact Me
      </a>
    </section>
  );
}
