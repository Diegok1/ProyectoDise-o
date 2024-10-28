import Image from 'next/image'

const ejercicios = [
  {
    categoria: "Cardio",
    ejercicios: [
      {
        nombre: "Carrera",
        descripcion: "Excelente ejercicio para mejorar la resistencia cardiovascular",
        calorias: "400-600 cal/hora",
        nivel: "Principiante",
        imagen: "https://picsum.photos/800/600?random=1",
        tips: [
          "Mantén una postura erguida",
          "Respira de manera controlada",
          "Usa calzado adecuado"
        ]
      },
      {
        nombre: "Natación",
        descripcion: "Ejercicio de bajo impacto que trabaja todo el cuerpo",
        calorias: "400-700 cal/hora",
        nivel: "Intermedio",
        imagen: "https://picsum.photos/800/600?random=2",
        tips: [
          "Mantén el cuerpo alineado",
          "Coordina la respiración con los movimientos",
          "Practica diferentes estilos"
        ]
      }
    ]
  },
  {
    categoria: "Fuerza",
    ejercicios: [
      {
        nombre: "Sentadillas",
        descripcion: "Ejercicio fundamental para fortalecer piernas y glúteos",
        calorias: "300-400 cal/hora",
        nivel: "Principiante",
        imagen: "https://picsum.photos/800/600?random=3",
        tips: [
          "Mantén los pies alineados con los hombros",
          "La rodilla no debe sobrepasar la punta del pie",
          "Mantén la espalda recta"
        ]
      },
      {
        nombre: "Flexiones",
        descripcion: "Ejercicio clásico para pecho, hombros y tríceps",
        calorias: "200-300 cal/hora",
        nivel: "Intermedio",
        imagen: "https://picsum.photos/800/600?random=4",
        tips: [
          "Mantén el core activado",
          "Alinea las muñecas con los hombros",
          "Baja el pecho cerca del suelo"
        ]
      }
    ]
  }
];

export default function EjerciciosPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Guía de Ejercicios</h1>
      
      <div className="space-y-12">
        {ejercicios.map((categoria) => (
          <div key={categoria.categoria} className="space-y-6">
            <h2 className="text-2xl font-semibold">{categoria.categoria}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {categoria.ejercicios.map((ejercicio) => (
                <div key={ejercicio.nombre} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative w-full h-64">
                    <Image
                      src={ejercicio.imagen}
                      alt={ejercicio.nombre}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{ejercicio.nombre}</h3>
                    <p className="text-gray-600 mb-4">{ejercicio.descripcion}</p>
                    
                    <div className="space-y-2 mb-4">
                      <p><span className="font-semibold">Calorías:</span> {ejercicio.calorias}</p>
                      <p><span className="font-semibold">Nivel:</span> {ejercicio.nivel}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Tips:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {ejercicio.tips.map((tip, index) => (
                          <li key={index} className="text-gray-600">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}