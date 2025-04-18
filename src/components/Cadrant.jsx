import { useEffect, useState } from 'react'
import '../styles/Cadrant.css'

function Cadrant() {
  const [timeLeft, setTimeLeft] = useState({})
  const eventDate = new Date("2025-04-17T15:50:00")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const distance = eventDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance > 0) {
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        clearInterval(interval)
        setTimeLeft({})
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

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

        <p className="cadrant-description">
          Rejoignez-nous pour notre prochain événement : conférences, ateliers, débats et échanges
          avec les jeunes et les partenaires. Un moment unique pour renforcer nos valeurs associatives.
        </p>
      </section>
    </div>
  )
}

export default Cadrant;




