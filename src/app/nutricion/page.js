    'use client'
import React from 'react';

const recetas = [
  {
    nombre: "Bowl de Proteína",
    categoria: "Almuerzo",
    calorias: 450,
    macros: {
      proteinas: "30g",
      carbohidratos: "45g",
      grasas: "20g"
    },
    ingredientes: [
      "150g de pollo a la parrilla",
      "1 taza de quinoa cocida",
      "1 taza de espinacas",
      "1/2 aguacate",
      "Tomates cherry"
    ],
    preparacion: [
      "Cocina la quinoa según las instrucciones",
      "Asa el pollo con tus especias favoritas",
      "Combina todos los ingredientes en un bowl",
      "Añade un aderezo saludable"
    ],
    tiempoPreparacion: "25 minutos",
    nivel: "Fácil",
    imagen: "/api/placeholder/300/200"
  },
  {
    nombre: "Batido Verde Proteico",
    categoria: "Desayuno",
    calorias: 280,
    macros: {
      proteinas: "20g",
      carbohidratos: "35g",
      grasas: "8g"
    },
    ingredientes: [
      "1 scoop de proteína de vainilla",
      "1 plátano",
      "2 tazas de espinacas",
      "1 cucharada de mantequilla de almendras",
      "Leche de almendras"
    ],
    preparacion: [
      "Añade todos los ingredientes en la licuadora",
      "Licua hasta obtener una consistencia suave",
      "Sirve inmediatamente"
    ],
    tiempoPreparacion: "5 minutos",
    nivel: "Fácil",
    imagen: "/api/placeholder/300/200"
  }
];

export default function NutricionPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Nutrición Saludable</h1>

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Conceptos Básicos de Nutrición</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Proteínas</h3>
              <p className="text-gray-600">Esenciales para la construcción muscular y recuperación.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Carbohidratos</h3>
              <p className="text-gray-600">Principal fuente de energía para el cuerpo.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Grasas Saludables</h3>
              <p className="text-gray-600">Importantes para la absorción de vitaminas y hormonal.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Recetas Saludables</h2>
          <div className="grid grid-cols-1 gap-8">
            {recetas.map((receta) => (
              <div key={receta.nombre} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={receta.imagen}
                      alt={receta.nombre}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{receta.nombre}</h3>
                        <p className="text-gray-600">{receta.categoria}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{receta.calorias} cal</p>
                        <p className="text-sm text-gray-600">{receta.tiempoPreparacion}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="font-semibold">Proteínas</p>
                        <p className="text-gray-600">{receta.macros.proteinas}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Carbos</p>
                        <p className="text-gray-600">{receta.macros.carbohidratos}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Grasas</p>
                        <p className="text-gray-600">{receta.macros.grasas}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Ingredientes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {receta.ingredientes.map((ingrediente, index) => (
                          <li key={index} className="text-gray-600">{ingrediente}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Preparación:</h4>
                      <ol className="list-decimal list-inside space-y-1">
                        {receta.preparacion.map((paso, index) => (
                          <li key={index} className="text-gray-600">{paso}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}