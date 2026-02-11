import timeline from "../data/timeline"

export default function Timeline() {

  return (
    <section id="experience" className="section">

      <h2>Experience</h2>

      <div className="timeline">

        {timeline.map((t, i) => (
          <div key={i} className="timeline-item">

            <div className="timeline-dot" />

            <div className="card" style={{ padding: "28px" }}>
              <h3>{t.year}</h3>
              <p>{t.title}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}
