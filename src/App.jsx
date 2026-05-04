import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servizi from './pages/Servizi'
import ChiSiamo from './pages/ChiSiamo'
import Tecnologie from './pages/Tecnologie'
import Contatti from './pages/Contatti'
import Gallery from './pages/Gallery'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App