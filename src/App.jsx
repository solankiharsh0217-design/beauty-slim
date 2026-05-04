import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servizi from './pages/Servizi'
import ChiSiamo from './pages/ChiSiamo'
import Tecnologie from './pages/Tecnologie'
import Contatti from './pages/Contatti'
import Gallery from './pages/Gallery'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servizi" element={<Servizi />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/tecnologie" element={<Tecnologie />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="font-playfair text-6xl font-bold text-gray-300 mb-4">404</h1>
                    <p className="text-gray-500 mb-6">Pagina non trovata</p>
                    <a href="/" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">Torna alla Home</a>
                  </div>
                </div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App