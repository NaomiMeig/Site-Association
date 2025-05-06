import { useEffect, useState } from 'react';
import '../styles/Cadrant.css';

function Cadrant({ events }) {
  const [timeLeft, setTimeLeft] = useState({});
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    const now = new Date();
    const upcomingEvents = events
      .filter(event => new Date(event.date) > now)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (upcomingEvents.length > 0) {
      setNextEvent(upcomingEvents[0]);
    }
  }, [events]);

  useEffect(() => {
    if (!nextEvent) return;

    const interval = setInterval(() => {
      const now = new Date();
      const eventDate = new Date(nextEvent.date);
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [nextEvent]);

  return (
    <div className="first-cadrant">
      {/* Image */}
      <section className="second-cadrant">
        <img src="src/assets/img3.jpeg" alt="image3" />
      </section>

      {/* Texte et compte à rebours */}
      <section className="third-cadrant">
        {timeLeft.days !== undefined ? (
          <div className="countdown">
            <div><p>{timeLeft.days}</p><span>Jours</span></div>
            <div><p>{timeLeft.hours}</p><span>Heures</span></div>
            <div><p>{timeLeft.minutes}</p><span>Minutes</span></div>
            <div><p>{timeLeft.seconds}</p><span>Secondes</span></div>
          </div>
        ) : (
          <p className="event-started">L'événement a commencé !</p>
        )}

        {nextEvent && (
          <p className="cadrant-description">
            Prochain événement : <strong>{nextEvent.title}</strong><br />
            {nextEvent.description}
          </p>
        )}
      </section>
    </div>
  );
}

export default Cadrant;





