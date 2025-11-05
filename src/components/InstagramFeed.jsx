import React from 'react';

const InstagramFeed = () => {
  return (
    <section id="instagram" className="section instagram-section">
      <h2>Síguenos en Instagram</h2>
      <p>Entérate de nuestras últimas actividades y noticias.</p>

      <div className="instagram-widget-container">
        <div className="placeholder">
          <p>El widget de Instagram se mostrará aquí.</p>
          <p>
            Genera tu código en servicios como
            <a href="https://elfsight.com" target="_blank" rel="noopener noreferrer"> Elfsight </a>
            o
            <a href="https://lightwidget.com" target="_blank" rel="noopener noreferrer"> Lightwidget</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
