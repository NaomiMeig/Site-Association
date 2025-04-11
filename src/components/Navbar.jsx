import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo de l’association */}
        <div className="flex items-center space-x-2 h-9">
          <img src="/aqj.png" alt="Logo" className="h-30 w-auto" />
        </div>

        {/* Bouton burger menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Liens de navigation */}
        <div className={`md:flex space-x-6 h-5 display-flexjustify-center text-center ${isOpen ? 'block mt-4 md:mt-0 ' : 'hidden'} md:block`}>
          <Link to="/" className="block text-gray-700 hover:text-cyan-300 border-b-cyan-300 bb-10px">Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-cyan-300 ">About</Link>
          <Link to="/events" className="block text-gray-700 hover:text-cyan-300 ">Events</Link>
          <Link to="/gallery" className="block text-gray-700 hover:text-cyan-300 ">Gallery</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-cyan-300 ">Contact Us</Link>
          <Link to="/blog" className="block text-gray-700 hover:text-cyan-300  ">Blog</Link>
          
        </div>
        <div className="">
        <button className='bg-cyan-300 text-white p-4 pl-10 pr-10 rounded-2xl'>Get started</button>
        </div>
      </div>
    </nav>
  )
}
