import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const images = [
  '/img1.jpeg',
  '/img2.jpeg',
  '/img3.jpeg',
  '/img4.jpeg',
]

export default function Home() {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    fade: true,
  }

  const eventDate = new Date("2025-06-01T10:00:00")
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const distance = eventDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({})
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* SLIDER */}
      <div className="relative h-[100vh]">
        <Slider {...settings} className="h-full">
          {images.map((img, i) => (
            <div key={i}>
              <div
                className="h-[100vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="bg-black/50 h-full flex flex-col items-center justify-center text-white text-center">
                  <h1 className="text-4xl md:text-4xl font-bold">Association Qualification des Jeunes</h1>
                  <h2 className="text-6xl md:text-6xl font-bold">AQJ</h2>
                  <h3 className="text-3xl md:text-3xl font-bold">"Une Jeunesse socio-active"</h3>
                  <p className="mt-4 text-lg">Notre association, nos valeurs, notre engagement.</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

       
      </div>
    </>
  )
}
