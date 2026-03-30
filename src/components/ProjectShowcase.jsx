import "./ProjectShowcase.css";
import MercadoPagoButton from "./ButtonMercadoPago";

const ProjectShowcase = ({ title, body, inverted = false, image, imageAlt, embedYoutubeUrl }) => {

  const renderMedia = () => {
    const mediaClass = "showcase-media-content";
    if (image) {
      return (
        <img
          src={`./${image}`}
          alt={imageAlt || title}
          className={mediaClass}
        />
      );
    }
    if (embedYoutubeUrl) {
      return (
        <div className="video-responsive">
          <iframe
            src={embedYoutubeUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
    return null;
  };

  return (
    <section className={`showcase-section ${inverted ? "inverted" : ""}`}>
      <div className="showcase-container">
        <div className="showcase-media-wrapper">
          {renderMedia()}
        </div>

        <div className="showcase-content">
          <span className="showcase-badge">Proyecto</span>
          <h2 className="showcase-title">{title}</h2>
          <div className="showcase-text-container">
            <p className="showcase-body">{body}</p>
          </div>
          <div className="showcase-actions">
            <MercadoPagoButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
