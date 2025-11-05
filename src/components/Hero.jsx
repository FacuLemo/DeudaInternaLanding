import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container">
      <video
        className="hero-video"
        src="/video/background-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-content">
        <h1 className="hero-title">DEUDA INTERNA</h1>
        <p className="hero-subtitle">Trabajando por un futuro más justo para todos.</p>
        <a href="#about" className="hero-button">Conoce más</a>
      </div>
    </section>
  );
};

export default Hero;
