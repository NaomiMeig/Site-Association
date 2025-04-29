import '../styles/Event.css'
import { events } from '../variables/events';


function Events() {
  

  return (
    <div className="events-container">
      <h2 className="events-title">Nos événements</h2>
      <p className="events-subtitle">Découvrez nos prochains événements</p>
      
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-content">
              <div className="event-date">{event.date}</div>
              <div className="event-description">{event.description}</div>
            </div>
            <img 
              src={event.img} 
              alt={`Événement du ${event.date}`} 
              className="event-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events