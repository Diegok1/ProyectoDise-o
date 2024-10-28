import Image from 'next/image'

const articulos = [
  {
    titulo: "Cómo Empezar tu Rutina de Ejercicios",
    categoria: "Fitness",
    fecha: "24 Oct 2024",
    autor: "Dr. Juan Pérez",
    resumen: "Guía completa para principiantes que quieren comenzar su viaje fitness de manera segura y efectiva.",
    contenido: `
      Comenzar una rutina de ejercicios puede parecer abrumador, pero con los pasos correctos, cualquiera puede hacerlo.
      
      1. Empieza gradualmente
      Es importante no exigirse demasiado al principio. Comienza con sesiones cortas de 20-30 minutos.

      2. Establece metas realistas
      Fija objetivos alcanzables a corto plazo para mantener la motivación.

      3. Mantén la consistencia
      Es mejor hacer poco pero constantemente que mucho de forma esporádica.
    `,
    imagen: "https://picsum.photos/800/400?random=5"
  },
  {
    titulo: "Nutrición Pre y Post Entrenamiento",
    categoria: "Nutrición",
    fecha: "23 Oct 2024",
    autor: "Lic. María García",
    resumen: "Todo lo que necesitas saber sobre qué comer antes y después de tu rutina de ejercicios.",
    contenido: `
      La nutrición adecuada es clave para optimizar tus entrenamientos y recuperación.

      Pre-entrenamiento:
      - Carbohidratos complejos
      - Proteína moderada
      - Baja en grasas
    `,
    imagen: "https://picsum.photos/800/400?random=6"
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Blog de Salud y Fitness</h1>

      <div className="max-w-4xl mx-auto">
        {articulos.map((articulo) => (
          <article key={articulo.titulo} className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src={articulo.imagen}
                alt={articulo.titulo}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span>{articulo.categoria}</span>
                <span className="mx-2">•</span>
                <span>{articulo.fecha}</span>
                <span className="mx-2">•</span>
                <span>{articulo.autor}</span>
              </div>

              <h2 className="text-2xl font-bold mb-4">{articulo.titulo}</h2>
              
              <p className="text-gray-600 mb-6">{articulo.resumen}</p>
              
              <div className="prose max-w-none">
                {articulo.contenido.split('\n').map((parrafo, index) => (
                  <p key={index} className="mb-4">{parrafo}</p>
                ))}
              </div>
              
              <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Leer más
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}