import "./Contact.css";
import InstagramFeed from "../components/InstagramFeed";
import FacebookFeed from "../components/FacebookFeed";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h1>Contacto</h1>
      <p>
        Si quieres colaborar, donar o necesitas más información, no dudes en
        escribirnos.
      </p>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@deudainterna.org">info@deudainterna.org</a>
        </p>
        <p>
          <strong>Teléfono:</strong> +1 (234) 567-890
        </p>
        <p>
          <strong>Dirección:</strong> Calle Ficticia 123, Ciudad Ejemplo
        </p>
      </div>
      <div className="socials">
        <FacebookFeed />
        <InstagramFeed />
      </div>
    </section>
  );
};

export default Contact;
