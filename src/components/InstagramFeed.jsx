import { useEffect, useState } from 'react';

const InstagramFeed = ({ postUrl = "https://www.instagram.com/somosfuerzainterna/" }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const processEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        setLoaded(true);
      }
    };

    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      script.onload = processEmbed;
      document.body.appendChild(script);
    } else {
      processEmbed();
      setTimeout(processEmbed, 200);
    }
  }, [postUrl]);

  return (
    <div className="instagram-widget-container">
      <div className="ig-no-scroll-window">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={postUrl}
          data-instgrm-version="14"
          style={{ background: '#FFF', border: 0, borderRadius: '12px', margin: '0', padding: 0, width: '100%' }}
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
