import { useEffect, useState } from 'react';
import './InstagramFeed.css'

const InstagramFeed = ({ postUrl = "https://www.instagram.com/deudainterna.ar/" }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const injectScript = () => {
      if (!document.getElementById('instagram-embed-script')) {
        const script = document.createElement('script');
        script.id = 'instagram-embed-script';
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    const tryProcess = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
        setTimeout(() => setLoaded(true), 800);
        return true;
      }
      return false;
    };

    injectScript();

    const timer = setInterval(() => {
      if (tryProcess()) {
        clearInterval(timer);
      }
    }, 500);

    return () => clearInterval(timer);
  }, [postUrl]);

  return (
    <div className="instagram-widget-container">
      <div className="ig-no-scroll-window" style={{ position: 'relative', background: '#fff' }}>

        <div
          className={`fb-skeleton ${loaded ? 'skeleton-hidden' : ''}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            backgroundColor: '#1a1a1a',
            transition: 'opacity 0.6s ease-out',
            pointerEvents: loaded ? 'none' : 'auto'
          }}
        >
          <div className="fb-skeleton-header" style={{ padding: '20px' }}>
            <div className="fb-skeleton-avatar" />
            <div className="fb-skeleton-lines">
              <div className="line-long" />
              <div className="line-short" />
            </div>
          </div>
          <div className="fb-skeleton-body" style={{ margin: '0 20px', height: '300px' }} />
        </div>

        <blockquote
          className="instagram-media"
          data-instgrm-permalink={postUrl}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '12px',
            margin: '0',
            padding: 0,
            width: '100%',
            minHeight: '520px',
            display: 'block'
          }}
        >
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <a href={postUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>
              Cargando Instagram...
            </a>
          </div>
        </blockquote>
      </div>

      <a href={postUrl} target="_blank" rel="noopener noreferrer" className="ig-view-more-btn">
        Ver más en Instagram
      </a>
    </div>
  );
};

export default InstagramFeed;
