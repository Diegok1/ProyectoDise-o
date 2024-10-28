'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">VitaFit Pro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
            <Link href="/calculadora" className="text-gray-700 hover:text-blue-600">Calculadora</Link>
            <Link href="/ejercicios" className="text-gray-700 hover:text-blue-600">Ejercicios</Link>
            <Link href="/nutricion" className="text-gray-700 hover:text-blue-600">Nutrición</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-blue-600">Nosotros</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Inicio</Link>
              <Link href="/calculadora" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Calculadora</Link>
              <Link href="/ejercicios" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Ejercicios</Link>
              <Link href="/nutricion" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Nutrición</Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</Link>
              <Link href="/nosotros" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Nosotros</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}