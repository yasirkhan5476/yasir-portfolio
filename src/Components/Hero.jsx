import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS_DATA = [
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)"], icon: "⚡" },
  { category: "Backend", items: ["Node.js", "Express.js", "PHP", "REST APIs"], icon: "⚙️" },
  { category: "Mobile", items: ["Flutter", "Dart"], icon: "📱" },
  { category: "Database", items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"], icon: "🗄️" },
  { category: "Core & Tools", items: ["DSA in Java", "Git / GitHub", "Agile Workflows"], icon: "🛠️" },
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Volunteer & NGO Management Platform",
    stack: "React.js • Node.js • Express.js",
    description: "A comprehensive management portal for coordinating volunteers and NGO operations featuring interactive digital tracking.",
    features: ["Digital volunteer passports", "Geofenced check-in workflows", "NGO administrative analytics"],
    github: "https://github.com/yasirkhan5476",
    live: "https://volunteer-frontend-brown.vercel.app/login",
  },
  {
    id: 2,
    title: "Hotel Management System",
    stack: "React.js • Express.js • MongoDB",
    description: "Full-stack web application built with MERN stack for managing hotel operations and real-time bookings.",
    features: ["Real-time booking management", "Admin dashboard for room availability", "MERN stack integration"],
    github: "https://github.com/yasirkhan5476/Hotel-mangement-system",
    live: null,
  },
  {
    id: 3,
    title: "Salon Management System",
    stack: "PHP • MySQL",
    description: "Web-based system that allows users to book appointments based on their preferences and availability.",
    features: ["Interactive schedule booking", "Database tracking for clients", "Responsive management portal"],
    github: "https://github.com/yasirkhan5476/ecommerce-website",
    live: null,
  },
  {
    id: 4,
    title: "Laptop Selling Store",
    stack: "Flutter • Firebase",
    description: "E-commerce mobile app for selling laptops, featuring user authentication, product management, and secure checkout.",
    features: ["Firebase Authentication", "Cross-platform mobile UI", "Real-time product catalog"],
    github: "https://github.com/yasirkhan5476/ecommerce-app",
    live: null,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeProject, setActiveProject] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState("01");
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const imgX = useTransform(scrollYProgress, [0, 1], ["0vw", "-28vw"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0vh", "-2vh"]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.7], [50, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.7], [-30, 0]);

  const ghostOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.4]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollPos < windowHeight * 1.5) setCurrentSectionIndex("01");
      else if (scrollPos < windowHeight * 2.5) setCurrentSectionIndex("02");
      else if (scrollPos < windowHeight * 3.5) setCurrentSectionIndex("03");
      else setCurrentSectionIndex("04");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const theme = {
    bg: isDarkMode ? "bg-black" : "bg-slate-50",
    textPrimary: isDarkMode ? "text-white" : "text-slate-900",
    textSecondary: isDarkMode ? "text-white/60" : "text-slate-600",
    textMuted: isDarkMode ? "text-white/40" : "text-slate-400",
    border: isDarkMode ? "border-white/10" : "border-slate-200",
    cardBg: isDarkMode
      ? "bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-md"
      : "bg-white/80 backdrop-blur-md shadow-lg shadow-slate-200/50",
    chipBg: isDarkMode
      ? "bg-white/10 border-white/10 text-white/90 hover:bg-violet-500/20 hover:border-violet-400/50"
      : "bg-slate-100 border-slate-200 text-slate-800 hover:bg-violet-100 hover:border-violet-300",
    heroOverlay: isDarkMode
      ? "from-black via-transparent to-transparent"
      : "from-slate-50 via-transparent to-transparent",
  };

  return (
    <div className={`${theme.bg} ${theme.textPrimary} transition-colors duration-500 selection:bg-violet-500 selection:text-white font-sans overflow-x-hidden`}>
      {/* ---------- HERO SCROLL SECTION ---------- */}
      <section ref={wrapperRef} id="about" className={`relative ${theme.bg}`} style={{ height: "300vh" }}>
        <div className="fixed top-0 left-0 h-screen w-full overflow-hidden z-10">
          
          {/* AMBIENT BACKGROUND GLOWS */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/20 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-fuchsia-600/15 blur-[150px] rounded-full pointer-events-none" />

          {/* NAVBAR */}
          <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-6 backdrop-blur-md bg-transparent">
            <a href="#about" className="font-black text-2xl tracking-tighter bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              YIK.
            </a>

            <ul className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`${theme.textSecondary} hover:text-violet-400 text-xs font-semibold tracking-[0.2em] uppercase transition-colors`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`flex items-center gap-2 border ${theme.border} rounded-full px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:scale-105`}
              >
                {isDarkMode ? "☀️ Light" : "🌙 Dark"}
              </button>

              <a
                href="/resume.pdf"
                download="Yasir_Idrees_Khan_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-2 border border-violet-500/50 bg-violet-500/10 hover:bg-violet-600 hover:text-white rounded-full px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-all shadow-lg shadow-violet-500/20"
              >
                Resume <span aria-hidden>↗</span>
              </a>
            </div>
          </nav>

          {/* LEFT INDEX MARKER */}
          <div className={`hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3 ${theme.textMuted} text-[11px] tracking-[0.2em] z-40`}>
            <span className="text-violet-400 font-bold">{currentSectionIndex}</span>
            <span className={`w-px h-16 ${isDarkMode ? "bg-white/20" : "bg-slate-300"}`} />
            <span>04</span>
          </div>

          {/* PHOTO */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ x: imgX, y: imgY, scale: imgScale }}
          >
            <img
              src="/yasir2.png"
              alt="Yasir Idrees Khan"
              className="h-[60vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] w-auto object-cover object-top select-none pointer-events-none drop-shadow-2xl"
              draggable={false}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${theme.heroOverlay}`} />
          </motion.div>

          {/* TEXT BLOCK */}
          <motion.div
            className="absolute inset-0 z-30 flex flex-col justify-center pl-[38vw] pr-4 sm:pl-[34vw] sm:pr-8 md:pl-[30vw] md:pr-16"
            style={{ opacity: textOpacity, x: textX, y: textY }}
          >
            <span className="inline-block w-fit px-3 py-1 rounded-full text-[10px] sm:text-xs tracking-[0.25em] uppercase bg-violet-500/10 border border-violet-500/30 text-violet-400 font-semibold mb-3">
              👋 Welcome to my portfolio
            </span>

            <h1 className="relative w-full font-black uppercase tracking-tight sm:tracking-normal leading-[1] sm:leading-[0.95] text-3xl sm:text-6xl md:text-6xl lg:text-8xl">
              <motion.span
                className={`absolute -left-1.5 top-1 w-full ${isDarkMode ? "text-white/10" : "text-slate-300/40"} select-none`}
                style={{ opacity: ghostOpacity }}
                aria-hidden="true"
              >
                YASIR<br className="md:hidden" /> IDREES KHAN
              </motion.span>
              <span className="relative block w-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
                YASIR<br className="md:hidden" /> IDREES KHAN
              </span>
            </h1>

            <h2 className="text-xs sm:text-base md:text-xl font-bold tracking-[0.2em] sm:tracking-[0.35em] uppercase mt-3 sm:mt-6 text-violet-400">
              Full Stack Developer (MERN)
            </h2>

            <p className={`hidden sm:block ${theme.textSecondary} max-w-md mt-4 text-sm md:text-base leading-relaxed`}>
              Motivated Full Stack Developer with expertise in the MERN stack, Flutter, and database management. Crafting high-performance web and mobile solutions with clean code[cite: 1].
            </p>

            <a
              href="#projects"
              className="group mt-6 sm:mt-8 inline-flex items-center gap-3 w-fit px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-semibold tracking-[0.15em] uppercase shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all hover:scale-105"
            >
              Explore work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          {/* SCROLL HINTS */}
          <motion.div
            className={`hidden md:flex absolute right-10 bottom-14 flex-col items-center gap-3 ${theme.textMuted} text-[11px] tracking-[0.2em] z-40`}
            style={{ opacity: hintOpacity }}
          >
            <span style={{ writingMode: "vertical-rl" }}>SCROLL DOWN</span>
            <span className={`w-px h-10 ${isDarkMode ? "bg-white/20" : "bg-slate-300"}`} />
          </motion.div>

          <motion.div
            className={`absolute left-1/2 -translate-x-1/2 bottom-8 z-40 h-10 w-10 rounded-full border ${
              isDarkMode ? "border-white/20 bg-white/5" : "border-slate-300 bg-white"
            } backdrop-blur-md flex items-center justify-center`}
            style={{ opacity: hintOpacity }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            ↓
          </motion.div>
        </div>
      </section>

      {/* ---------- SKILLS SECTION ---------- */}
      <section id="skills" className={`relative z-20 py-28 px-6 md:px-14 border-t ${theme.border} ${theme.bg}`}>
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="text-violet-400 text-xs tracking-[0.3em] uppercase block mb-3 font-mono font-bold">
            // Technical Stack
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-14">
            Core Skills & Tools[cite: 1]
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`border ${theme.border} rounded-2xl p-7 ${theme.cardBg} hover:border-violet-500/50 transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold group-hover:text-violet-400 transition-colors">
                    {skillGroup.category}
                  </h3>
                  <span className="text-2xl">{skillGroup.icon}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className={`text-xs border px-3 py-1.5 rounded-lg ${theme.chipBg} transition-all font-medium cursor-default`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---------- PROJECTS SECTION ---------- */}
      <section id="projects" className={`relative z-20 py-28 px-6 md:px-14 border-t ${theme.border} ${theme.bg}`}>
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="text-fuchsia-400 text-xs tracking-[0.3em] uppercase block mb-3 font-mono font-bold">
            // Portfolio
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-14">
            Featured Projects[cite: 1]
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                onClick={() => setActiveProject(project)}
                className={`border ${theme.border} rounded-2xl p-7 ${theme.cardBg} flex flex-col justify-between hover:border-fuchsia-500/50 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-xl group-hover:bg-fuchsia-500/20 transition-all" />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] tracking-wider text-violet-400 uppercase font-mono font-semibold">
                      {project.stack}
                    </span>
                    {project.live && (
                      <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                        ● Live App
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mt-1 mb-3 group-hover:text-fuchsia-400 transition-colors flex items-center justify-between">
                    {project.title}
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
                  </h3>
                  <p className={`text-sm ${theme.textSecondary} leading-relaxed mb-6`}>
                    {project.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-violet-400 font-semibold group-hover:underline">View details</span>
                  <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-emerald-500/20 transition-colors text-sm"
                        title="Live Demo"
                      >
                        🌐 ↗
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-white/10 transition-colors text-sm"
                      title="GitHub Repository"
                    >
                      🐙 ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---------- PROJECT DETAILS MODAL ---------- */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-lg w-full border ${theme.border} ${theme.cardBg} rounded-3xl p-8 relative shadow-2xl`}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs hover:bg-white/10 transition-colors"
              >
                ✕
              </button>

              <span className="text-xs text-violet-400 font-mono font-bold uppercase">{activeProject.stack}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">{activeProject.title}</h3>
              <p className={`${theme.textSecondary} text-sm mb-6 leading-relaxed`}>{activeProject.description}</p>

              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-fuchsia-400">Key Highlights</h4>
              <ul className="space-y-2 mb-8">
                {activeProject.features.map((feat, idx) => (
                  <li key={idx} className="text-xs flex items-center gap-2">
                    <span className="text-violet-400">✦</span>
                    <span className={theme.textSecondary}>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-widest text-center block transition-colors shadow-lg shadow-emerald-600/20"
                  >
                    Open Live App 🌐 ↗
                  </a>
                )}
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs uppercase tracking-widest text-center block transition-colors shadow-lg shadow-violet-600/20"
                >
                  GitHub Repository 🐙 ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- CONTACT & FOOTER SECTION ---------- */}
      <footer id="contact" className={`relative z-20 py-24 px-6 md:px-14 border-t ${theme.border} ${theme.bg}`}>
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <span className="text-orange-400 text-xs tracking-[0.3em] uppercase block mb-2 font-mono font-bold">
              // Let's Connect
            </span>
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className={`${theme.textSecondary} text-sm max-w-md`}>
              Based in Karachi, Pakistan[cite: 1]. Available for freelance opportunities and full-time engineering roles.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col gap-4 text-sm w-full md:w-auto">
            <a
              href="mailto:yasirudrees607@gmail.com"
              className={`flex items-center gap-3 p-4 rounded-xl border ${theme.border} ${theme.cardBg} hover:border-violet-500 transition-all group`}
            >
              <span className="text-xl">✉️</span>
              <div>
                <span className={`text-[10px] uppercase tracking-wider block ${theme.textMuted}`}>Email</span>
                <span className="font-semibold group-hover:text-violet-400 transition-colors">yasirudrees607@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:03343447066"
              className={`flex items-center gap-3 p-4 rounded-xl border ${theme.border} ${theme.cardBg} hover:border-violet-500 transition-all group`}
            >
              <span className="text-xl">📞</span>
              <div>
                <span className={`text-[10px] uppercase tracking-wider block ${theme.textMuted}`}>Phone</span>
                <span className="font-semibold group-hover:text-violet-400 transition-colors">03343447066</span>
              </div>
            </a>

            <div className="flex gap-4 mt-2">
              <a
                href="https://linkedin.com/in/yasir-idrees-89767924b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center rounded-xl border border-white/10 text-xs font-semibold tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/yasirkhan5476"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center rounded-xl border border-white/10 text-xs font-semibold tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </motion.div>

        <div className={`max-w-6xl mx-auto border-t ${theme.border} mt-20 pt-8 flex flex-col sm:flex-row justify-between text-xs ${theme.textMuted} gap-4`}>
          <span>© {new Date().getFullYear()} Yasir Idrees Khan. All rights reserved.</span>
          <span>BSSE Student @ SZABIST[cite: 1]</span>
        </div>
      </footer>
    </div>
  );
}

export default Hero;