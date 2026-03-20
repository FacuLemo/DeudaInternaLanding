import "./Contact.css";
import InstagramFeed from "./InstagramFeed";
import FacebookFeed from "./FacebookFeed";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-info-column">
          <span className="contact-subtitle">Hablemos</span>
          <h2 className="contact-title">Ponte en Contacto</h2>
          <p className="contact-description">
            Si quieres colaborar, donar o necesitas más información sobre nuestros proyectos,
            estamos aquí para escucharte.
          </p>

          <div className="info-cards-container">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <label>Email</label>
                <a href="mailto:fundaciondeudainternaorg@gmail.com">fundaciondeudainternaorg@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <label>Teléfono</label>
                <span>+1 (234) 567-890</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <label>Ubicación</label>
                <span>Calle Ficticia 123, Ciudad Ejemplo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-social-column">
          <h3 className="social-header">Nuestra Comunidad</h3>
          <div className="feeds-wrapper">
            <InstagramFeed />
            <FacebookFeed />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
