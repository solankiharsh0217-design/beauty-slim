import { useLocation, Link } from 'react-router-dom'

export default function PageNotFound() {
  const location = useLocation()
  const pageName = location.pathname.substring(1)

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-light">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-7xl font-light text-gray-300">404</h1>
          <div className="h-0.5 w-16 bg-gray-200 mx-auto"></div>
        </div>
        <div className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-secondary">Pagina non trovata</h2>
          <p className="text-gray-500 leading-relaxed">
            La pagina <span className="font-medium text-secondary">"{pageName}"</span> non esiste.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all"
        >
          Torna alla Home
        </Link>
      </div>
    </div>
  )
}