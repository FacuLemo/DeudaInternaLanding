import { FaFacebook, FaUsers, FaArrowRight } from 'react-icons/fa';
import './FacebookFeed.css';

const FacebookFeed = ({ pageUrl = "https://www.facebook.com/deudainterna" }) => {
  return (
    <div className="facebook-promo-container">
      <div className="fb-promo-content">
        <div className="fb-promo-icon">
          <FaFacebook />
        </div>

        <h4 className="fb-promo-title">Nuestra Página Oficial</h4>
        <p className="fb-promo-text">
          Unite a nuestra comunidad en Facebook para recibir noticias,
          actualizaciones en vivo y contenido exclusivo.
        </p>

        <div className="fb-promo-stats">
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <span>Comunidad Activa</span>
          </div>
        </div>
      </div>
      <a
        href={pageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fb-promo-btn"
      >
        Ir a Facebook <FaArrowRight />
      </a>
      <div className="fb-promo-footer">
        Fundación Deuda Interna
      </div>
    </div>
  );
};

export default FacebookFeed;
