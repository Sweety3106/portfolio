"use client"

import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6"
    >

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Hi, I’m <span className="text-purple-500">Sweety</span>
      </motion.h1>

      {/* Typewriter Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-xl md:text-2xl text-gray-300"
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "MERN Stack Developer",
            "Next.js Developer",
            "Problem Solver"
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </motion.p>

      {/* Short Professional Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6 max-w-xl text-center text-gray-400 leading-relaxed"
      >
        I build scalable, responsive web applications by combining strong frontend
        UI with efficient backend systems. Focused on clean code, performance, and
        real-world problem solving.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >

        {/* View Projects */}
        <button
          onClick={() => {
            const section = document.getElementById("projects")
            section?.scrollIntoView({ behavior: "smooth" })
          }}
          className="px-7 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition font-medium"
        >
          View Projects
        </button>

        {/* Resume Download */}
        <a
          href="/resume.pdf"
          download
          className="px-7 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition font-medium text-center"
        >
          Download Resume
        </a>

      </motion.div>

    </section>
  )
}
