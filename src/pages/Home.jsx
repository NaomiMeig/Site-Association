import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Arrierre from '../components/Arrierre'
import Element2 from '../components/Element2'
import Compartiment from '../components/Compartiment/Compartiment'
import Stats from '../components/BarStats/Stats'
import Contact from './Contact'
import Footer from '../components/footer/Footer'
import Partenaire from '../components/Partner/Partenaire'


const images = [
  '/src/assets/img1.jpeg',
  '/src/assets/img2.jpeg',
  '/src/assets/img3.jpeg',
  '/src/assets/forum4.jpeg',
  '/src/assets/forum2.jpeg',
  '/src/assets/forum7.jpeg',
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
  
  const eventDate = new Date("2024-01-01T10:00:00")
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
                  <h2 className="text-6xl md:text-6xl font-bold text-cyan-300">AQJ</h2>
                  <h3 className="text-3xl md:text-3xl font-bold">"Une Jeunesse socio-active"</h3>
                  <p className="flex items-center justify-center mt-[50px] px-[150px] text-2xl font-bold leading-relaxed transition-all duration-500 
             scroll-ani-fade-in">L'AQJ, fondée le Samedi 25 Mai 2013; est une platforme née de la volontée de 
                    convergence des différents jeunes de la ville de Béni-Mellal, sur laquelle; on a 
                    pu développer une approche participative basée sur un travail rapproché, en assurant la 
                    mobilisation des multiples parties impliquées dans la gestion des affaires et des questions 
                    liées aux jeunes</p>
                    <button className='bg-cyan-300 text-white p-4 pl-10 pr-10 rounded-2xl hover:bg-blue-600 duration-500 mt-[50px] '>Read more</button>
                </div>
                
              </div>
            </div>
          ))}
        </Slider>
          
       <div><Arrierre /></div> <br />
       <div><Stats/></div>
        <div> <Element2 /></div>  
<br /><br /><br /><br />
        <h1 className='text-cyan-300 text-5xl font-black text-center w-full mb-8 '>NOS PARTENAIRES</h1>
        <div className="w-full">
          <Partenaire />
        </div>
        <br /><br /><br /><br />
        <div><Compartiment/> </div> 
        <div className="bg-gray-800 "><Contact/></div>
        <footer className='bg-black'> <Footer/></footer>
      </div>

    </>
  )
}
