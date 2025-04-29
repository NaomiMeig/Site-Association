import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import ActionsRealisees from './pages/ActionRealisees'


function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-roboto ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="ActionsRealisees" element={<ActionsRealisees/>}/>
          {/* <Route path="/ActionsRealisee" element={<ActionRealisee/>} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App