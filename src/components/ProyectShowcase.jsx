import "./Showcase.css";
import MercadoPagoButton from "./ButtonMercadoPago";

const ProjectShowcase = ({ title, body, inverted = false }) => {
  return (
    <section id="showcase" className="showcase-section">
      {inverted && (
        <img src="/placeholder.jpg" alt="Alt" className="showcase-img" />
      )}
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <div>
          <MercadoPagoButton />
        </div>
      </div>
      {!inverted && (
        <img src="/placeholder.jpg" alt="Alt" className="showcase-img" />
      )}
    </section>
  );
};

export default ProjectShowcase;
