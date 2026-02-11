import {
  FaReact, FaJs, FaBootstrap,
  FaGitAlt, FaFigma, FaRobot
} from "react-icons/fa"

import {
  SiTailwindcss, SiVite, SiOpenai
} from "react-icons/si"
import { SiTypescript } from "react-icons/si"


import { FaSearch } from "react-icons/fa"

export default function Skills(){

  const skills = [
    {name:"JavaScript", icon:<FaJs/>},
    {name:"React", icon:<FaReact/>},
    {name:"TypeScript", icon:<SiTypescript/>},
    
    {name:"Tailwind CSS", icon:<SiTailwindcss/>},
    {name:"Bootstrap", icon:<FaBootstrap/>},

    {name:"Git/GitHub", icon:<FaGitAlt/>},
    {name:"Vite", icon:<SiVite/>},
    {name:"Figma", icon:<FaFigma/>},

    {name:"SEO Optimization", icon:<FaSearch/>},
    {name:"ChatGPT Prompt Engineering", icon:<SiOpenai/>},
    {name:"AI-assisted Development", icon:<FaRobot/>}
  ]

  return(
    <section id="skills" className="section reveal">

      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map(s=>(
          <div key={s.name} className="skill card">
            {s.icon}
            <p>{s.name}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
