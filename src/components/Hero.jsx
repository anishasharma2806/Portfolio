import { motion } from "framer-motion"

export default function Hero() {

  const go = () =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })

  return (
    <section className="hero">

      {/* NAME */}
      <h1 className="hero-name">Anisha Sharma</h1>

      {/* ROLE */}
      <h2 className="hero-role">Frontend Developer</h2>

      <p className="hero-tagline">
  Building modern, responsive and scalable web applications with React.
</p>


      {/* BIG ANIMATED CTA */}
      <motion.button
        className="btn hero-btn"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        onClick={go}
      >
        Get In Touch
      </motion.button>

    </section>
  )
}
