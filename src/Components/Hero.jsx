import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS_DATA = [
  {
    category: "Frontend",
    icon: "⚛️",
    items: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "PHP", "REST APIs"],
  },
  {
    category: "Mobile",
    icon: "📱",
    items: ["Flutter", "Dart"],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Core & Tools",
    icon: "🛠️",
    items: ["DSA in Java", "Git / GitHub", "Agile Workflows"],
  },
];

const PROJECTS_DATA = [
  {
    title: "Hotel Management System",
    stack: "React.js • Express.js • MongoDB",
    description:
      "Full-stack web application built with the MERN stack for managing hotel operations and real-time bookings.",
    github:
      "https://github.com/yasirkhan5476/Hotel-mangement-system",
    live: "",
    features: [
      "Hotel room management",
      "Real-time booking management",
      "MongoDB database integration",
      "REST API integration",
      "Responsive user interface",
    ],
  },
  {
    title: "Salon Management System",
    stack: "PHP • MySQL",
    description:
      "Web-based system that allows users to book appointments based on their preferences and availability.",
    github:
      "https://github.com/yasirkhan5476/ecommerce-website",
    live: "",
    features: [
      "Appointment booking",
      "Customer management",
      "Availability management",
      "MySQL database integration",
      "User-friendly interface",
    ],
  },
  {
    title: "Laptop Selling Store",
    stack: "Flutter • Firebase",
    description:
      "E-commerce mobile app for selling laptops, featuring user authentication, product management, and secure checkout.",
    github:
      "https://github.com/yasirkhan5476/ecommerce-app",
    live: "",
    features: [
      "User authentication",
      "Product management",
      "Firebase integration",
      "Laptop product listings",
      "E-commerce functionality",
    ],
  },
];

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // =========================================================
  // HERO ANIMATIONS
  // =========================================================

  const imgScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const imgX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", "-28vw"]
  );

  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vh", "-2vh"]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [0, 1, 1]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 0.7],
    [50, 0]
  );

  const textX = useTransform(
    scrollYProgress,
    [0, 0.7],
    [-30, 0]
  );

  const ghostOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.5, 0.5]
  );

  const hintOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, 0]
  );

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // =========================================================
  // THEME
  // =========================================================

  const themeClasses = {
    bg: isDarkMode
      ? "bg-black"
      : "bg-slate-50",

    textPrimary: isDarkMode
      ? "text-white"
      : "text-slate-900",

    textSecondary: isDarkMode
      ? "text-white/60"
      : "text-slate-600",

    textMuted: isDarkMode
      ? "text-white/40"
      : "text-slate-400",

    border: isDarkMode
      ? "border-white/10"
      : "border-slate-200",

    cardBg: isDarkMode
      ? "bg-white/[0.02]"
      : "bg-white shadow-sm",

    chipBg: isDarkMode
      ? "bg-white/10 border-white/10 text-white/80"
      : "bg-slate-100 border-slate-200 text-slate-800",

    navLink: isDarkMode
      ? "text-white/80 hover:text-white"
      : "text-slate-600 hover:text-slate-900",

    heroOverlay: isDarkMode
      ? "from-black via-transparent to-transparent"
      : "from-slate-50 via-transparent to-transparent",
  };

  return (
    <div
      className={`${themeClasses.bg} ${themeClasses.textPrimary} transition-colors duration-500 overflow-x-hidden`}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={wrapperRef}
        id="about"
        className={`relative ${themeClasses.bg}`}
        style={{ height: "300vh" }}
      >

        <div className="fixed top-0 left-0 h-screen w-full overflow-hidden z-10">

          {/* =================================================
              NAVBAR
          ================================================= */}

          <nav
            className="
              absolute
              top-0
              left-0
              right-0
              z-50
              flex
              items-center
              justify-between
              px-5
              sm:px-8
              md:px-14
              py-5
              sm:py-6
            "
          >

            <span className="font-extrabold text-lg sm:text-xl tracking-wide">
              YIK.
            </span>

            {/* DESKTOP NAV */}

            <ul className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`${themeClasses.navLink} text-xs font-medium tracking-[0.2em] uppercase transition-colors`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* RIGHT SIDE */}

            <div className="flex items-center gap-2 sm:gap-4">

              {/* THEME */}

              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`
                  flex
                  items-center
                  gap-1.5
                  sm:gap-2
                  border
                  ${themeClasses.border}
                  rounded-full
                  px-3
                  sm:px-4
                  py-2
                  text-[9px]
                  sm:text-xs
                  font-medium
                  tracking-[0.1em]
                  uppercase
                  transition-colors
                `}
              >
                {isDarkMode ? "☀️ Light" : "🌙 Dark"}
              </button>

              {/* RESUME */}

              <a
                href="/resume.pdf"
                download="Yasir_Idrees_Khan_Resume.pdf"
                className={`
                  hidden
                  sm:inline-flex
                  items-center
                  gap-2
                  border
                  ${
                    isDarkMode
                      ? "border-white/30 hover:bg-white hover:text-black"
                      : "border-slate-300 hover:bg-slate-900 hover:text-white"
                  }
                  rounded-full
                  px-5
                  py-2
                  text-xs
                  font-medium
                  tracking-[0.15em]
                  uppercase
                  transition-colors
                `}
              >
                Resume
                <span aria-hidden>↗</span>
              </a>

            </div>
          </nav>

          {/* =================================================
              LEFT INDEX
          ================================================= */}

          <div
            className={`
              hidden
              md:flex
              absolute
              left-10
              top-1/2
              -translate-y-1/2
              flex-col
              items-center
              gap-3
              ${themeClasses.textMuted}
              text-[11px]
              tracking-[0.2em]
              z-40
            `}
          >
            <span>01</span>

            <span
              className={`
                w-px
                h-16
                ${
                  isDarkMode
                    ? "bg-white/25"
                    : "bg-slate-300"
                }
              `}
            />

            <span>04</span>
          </div>

          {/* =================================================
              IMAGE
          ================================================= */}

          <motion.div
            className="
              absolute
              inset-0
              flex
              items-start
              justify-center
              pt-[70px]
              sm:items-center
              sm:pt-0
            "
            style={{
              x: imgX,
              y: imgY,
              scale: imgScale,
            }}
          >

            <img
              src="/yasir2.png"
              alt="Yasir Idrees Khan"
              className="
                h-[52vh]
                max-h-[450px]
                w-auto
                object-contain
                object-top
                select-none
                pointer-events-none

                sm:h-[80vh]
                sm:max-h-none

                md:h-[100vh]
                lg:h-[100vh]
              "
              draggable={false}
            />

            <div
              className={`
                absolute
                inset-0
                bg-gradient-to-t
                ${themeClasses.heroOverlay}
              `}
            />

          </motion.div>

          {/* =================================================
              TEXT BLOCK

              MOBILE:
              Text appears at bottom.

              DESKTOP:
              Text appears on right side.
          ================================================= */}

          <motion.div
            className="
              absolute
              inset-0
              z-30

              flex
              flex-col
              justify-end

              pl-5
              pr-5
              pb-[105px]

              sm:justify-center
              sm:pl-[34vw]
              sm:pr-8
              sm:pb-0

              md:pl-[30vw]
              md:pr-16

              lg:pl-[30vw]
            "
            style={{
              opacity: textOpacity,
              x: textX,
              y: textY,
            }}
          >

            {/* SMALL INTRO */}

            <span
              className={`
                ${themeClasses.textSecondary}
                text-[9px]
                sm:text-sm
                tracking-[0.25em]
                sm:tracking-[0.35em]
                uppercase
                mb-2
                sm:mb-3
              `}
            >
              Hi, I'm
            </span>

            {/* NAME */}

            <h1
              className="
                relative
                w-full
                max-w-full
                font-black
                uppercase
                tracking-tight
                leading-[0.95]

                text-[2rem]

                sm:text-5xl
                md:text-5xl
                lg:text-8xl
              "
            >

              {/* GHOST */}

              <motion.span
                className={`
                  absolute
                  -left-1
                  top-1
                  w-full
                  ${
                    isDarkMode
                      ? "text-white"
                      : "text-slate-300"
                  }
                  select-none
                `}
                style={{
                  opacity: ghostOpacity,
                }}
                aria-hidden="true"
              >
                YASIR
                <br className="md:hidden" />
                {" "}IDREES KHAN
              </motion.span>

              {/* MAIN NAME */}

              <span
                className="
                  relative
                  block
                  w-full
                  bg-gradient-to-r
                  from-violet-600
                  via-fuchsia-600
                  to-orange-500
                  bg-clip-text
                  text-transparent
                "
              >
                YASIR
                <br className="md:hidden" />
                {" "}IDREES KHAN
              </span>

            </h1>

            {/* JOB TITLE */}

            <h2
              className="
                text-[9px]
                sm:text-base
                md:text-xl

                tracking-[0.15em]
                sm:tracking-[0.35em]

                uppercase

                mt-3
                sm:mt-6

                max-w-full
              "
            >
              Full Stack Developer (MERN)
            </h2>

            {/* DESCRIPTION */}

            <p
              className={`
                hidden
                sm:block
                ${themeClasses.textSecondary}
                max-w-md
                mt-4
                text-sm
                md:text-base
                leading-relaxed
              `}
            >
              Motivated Full Stack Developer with expertise in the MERN
              stack, Flutter, and database management. Building scalable
              web and mobile applications with clean, efficient code.
            </p>

            {/* EXPLORE */}

            <a
              href="#projects"
              className={`
                group
                mt-4
                sm:mt-8

                inline-flex
                items-center
                gap-2
                w-fit

                text-[9px]
                sm:text-xs

                font-medium

                tracking-[0.15em]
                sm:tracking-[0.2em]

                uppercase

                border-b

                ${
                  isDarkMode
                    ? "border-white/40 hover:border-white"
                    : "border-slate-400 hover:border-slate-900"
                }

                pb-1
                transition-colors
              `}
            >
              Explore my work

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

          </motion.div>

          {/* =================================================
              SCROLL HINT
          ================================================= */}

          <motion.div
            className={`
              hidden
              md:flex
              absolute
              right-10
              bottom-14
              flex-col
              items-center
              gap-3
              ${themeClasses.textMuted}
              text-[11px]
              tracking-[0.2em]
              z-40
            `}
            style={{
              opacity: hintOpacity,
            }}
          >

            <span style={{ writingMode: "vertical-rl" }}>
              SCROLL
            </span>

            <span
              className={`
                w-px
                h-10
                ${
                  isDarkMode
                    ? "bg-white/25"
                    : "bg-slate-300"
                }
              `}
            />

          </motion.div>

          {/* MOBILE SCROLL BUTTON */}

          <motion.div
            className={`
              absolute
              left-1/2
              -translate-x-1/2
              bottom-6
              sm:bottom-8

              z-40

              h-8
              w-8
              sm:h-9
              sm:w-9

              rounded-full
              border

              ${
                isDarkMode
                  ? "border-white/30"
                  : "border-slate-300"
              }

              flex
              items-center
              justify-center

              text-xs
            `}
            style={{
              opacity: hintOpacity,
            }}
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className={`
          relative
          z-20
          py-16
          sm:py-24
          px-5
          sm:px-6
          md:px-14

          border-t
          ${themeClasses.border}
          ${themeClasses.bg}
        `}
      >

        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          variants={staggerContainer}
        >

          <motion.span
            variants={fadeInUp}
            className="
              text-violet-500
              text-[10px]
              sm:text-xs
              tracking-[0.3em]
              uppercase
              block
              mb-3
              font-semibold
            "
          >
            Capabilities
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              uppercase
              tracking-tight
              mb-10
              sm:mb-12
            "
          >
            Technical Skills
          </motion.h2>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
              sm:gap-6
            "
          >

            {SKILLS_DATA.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className={`
                  border
                  ${themeClasses.border}
                  rounded-xl
                  p-5
                  sm:p-6
                  ${themeClasses.cardBg}
                  hover:border-violet-500/50
                  transition-colors
                  group
                `}
              >

                <div className="flex items-center justify-between mb-4">

                  <h3 className="text-base sm:text-lg font-semibold">
                    {skillGroup.category}
                  </h3>

                  <span className="text-lg sm:text-xl">
                    {skillGroup.icon}
                  </span>

                </div>

                <div className="flex flex-wrap gap-2">

                  {skillGroup.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className={`
                        text-[10px]
                        sm:text-xs
                        border
                        px-3
                        py-1.5
                        rounded-full
                        ${themeClasses.chipBg}
                        transition-colors
                        cursor-default
                      `}
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

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className={`
          relative
          z-20
          py-16
          sm:py-24
          px-5
          sm:px-6
          md:px-14

          border-t
          ${themeClasses.border}
          ${themeClasses.bg}
        `}
      >

        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          variants={staggerContainer}
        >

          <motion.span
            variants={fadeInUp}
            className="
              text-fuchsia-500
              text-[10px]
              sm:text-xs
              tracking-[0.3em]
              uppercase
              block
              mb-3
              font-semibold
            "
          >
            Portfolio
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              uppercase
              tracking-tight
              mb-10
              sm:mb-12
            "
          >
            Featured Work
          </motion.h2>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
              sm:gap-8
            "
          >

            {PROJECTS_DATA.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3,
                  },
                }}
                onClick={() => setActiveProject(project)}
                className={`
                  border
                  ${themeClasses.border}
                  rounded-xl
                  p-5
                  sm:p-7
                  ${themeClasses.cardBg}

                  flex
                  flex-col
                  justify-between

                  hover:border-fuchsia-500/50
                  transition-colors

                  cursor-pointer
                  group
                  relative
                  overflow-hidden
                `}
              >

                <div>

                  <div className="flex items-start justify-between gap-3 mb-2">

                    <span
                      className="
                        text-[9px]
                        sm:text-[11px]
                        tracking-wider
                        text-violet-500
                        uppercase
                        font-mono
                        font-semibold
                      "
                    >
                      {project.stack}
                    </span>

                    {project.live && (
                      <span className="text-[8px] sm:text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                        ● Live App
                      </span>
                    )}

                  </div>

                  <h3
                    className="
                      text-lg
                      sm:text-xl
                      font-bold
                      mt-1
                      mb-3
                      group-hover:text-fuchsia-500
                      transition-colors
                      flex
                      items-center
                      justify-between
                    "
                  >
                    {project.title}

                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      🔍
                    </span>
                  </h3>

                  <p
                    className={`
                      text-xs
                      sm:text-sm
                      ${themeClasses.textSecondary}
                      leading-relaxed
                      mb-6
                    `}
                  >
                    {project.description}
                  </p>

                </div>

                <div
                  className={`
                    flex
                    items-center
                    justify-between
                    gap-3
                    pt-4
                    border-t
                    ${
                      isDarkMode
                        ? "border-white/10"
                        : "border-slate-200"
                    }
                  `}
                  onClick={(e) => e.stopPropagation()}
                >

                  <button
                    onClick={() => setActiveProject(project)}
                    className="
                      text-[10px]
                      sm:text-xs
                      text-violet-400
                      font-semibold
                      hover:underline
                    "
                  >
                    View details
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      text-[9px]
                      sm:text-xs
                      uppercase
                      tracking-widest
                      border-b

                      ${
                        isDarkMode
                          ? "border-white/30 hover:border-white"
                          : "border-slate-300 hover:border-slate-900"
                      }

                      pb-0.5
                      transition-colors
                    `}
                  >
                    Repository ↗
                  </a>

                </div>

              </motion.div>
            ))}

          </div>
        </motion.div>
      </section>

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      <AnimatePresence>

        {activeProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setActiveProject(null)}
            className="
              fixed
              inset-0
              z-50
              bg-black/80
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
            "
          >

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 20,
              }}
              onClick={(e) => e.stopPropagation()}
              className={`
                max-w-lg
                w-full
                max-h-[90vh]
                overflow-y-auto

                border
                ${themeClasses.border}
                ${themeClasses.cardBg}

                rounded-2xl
                p-6
                sm:p-8

                relative
                shadow-2xl
              `}
            >

              <button
                onClick={() => setActiveProject(null)}
                className="
                  absolute
                  top-4
                  right-4
                  sm:top-5
                  sm:right-5

                  w-8
                  h-8

                  rounded-full
                  border
                  border-white/20

                  flex
                  items-center
                  justify-center

                  text-xs
                  hover:bg-white/10
                  transition-colors
                "
              >
                ✕
              </button>

              <span className="text-xs text-violet-400 font-mono font-bold uppercase">
                {activeProject.stack}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold mt-2 mb-4 pr-8">
                {activeProject.title}
              </h3>

              <p
                className={`
                  ${themeClasses.textSecondary}
                  text-xs
                  sm:text-sm
                  mb-6
                  leading-relaxed
                `}
              >
                {activeProject.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-fuchsia-400">
                Key Highlights
              </h4>

              <ul className="space-y-2 mb-8">

                {activeProject.features?.map((feat, idx) => (
                  <li
                    key={idx}
                    className="text-xs flex items-center gap-2"
                  >
                    <span className="text-violet-400">
                      ✦
                    </span>

                    <span className={themeClasses.textSecondary}>
                      {feat}
                    </span>
                  </li>
                ))}

              </ul>

              <div className="flex flex-col sm:flex-row gap-3">

                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      py-3
                      rounded-xl
                      bg-emerald-600
                      hover:bg-emerald-500
                      text-white
                      font-semibold
                      text-xs
                      uppercase
                      tracking-widest
                      text-center
                      transition-colors
                    "
                  >
                    Open Live App 🌐 ↗
                  </a>
                )}

                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    py-3
                    rounded-xl
                    bg-violet-600
                    hover:bg-violet-500
                    text-white
                    font-semibold
                    text-xs
                    uppercase
                    tracking-widest
                    text-center
                    transition-colors
                  "
                >
                  GitHub Repository 🐙 ↗
                </a>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <footer
        id="contact"
        className={`
          relative
          z-20
          py-16
          sm:py-20
          px-5
          sm:px-6
          md:px-14

          border-t
          ${themeClasses.border}
          ${themeClasses.bg}
        `}
      >

        <motion.div
          className="
            max-w-6xl
            mx-auto

            flex
            flex-col
            md:flex-row

            justify-between
            items-start
            md:items-center

            gap-10
          "
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={staggerContainer}
        >

          <motion.div variants={fadeInUp}>

            <span className="text-orange-500 text-[10px] sm:text-xs tracking-[0.3em] uppercase block mb-2 font-semibold">
              Get in Touch
            </span>

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                uppercase
                tracking-tight
                mb-4
              "
            >
              Let's Work Together
            </h2>

            <p
              className={`
                ${themeClasses.textSecondary}
                text-xs
                sm:text-sm
                max-w-md
              `}
            >
              Based in Karachi, Pakistan. Open to web & mobile
              development opportunities.
            </p>

          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-3 text-sm"
          >

            <a
              href="mailto:yasirudrees607@gmail.com"
              className="hover:text-violet-500 transition-colors font-medium"
            >
              ✉ yasirudrees607@gmail.com
            </a>

            <a
              href="tel:03343447066"
              className={`${themeClasses.textSecondary} hover:text-violet-500 transition-colors`}
            >
              📞 03343447066
            </a>

            <div className="flex gap-4 mt-2 text-xs tracking-widest uppercase">

              <a
                href="https://linkedin.com/in/yasir-idrees-89767924b"
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.textSecondary} hover:text-violet-500 transition-colors`}
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/yasirkhan5476"
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.textSecondary} hover:text-violet-500 transition-colors`}
              >
                GitHub ↗
              </a>

            </div>

          </motion.div>

        </motion.div>

        {/* FOOTER */}

        <div
          className={`
            max-w-6xl
            mx-auto

            border-t
            ${themeClasses.border}

            mt-12
            sm:mt-16

            pt-8

            flex
            flex-col
            sm:flex-row

            justify-between

            text-[10px]
            sm:text-xs

            ${themeClasses.textMuted}

            gap-4
          `}
        >

          <span>
            © {new Date().getFullYear()} Yasir Idrees.
            All rights reserved.
          </span>

          <span>
            BSSE Student @ SZABIST
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Hero;