import education from "../data/education"

export default function Education(){

  return(
    <section id="education" className="section">

      <h2>Education</h2>

      <div className="timeline">
        {education.map((e,i)=>(
          <div key={i} className="timeline-item">
            <div className="timeline-dot"/>
            <div className="card">
              <h3>{e.year}</h3>
              <p>{e.title}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
