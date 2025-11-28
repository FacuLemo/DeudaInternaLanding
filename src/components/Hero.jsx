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
        <h1 className="hero-title">20 AÑOS JUNTOS</h1>
        <p className="hero-subtitle">Somos ONG sin fines de lucro que trabaja junto a Pueblos Originarios de la Argentina.</p>
        <a href="#about" className="hero-button">Conoce más</a>
      </div>
    </section>
  );
};

export default Hero;
