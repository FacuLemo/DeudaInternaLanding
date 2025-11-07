import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <video
        className="hero-video"
        src="/video/background-video.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-content">

        <img src='/full-logo.png' className='hero-logo'></img>
        <h1 className="hero-title">FUNDACIÓN DEUDA INTERNA</h1>
        <p className="hero-subtitle">Trabajando por un futuro más justo para todos.</p>
        <a href="#about" className="hero-button">Conoce más</a>
      </div>
    </section>
  );
};

export default Hero;
