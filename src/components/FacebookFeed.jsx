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
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v24.0';
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
    <section style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom:20,}}>
      {!loaded && <FacebookSkeleton />}
      <div
        className="fb-page"
        data-href={pageUrl}
        data-tabs="timeline"
        data-width="540"
        data-small-header="false"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="true"
        style={{ display: loaded ? 'block' : 'none' }}
      >
        <blockquote
          cite={pageUrl}
          className="fb-xfbml-parse-ignore"
        >
          <a href={pageUrl}>Facebook Page</a>
        </blockquote>
      </div>
    </section>
  );
};

const FacebookSkeleton = () => {
  return (
    <div
      style={{
        width: 500,
        maxWidth: '90%',
       
        background: '#FFF',
        borderRadius: 8,
        boxShadow: '0 1px 8px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            background: '#EEE',
            borderRadius: '50%',
           
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            style={{
              height: 12,
              background: '#EEE',
              borderRadius: 4,
              width: '40%',
              marginBottom: 6,
            }}
          />
          <div
            style={{
              height: 12,
              background: '#EEE',
              borderRadius: 4,
              width: '25%',
            }}
          />
        </div>
      </div>

      <div
        style={{
          width: '100%',
          height: 250,
          background: '#EEE',
          borderRadius: 8,
        }}
      />
    </div>
  );
};

export default FacebookFeed;
