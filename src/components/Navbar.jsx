  import { useState } from "react"
  import { FaBars, FaTimes } from "react-icons/fa"

  export default function Navbar() {

    const [open, setOpen] = useState(false)

    const go = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }

    const resume = () => {
      const a = document.createElement("a")
      a.href = "/resume.pdf"
      a.download = "Anisha_Sharma_Resume.pdf"
      a.click()
    }

    return (
      <nav className="nav">

        {/* LEFT = normal nav links */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <button className="nav-btn" onClick={() => go("projects")}>Projects</button>
          <button className="nav-btn" onClick={() => go("skills")}>Skills</button>
          <button className="nav-btn" onClick={() => go("experience")}>Experience</button>
          <button className="nav-btn" onClick={() => go("about")}>About</button>
          <button className="nav-btn" onClick={() => go("contact")}>Contact</button>
        </div>

        {/* RIGHT SIDE ALWAYS VISIBLE */}
        <div className="nav-cta">
          <button className="btn" onClick={resume}>
            Resume
          </button>

          <div className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

      </nav>
    )
  }
