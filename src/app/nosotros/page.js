import React from 'react';

const equipo = [
  {
    nombre: "Dr. Carlos Mendoza",
    cargo: "Director Médico",
    imagen: "/api/placeholder/300/300",
    descripcion: "Especialista en medicina deportiva con más de 15 años de experiencia.",
    especialidad: "Medicina Deportiva"
  },
  {
    nombre: "Lic. Ana Martínez",
    cargo: "Nutricionista Principal",
    imagen: "/api/placeholder/300/300",
    descripcion: "Experta en nutrición deportiva y planes de alimentación personalizados.",
    especialidad: "Nutrición Deportiva"
  },
  {
    nombre: "Prof. Miguel Ángel Torres",
    cargo: "Entrenador Jefe",
    imagen: "/api/placeholder/300/300",
    descripcion: "Certificado en entrenamiento funcional y preparación física.",
    especialidad: "Entrenamiento Funcional"
  }
];

export default function NosotrosPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Sobre VitaFit Pro</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transformando vidas a través de la ciencia y el compromiso con tu salud
        </p>
      </section>

      {/* Nuestra Historia */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="mb-4">
            VitaFit Pro nació en 2020 con una misión clara: hacer que la salud y el fitness sean accesibles para todos. 
            Lo que comenzó como una simple calculadora de calorías se ha convertido en una plataforma integral de salud y bienestar.
          </p>
          <p className="mb-4">
            Nuestro equipo de expertos en salud, nutrición y ejercicio trabaja incansablemente para proporcionar 
            la información más precisa y los planes más efectivos para nuestros usuarios.
          </p>
          <p>
            Hoy, miles de personas confían en VitaFit Pro para alcanzar sus objetivos de salud y mantenerse 
            motivados en su viaje hacia un estilo de vida más saludable.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
            <p className="text-gray-600">Comprometidos con proporcionar la más alta calidad en todo lo que hacemos.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
            <p className="text-gray-600">Creemos en el poder de una comunidad unida y motivada.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovación</h3>
            <p className="text-gray-600">Constantemente buscando nuevas formas de mejorar y evolucionar.</p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipo.map((miembro) => (
            <div key={miembro.nombre} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={miembro.imagen}
                alt={miembro.nombre}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{miembro.nombre}</h3>
                <p className="text-blue-600 mb-2">{miembro.cargo}</p>
                <p className="text-gray-600 mb-2">{miembro.descripcion}</p>
                <p className="text-sm font-semibold">
                  Especialidad: {miembro.especialidad}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="max-w-4xl mx-auto mt-16">
        <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
          <p className="text-gray-600 mb-6">
            Estamos aquí para ayudarte en tu viaje hacia una vida más saludable.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Contáctanos
          </button>
        </div>
      </section>
    </div>
  );
}
