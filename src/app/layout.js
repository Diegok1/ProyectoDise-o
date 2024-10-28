import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VitaFit Pro - Tu Compañero de Bienestar',
  description: 'Transforma tu vida, un hábito a la vez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}