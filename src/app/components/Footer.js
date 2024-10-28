const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VitaFit Pro</h3>
              <p className="text-gray-300">
                Transforma tu vida, un hábito a la vez. Tu compañero en el camino hacia una vida más saludable.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="/calculadora" className="text-gray-300 hover:text-white">Calculadora</a></li>
                <li><a href="/ejercicios" className="text-gray-300 hover:text-white">Ejercicios</a></li>
                <li><a href="/nutricion" className="text-gray-300 hover:text-white">Nutrición</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="/guias" className="text-gray-300 hover:text-white">Guías</a></li>
                <li><a href="/recetas" className="text-gray-300 hover:text-white">Recetas</a></li>
                <li><a href="/videos" className="text-gray-300 hover:text-white">Videos</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li>Email: info@vitafitpro.com</li>
                <li>Tel: (123) 456-7890</li>
                <li>Síguenos en redes sociales</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">© 2024 VitaFit Pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer