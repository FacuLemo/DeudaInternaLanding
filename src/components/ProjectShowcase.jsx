import "./ProjectShowcase.css";
import MercadoPagoButton from "./ButtonMercadoPago";

const ProjectShowcase = ({ title, body, inverted = false, image, imageAlt, video }) => {
  if (image && video) {
    console.warn("ProjectShowcase: No se pueden usar 'image' y 'video' al mismo tiempo. Se usará la imagen.");
  }

  const renderMedia = () => {
    if (image) {
      return (
        <img
          src={"/" + image}
          alt={imageAlt || "Showcase image"}
          className="showcase-media"
        />
      );
    } else if (video) {
      return (
        <video
          className="showcase-media"
          controls
          preload="metadata"
          poster={"/" + video}
        >
          <source src={"/" + video} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      );
    } else {
      return (
        <img
          src={"/" + image}
          alt={imageAlt || "Showcase image"}
          className="showcase-media"
        />
      );
    }
  };

  return (
    <section id="showcase" className="showcase-section">
      {inverted && (
        <div className="showcase-media-container">
          {renderMedia()}
        </div>
      )}

      <div className="showcase-content">
        <h2 className="showcase-title">{title}</h2>
        <p className="showcase-body">{body}</p>
        <div className="showcase-button-container">
          <MercadoPagoButton />
        </div>
      </div>

      {!inverted && (
        <div className="showcase-media-container">
          {renderMedia()}
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;
