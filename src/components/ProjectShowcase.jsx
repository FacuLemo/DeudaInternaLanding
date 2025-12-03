import "./ProjectShowcase.css";
import MercadoPagoButton from "./ButtonMercadoPago";

const ProjectShowcase = ({ title, body, inverted = false, image, imageAlt, embedYoutubeUrl }) => {
  if (image && embedYoutubeUrl) {
    console.warn("ProjectShowcase: No se pueden usar 'image' y 'embedYoutubeUrl' al mismo tiempo. Se usará la imagen.");
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
    } else if (embedYoutubeUrl) {
      return (
      <iframe 
      width="560" height="315" src={embedYoutubeUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
