import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contacto</h2>
      <p>Si quieres colaborar, donar o necesitas más información, no dudes en escribirnos.</p>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:info@deudainterna.org">info@deudainterna.org</a></p>
        <p><strong>Teléfono:</strong> +1 (234) 567-890</p>
        <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad Ejemplo</p>
      </div>
    </section>
  );
};

export default Contact;
