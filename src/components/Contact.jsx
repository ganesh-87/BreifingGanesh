import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div
      id="contact"
      className=" flex flex-row justify-center py-5 gap-5 bg-black mt-5"
    >
      <a href="https://www.linkedin.com/in/ganesh-pinireddy-a2bb60223/">
        <FaLinkedin className="text-2xl text-blue-800" />
      </a>
      <a href="https://github.com/ganesh-87">
        <FaGithub className="text-2xl" />
      </a>
      <div className="bg-gradient-to-l from-pink-600 to-blue-800 bg-clip-text text-transparent ">
        218r1a0553@gmail.com
      </div>
    </div>
  );
}
