export default function ContactForm(){
  return(
    <section id="contact" className="section">

      <h2 className="section-title">Get In Touch</h2>

      <form
        action="https://formsubmit.co/aneesha2806@gmail.com"
        method="POST"
        className="contact-card card"
      >

        <input name="name" placeholder="Your name" required />
        <input name="email" placeholder="Email address" required />
        <textarea name="message" rows="5" placeholder="Message"></textarea>

        <button className="btn big-btn">Send Message</button>

      </form>

    </section>
  )
}
