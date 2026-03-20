import { useEffect, useState } from 'react';

const FacebookFeed = ({ pageUrl = "https://www.facebook.com/deudainterna" }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const existing = document.getElementById('facebook-jssdk');
    const initParse = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
        setLoaded(true);
      }
    };

    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v24.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.id = 'facebook-jssdk';
      script.onload = initParse;
      document.body.appendChild(script);
    } else {
      initParse();
    }
  }, [pageUrl]);

  return (
    <div className="facebook-widget-container">
      {!loaded && <FacebookSkeleton />}
      <div className="fb-no-scroll-window">
        <div
          className="fb-page"
          data-href={pageUrl}
          data-tabs="timeline"
          data-width="500"
          data-height="700"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="false"
          style={{ display: loaded ? 'block' : 'none' }}
        >
          <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
            <a href={pageUrl}>Facebook</a>
          </blockquote>
        </div>
      </div>
      {loaded && (
        <a href={pageUrl} target="_blank" rel="noopener noreferrer" className="fb-view-more-btn">
          Ver más en Facebook
        </a>
      )}
    </div>
  );
};

const FacebookSkeleton = () => (
  <div className="fb-skeleton">
    <div className="fb-skeleton-header">
      <div className="fb-skeleton-avatar" />
      <div className="fb-skeleton-lines">
        <div className="line-long" />
        <div className="line-short" />
      </div>
    </div>
    <div className="fb-skeleton-body" />
  </div>
);

export default FacebookFeed;
