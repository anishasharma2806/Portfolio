import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProject from "./components/FeaturedProject"
import ProjectCard from "./components/ProjectCard"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import projects from "./data/projects"
import Education from "./components/Education"
import { useEffect, useState } from "react"

import VideoModal from "./components/VideoModal"

export default function App() {

  const featured = projects.filter(p => p.type === "client")
  const others = projects.filter(p => p.type !== "client")
  const [videoSrc, setVideoSrc] = useState(null)


   useEffect(() => {
    const els = document.querySelectorAll(".reveal")

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("show")
        }
      })
    }, { threshold: 0.2 })

    els.forEach(el => io.observe(el))

    return () => io.disconnect()
  }, [])
  

 

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      
      <Timeline />

      <section id="projects" className="section">
  <h2>Featured Projects</h2>
  <div className="featured">
    {featured.map(p =>
  <FeaturedProject
    key={p.title}
    project={p}
    onDemo={setVideoSrc}
  />
)}

  </div>
</section>

<section className="section">
  <h2>Other Projects</h2>
  <div className="grid">
    {others.map(p =>
  <ProjectCard
    key={p.title}
    project={p}
    onDemo={setVideoSrc}
  />
)}

  </div>
</section>


      <Education />
      <Contact />
      <Footer />
      <VideoModal src={videoSrc} onClose={() => setVideoSrc(null)} />
    </>
    
  )
}
