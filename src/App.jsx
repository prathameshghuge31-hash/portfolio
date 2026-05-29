import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import resume from "./assets/resume.pdf";
import { useState, useEffect } from "react";
import myphoto from "./assets/myphoto.png";
import blogImg from "./assets/blog.png";
import taskImg from "./assets/task.png";
import portfolioImg from "./assets/portfolio.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";

function App() {

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });

const [loading, setLoading] = useState(true);

const { scrollYProgress } = useScroll();

const [menuOpen, setMenuOpen] = useState(false);

const [activeSection, setActiveSection] = useState("home");

useEffect(() => {

  const handleScroll = () => {

    const sections = ["home", "about", "skills", "projects", "contact"];

    sections.forEach((section) => {

      const element = document.getElementById(section);

      if (element) {

        const rect = element.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section);
        }

      }

    });

  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center flex-col">

      <div className="w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

      <h1 className="text-cyan-400 text-3xl font-bold mt-8 tracking-widest">
        PRATHAMESH
      </h1>

      <p className="text-gray-400 mt-2">
        Loading Portfolio...
      </p>

    </div>
  );
}

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">

      <motion.div
  className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-[9999]"
  style={{ scaleX: scrollYProgress }}
/>

      <div
  className="fixed w-40 h-40 rounded-full pointer-events-none blur-3xl bg-cyan-400/20 z-0 transition duration-75"
  style={{
    left: position.x - 80,
    top: position.y - 80,
  }}
>
</div>

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
          },

          background: {
            color: {
              value: "#000000",
            },
          },

          fpsLimit: 120,

          particles: {
            color: {
              value: "#3b82f6",
            },

            links: {
              enable: true,
              color: "#3b82f6",
              distance: 150,
              opacity: 0.5,
              width: 1,
            },

            move: {
              enable: true,
              speed: 2,
            },

            number: {
              value: 80,
            },

            opacity: {
              value: 0.5,
            },

            size: {
              value: 3,
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <nav className="relative text-white hover:text-cyan-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">

          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">

            <h1 className="text-3xl font-bold text-blue-400 tracking-widest">
              PG
            </h1>

            {/* Desktop Menu */}
<ul className="hidden md:flex gap-8 font-semibold text-white">

  <li>
    <a
  href="#home"
  className={`transition duration-300 ${
    activeSection === "home"
      ? "text-cyan-400"
      : "text-white hover:text-cyan-400"
  }`}
>
  Home
</a>
  </li>

  <li>
    <a
  href="#about"
  className={`transition duration-300 ${
    activeSection === "about"
      ? "text-cyan-400"
      : "text-white hover:text-cyan-400"
  }`}
>
      About
    </a>
  </li>

  <li>
    <a
  href="#skills"
  className={`transition duration-300 ${
    activeSection === "skills"
      ? "text-cyan-400"
      : "text-white hover:text-cyan-400"
  }`}
>
      Skills
    </a>
  </li>

  <li>
    <a
  href="#projects"
  className={`transition duration-300 ${
    activeSection === "projects"
      ? "text-cyan-400"
      : "text-white hover:text-cyan-400"
  }`}
>
      Projects
    </a>
  </li>

  <li>
    <a
  href="#contact"
  className={`transition duration-300 ${
    activeSection === "contact"
      ? "text-cyan-400"
      : "text-white hover:text-cyan-400"
  }`}
>
      Contact
    </a>
  </li>

</ul>

// hi

{/* Mobile Menu Button */}
<button
  className="md:hidden text-cyan-400"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={32} /> : <Menu size={32} />}
</button>

{/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden flex flex-col items-center gap-6 bg-black/90 py-8 text-white text-lg">

    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#skills" onClick={() => setMenuOpen(false)}>
      Skills
    </a>

    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

  </div>
)}
          </div>

        </nav>

        {/* Hero Section */}
        <div
          id="home"
          className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black"
        >

          {/* Glow */}
          <div className="absolute w-[700px] h-[250px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10">

            <img
  src={myphoto}
  alt="Prathamesh"
  className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-[0_0_40px_#3b82f6] object-cover hover:scale-105 transition duration-300"
/>

            <h1 className="text-7xl font-extrabold tracking-widest text-white">
              PRATHAMESH
            </h1>

            <TypeAnimation
              sequence={[
                "Engineer",
                2000,
                "Creator",
                2000,
                "Builder",
                2000,
                "Frontend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl text-cyan-300 mt-4 block"
            />

            <div className="flex gap-4 justify-center mt-8">

            <button className="mt-8 px-8 py-3 border border-blue-500 rounded-full bg-blue-500/10 hover:bg-blue-500 hover:shadow-[0_0_40px_#3b82f6] hover:scale-110 transition duration-500">
  Explore Portfolio
</button>

<a
  href={resume}
  download
  className="inline-block mt-8 px-8 py-3 border border-cyan-400 rounded-full text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_#3b82f6] transition duration-300"
>
  Download Resume
</a>

</div>

<div className="flex justify-center gap-4 mt-6">
  <a
    href="https://github.com/"
    target="_blank"
    className="px-5 py-2 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    className="px-5 py-2 border border-blue-400 rounded-full hover:bg-blue-400 hover:text-black transition duration-300"
  >
    LinkedIn
  </a>
</div>
          </div>

        </div>

        {/* About */}
        <motion.div
  id="about"
  className="py-20 text-center px-6"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  >

          <h2 className="text-4xl font-bold text-blue-400 mb-6">
            About Me
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-8">
            I am an engineering student passionate about technology,
            web development and cinematic digital experiences.
            I love building modern websites with clean UI,
            creative animations and storytelling.
          </p>

        </motion.div>

        {/* Skills */}
        <motion.div
  id="skills"
  className="py-20 px-6 text-center"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>

          <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Java",
              "GitHub",
              "Responsive Design",
            ].map((skill, index) => (

              <div
                key={index}
                className="px-6 py-3 bg-gray-900 border border-blue-500/30 rounded-full text-white hover:bg-blue-500 hover:scale-110 transition duration-300 shadow-lg shadow-blue-500/20"
              >
                {skill}
              </div>

            ))}

          </div>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-6">
  <div className="bg-white/5 border border-cyan-400 rounded-2xl p-8 hover:scale-105 transition duration-300">
    <h3 className="text-4xl font-bold text-cyan-300">10+</h3>
    <p className="text-gray-400 mt-2">Projects Built</p>
  </div>

  <div className="bg-white/5 border border-cyan-400 rounded-2xl p-8 hover:scale-105 transition duration-300">
    <h3 className="text-4xl font-bold text-cyan-300">2+</h3>
    <p className="text-gray-400 mt-2">Technologies Learned</p>
  </div>

  <div className="bg-white/5 border border-cyan-400 rounded-2xl p-8 hover:scale-105 transition duration-300">
    <h3 className="text-4xl font-bold text-cyan-300">24/7</h3>
    <p className="text-gray-400 mt-2">Learning Mindset</p>
  </div>
</div>

{/* My Journey */}

<div className="py-20 px-6 text-center">
  <h2 className="text-5xl font-bold text-blue-400 mb-16">
    My Journey
  </h2>

  <div className="max-w-3xl mx-auto space-y-8">

    <div className="bg-white/5 border border-cyan-400 rounded-2xl p-6 hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-bold text-cyan-300">
        Started Web Development
      </h3>

      <p className="text-gray-400 mt-2">
        Began learning HTML, CSS and JavaScript with passion for creating websites.
      </p>
    </div>

    <div className="bg-white/5 border border-cyan-400 rounded-2xl p-6 hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-bold text-cyan-300">
        Built React Projects
      </h3>

      <p className="text-gray-400 mt-2">
        Created modern UI projects using React and Tailwind CSS.
      </p>
    </div>

    <div className="bg-white/5 border border-cyan-400 rounded-2xl p-6 hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-bold text-cyan-300">
        Engineering Student
      </h3>

      <p className="text-gray-400 mt-2">
        Balancing college, coding and self-growth while building a developer career.
      </p>
    </div>

  </div>
</div>

        {/* Projects */}
<div id="projects" className="py-20 px-10">

  <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
    Projects
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

    {/* Card 1 */}
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-blue-500le/20 hover:sca-105 hover:rotate-1 hover:-translate-y-2 hover:shadow-blue-500/30 transition duration-300">

      <img
        src={blogImg}
        alt="AI Blog Platform"
        className="rounded-xl mb-4 h-52 w-full object-cover hover:scale-105 transition duration-300"
      />

      <h3 className="text-2xl font-bold mb-4">
        AI Blog Platform
      </h3>

      <p className="text-gray-400 mb-4">
        Modern blogging platform with comments, post creation and clean UI.
      </p>

      <div className="flex gap-4 mt-6">

        <a
          href="https://github.com/prathameshghuge31-hash"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500/20 transition duration-300"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/prathamesh-ghuge-b4433a32b"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400/20 transition duration-300"
        >
          Live Demo
        </a>

      </div>

    </div>

    {/* Card 2 */}
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/20 hover:scale-105 hover:rotate-1 hover:-translate-y-2 hover:shadow-blue-500/30 transition duration-300">

      <img
        src={taskImg}
        alt="Task Manager"
        className="rounded-xl mb-4 h-52 w-full object-cover hover:scale-105 transition duration-300"
      />

      <h3 className="text-2xl font-bold mb-4">
        Task Manager
      </h3>

      <p className="text-gray-400 mb-4">
        Smart task manager with dark mode and productivity UI.
      </p>

      <div className="flex gap-4 mt-6">

        <a
          href="https://github.com/prathameshghuge31-hash"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500/20 transition duration-300"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/prathamesh-ghuge-b4433a32b"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400/20 transition duration-300"
        >
          Live Demo
        </a>

      </div>

    </div>

    {/* Card 3 */}
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/20 hover:scale-105 hover:rotate-1 hover:-translate-y-2 hover:shadow-blue-500/30 transition duration-300">

      <img
        src={portfolioImg}
        alt="Portfolio"
        className="rounded-xl mb-4 h-52 w-full object-cover hover:scale-105 transition duration-300"
      />

      <h3 className="text-2xl font-bold mb-4">
        Cinematic Portfolio
      </h3>

      <p className="text-gray-400 mb-4">
        Modern cinematic developer portfolio with glowing effects.
      </p>

      <div className="flex gap-4 mt-6">

        <a
          href="https://github.com/prathameshghuge31-hash"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500/20 transition duration-300"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/prathamesh-ghuge-b4433a32b"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400/20 transition duration-300"
        >
          Live Demo
        </a>

      </div>

    </div>

  </div>

</div>

        {/* Contact */}
        <div id="contact" className="py-20 px-6 text-center mt-20">

          <div className="max-w-2xl mx-auto flex flex-col gap-6 mt-10">

  <input
    type="text"
    placeholder="Your Name"
    className="w-full p-4 rounded-xl bg-white/5 border border-cyan-400 text-white outline-none focus:shadow-[0_0_20px_#3b82f6] transition duration-300"
  />

  <input
    type="email"
    placeholder="Your Email"
    className="w-full p-4 rounded-xl bg-white/5 border border-cyan-400 text-white outline-none focus:shadow-[0_0_20px_#3b82f6] transition duration-300"
  />

  <textarea
    placeholder="Your Message"
    rows="5"
    className="w-full p-4 rounded-xl bg-white/5 border border-cyan-400 text-white outline-none focus:shadow-[0_0_20px_#3b82f6] transition duration-300"
  ></textarea>

  <button className="px-8 py-3 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 hover:shadow-[0_0_30px_#3b82f6] transition duration-300">
    Send Message
  </button>

</div>

<div className="mt-20"></div>
          
          <h2 className="text-4xl font-bold text-blue-400 mb-6">
            Contact Me
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Let’s connect and build something amazing together.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">

            <a
              href="https://github.com/prathameshghuge31-hash"
              target="_blank"
              className="px-6 py-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/prathamesh-ghuge-b4433a32b"
              target="_blank"
              className="px-6 py-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="mailto:prathameshghuge31@gmail.com"
              className="px-6 py-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition duration-300"
            >
              Email
            </a>

          </div>

        </div>

        {/* Footer */}
       <footer className="py-8 border-t border-white/10 text-center text-gray-400">
  <h3 className="text-2xl font-bold text-cyan-400 mb-3">
    Prathamesh Ghuge
  </h3>

  <p className="mb-4">
    Engineering Student • Web Developer • Dream Builder
  </p>

  <div className="flex justify-center gap-6 mb-4">
    <a
      href="https://github.com/"
      target="_blank"
      className="hover:text-cyan-400 transition duration-300"
    >
      GitHub
    </a>

    <a
      href="https://linkedin.com/"
      target="_blank"
      className="hover:text-cyan-400 transition duration-300"
    >
      LinkedIn
    </a>

    <a
      href="mailto:prathameshghuge31@gmail.com"
      className="hover:text-cyan-400 transition duration-300"
    >
      Email
    </a>
  </div>

  <p className="text-sm text-gray-500">
    © 2026 Prathamesh. All rights reserved.
  </p>
</footer>

      </div>

    </div>
  );
}

export default App;