"use client"

import { useState, useEffect } from "react"

import Navbar from "../sections/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Timeline from "../sections/Timeline"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"

import IntroLoader from "../sections/IntroLoader"
import ScrollProgress from "../sections/ScrollProgress"
import CustomCursor from "../sections/CustomCursor"

export default function Home() {

  const [loading, setLoading] = useState(true)

  // Prevent scroll while loader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [loading])

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* Intro Animation Loader */}
      {loading && (
        <IntroLoader onFinish={() => setLoading(false)} />
      )}

      {/* Main Website */}
      {!loading && (
        <>
          <ScrollProgress />
          <CustomCursor />

          <Navbar />

          <Hero />

          <About />

          <Timeline />

          <Skills />

          <Projects />

          <Contact />

          <Footer />
        </>
      )}

    </main>
  )
}
