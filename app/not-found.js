import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-playfair text-6xl font-bold text-gray-300 mb-4">404</h1>
        <p className="text-gray-500 mb-6">Pagina non trovata</p>
        <Link href="/" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all">
          Torna alla Home
        </Link>
      </div>
    </div>
  )
}
