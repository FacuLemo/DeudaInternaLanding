import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="about-subtitle">Quiénes Somos</span>
          <h2 className="about-main-title">Comprometidos con el Cambio</h2>
          <div className="about-divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h3>Nuestra Misión</h3>
            <p>
              Trabajar por el desarrollo integral de comunidades en situación de vulnerabilidad,
              promoviendo el acceso a recursos esenciales como el agua potable, la salud y la educación.
              Buscamos fortalecer la autonomía, dignidad y bienestar a través de proyectos sostenibles.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">👁️</div>
            <h3>Nuestra Visión</h3>
            <p>
              Construir una sociedad más justa y equitativa, donde todas las comunidades accedan a
              recursos básicos para vivir con dignidad. Aspiramos a ser referentes en impacto social,
              impulsando la inclusión y la mejora continua en las poblaciones más necesitadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
