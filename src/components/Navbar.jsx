export default function Navbar() {

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const resume = () => {
    const a = document.createElement("a")
    a.href = "/resume.pdf"
    a.download = "resume.pdf"
    a.click()
  }

  return (
    <nav className="nav">

      <button className="nav-btn" onClick={()=>go("projects")}>Projects</button>
      <button className="nav-btn" onClick={()=>go("skills")}>Skills</button>
      <button className="nav-btn" onClick={()=>go("experience")}>Experience</button>
      <button className="nav-btn" onClick={()=>go("education")}>Education</button>
      <button className="nav-btn" onClick={()=>go("about")}>About</button>
      <button className="nav-btn" onClick={()=>go("contact")}>Contact</button>

      <button className="btn" onClick={resume}>Resume</button>

    </nav>
  )
}
