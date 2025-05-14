import '../styles/Event.css';
import { events } from '../variables/events';
import Footer from '../components/footer/Footer';
import { useTranslation } from 'react-i18next';

function Events() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'fr';

  return (
    <div className="events-container">
      <h2 className="events-title">{lang === 'fr' ? "Nos événements" : lang === 'en' ? "Our Events" : "فعالياتنا"}</h2>
      <p className="events-subtitle">{lang === 'fr' ? "Découvrez nos prochains événements" : lang === 'en' ? "Discover our upcoming events" : "اكتشف فعالياتنا القادمة"}</p>
      
      <div className="events-list">
        {events.map((event) => {
          const translation = event.translations[lang];
          return (
            <div key={event.id} className="event-card">
              <div className="event-content">
                <div className="event-title">{translation.title}</div>
                <div className="event-date">{new Date(event.date).toLocaleDateString(lang)}</div>
                <div className="event-description">{translation.description}</div>
              </div>
              <img 
                src={event.img} 
                alt={`${translation.title}`} 
                className="event-image"
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Events;

