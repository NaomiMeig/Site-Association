import { useEffect, useRef } from 'react';
import '../../styles/partenaire.css';

function Partenaire() {
  const logos = Array.from({ length: 22 }, (_, i) => i + 1);
  const trackRef = useRef(null);
  const requestRef = useRef();
  const speed = 0.5;
  const latency = 30;

  useEffect(() => {
    let progress = 0;
    let lastTime = null;

    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      
      if (deltaTime > latency) {
        progress += speed;
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${progress}px)`;
          if (progress > trackRef.current.scrollWidth / 2) {
            progress = 0;
          }
        }
        lastTime = timestamp;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="carroussel-immersif">
      <div className="carroussel-track" ref={trackRef}>
        {[...logos, ...logos].map((logoNum, index) => ( 
          <div key={index} className="logo-card">
            <div className="logo-wrapper">
              <img 
                src={`src/assets/logo${logoNum}.jpeg`} 
                alt={`Partner ${logoNum}`}
                className="logo-img"
                loading="lazy"
              />
              <div className="logo-hover-effect"></div>
              <div className="logo-reflection"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="carroussel-gradient-left"></div>
      <div className="carroussel-gradient-right"></div>
    </div>
  );
}

export default Partenaire; 