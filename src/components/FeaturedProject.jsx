import { useRef, useState } from "react"
import VideoModal from "./VideoModal"

export default function FeaturedProject({ project }) {

  const vidRef = useRef(null)
  const [open, setOpen] = useState(false)

  const play = () => vidRef.current?.play()
  const stop = () => {
    vidRef.current?.pause()
    if (vidRef.current) vidRef.current.currentTime = 0
  }

  return (
    <>
      <div
        className="card featured-card"
        onMouseEnter={play}
        onMouseLeave={stop}
      >

        <div className="preview-wrap">
          <img src={project.image} className="preview-img" />

          {project.video &&
            <video
              ref={vidRef}
              src={project.video}
              muted
              loop
              playsInline
              className="preview-video"
            />
          }
        </div>

        <div>
          <h2>{project.title}</h2>

          <div className="tech-row">
            {project.tech.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div className="actions">
            {project.live &&
              <a href={project.live} target="_blank">
                <button className="btn btn-small">Live</button>
              </a>
            }

            {project.video &&
              <button
                className="btn btn-small"
                onClick={() => setOpen(true)}
              >
                Demo
              </button>
            }
          </div>
        </div>
      </div>

      <VideoModal src={open ? project.video : null} onClose={() => setOpen(false)} />
    </>
  )
}
