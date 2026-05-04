import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home'
import Servizi from './pages/Servizi'
import ChiSiamo from './pages/ChiSiamo'
import Tecnologie from './pages/Tecnologie'
import Contatti from './pages/Contatti'
import Gallery from './pages/Gallery'
import Dashboard from './pages/Dashboard'
import PromosBanner from './components/PromosBanner'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <PromosBanner />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/tecnologie" element={<Tecnologie />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App