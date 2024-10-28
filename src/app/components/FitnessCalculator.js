'use client'
import React, { useState } from 'react';

const generarRutina = (objetivo, imc) => {
  const rutinas = {
    perdidaPeso: [
      "Lunes: 30 min cardio + ejercicios de peso corporal",
      "Martes: Entrenamiento de fuerza - tren inferior",
      "Miércoles: HIIT 20 minutos",
      "Jueves: Entrenamiento de fuerza - tren superior",
      "Viernes: 40 min cardio",
      "Sábado: Yoga o estiramientos",
      "Domingo: Descanso activo"
    ],
    gananciaMusculo: [
      "Lunes: Pecho y tríceps",
      "Martes: Espalda y bíceps",
      "Miércoles: Descanso",
      "Jueves: Piernas y hombros",
      "Viernes: Full body",
      "Sábado: Cardio suave",
      "Domingo: Descanso"
    ],
    mantenimiento: [
      "Lunes: Full body",
      "Martes: Cardio moderado",
      "Miércoles: Yoga",
      "Jueves: Full body",
      "Viernes: HIIT",
      "Sábado: Actividad recreativa",
      "Domingo: Descanso"
    ]
  };

  return rutinas[objetivo];
};

const generarPlanAlimenticio = (calorias, objetivo) => {
  let ajusteCalorias = calorias;
  if (objetivo === 'perdidaPeso') {
    ajusteCalorias -= 500;
  } else if (objetivo === 'gananciaMusculo') {
    ajusteCalorias += 300;
  }

  return {
    calorias: ajusteCalorias,
    distribucion: {
      proteinas: Math.round((ajusteCalorias * 0.3) / 4),
      carbohidratos: Math.round((ajusteCalorias * 0.45) / 4),
      grasas: Math.round((ajusteCalorias * 0.25) / 9)
    },
    comidas: [
      "Desayuno: 25% de las calorías diarias",
      "Media mañana: 10% de las calorías diarias",
      "Almuerzo: 35% de las calorías diarias",
      "Merienda: 10% de las calorías diarias",
      "Cena: 20% de las calorías diarias"
    ]
  };
};

const FitnessCalculator = () => {
  const [formData, setFormData] = useState({
    edad: '',
    peso: '',
    altura: '',
    genero: '',
    objetivo: '',
    nivelActividad: ''
  });

  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const alturaEnMetros = formData.altura / 100;
    return (formData.peso / (alturaEnMetros * alturaEnMetros)).toFixed(1);
  };

  const calcularCalorias = () => {
    let TMB = 0;
    if (formData.genero === 'masculino') {
      TMB = 88.362 + (13.397 * formData.peso) + (4.799 * formData.altura) - (5.677 * formData.edad);
    } else {
      TMB = 447.593 + (9.247 * formData.peso) + (3.098 * formData.altura) - (4.330 * formData.edad);
    }

    const factoresActividad = {
      sedentario: 1.2,
      ligero: 1.375,
      moderado: 1.55,
      activo: 1.725,
      muyActivo: 1.9
    };

    return Math.round(TMB * factoresActividad[formData.nivelActividad]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const imc = calcularIMC();
    const calorias = calcularCalorias();
    
    setResultado({
      imc,
      calorias,
      rutina: generarRutina(formData.objetivo, imc),
      planAlimenticio: generarPlanAlimenticio(calorias, formData.objetivo)
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="edad" className="block text-sm font-medium">Edad</label>
            <input
              id="edad"
              type="number"
              className="w-full p-2 border rounded"
              value={formData.edad}
              onChange={(e) => setFormData({...formData, edad: e.target.value})}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="peso" className="block text-sm font-medium">Peso (kg)</label>
            <input
              id="peso"
              type="number"
              className="w-full p-2 border rounded"
              value={formData.peso}
              onChange={(e) => setFormData({...formData, peso: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="altura" className="block text-sm font-medium">Altura (cm)</label>
            <input
              id="altura"
              type="number"
              className="w-full p-2 border rounded"
              value={formData.altura}
              onChange={(e) => setFormData({...formData, altura: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="genero" className="block text-sm font-medium">Género</label>
            <select 
              id="genero"
              className="w-full p-2 border rounded"
              onChange={(e) => setFormData({...formData, genero: e.target.value})}
              required
            >
              <option value="">Selecciona tu género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="objetivo" className="block text-sm font-medium">Objetivo</label>
            <select 
              id="objetivo"
              className="w-full p-2 border rounded"
              onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
              required
            >
              <option value="">Selecciona tu objetivo</option>
              <option value="perdidaPeso">Pérdida de peso</option>
              <option value="gananciaMusculo">Ganancia de músculo</option>
              <option value="mantenimiento">Mantenimiento</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="nivelActividad" className="block text-sm font-medium">Nivel de Actividad</label>
            <select 
              id="nivelActividad"
              className="w-full p-2 border rounded"
              onChange={(e) => setFormData({...formData, nivelActividad: e.target.value})}
              required
            >
              <option value="">Selecciona tu nivel de actividad</option>
              <option value="sedentario">Sedentario</option>
              <option value="ligero">Ligero</option>
              <option value="moderado">Moderado</option>
              <option value="activo">Activo</option>
              <option value="muyActivo">Muy activo</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Calcular Plan Personalizado
        </button>
      </form>

      {resultado && (
        <div className="mt-8 space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Resultados</h3>
            <p className="mb-1">IMC: {resultado.imc}</p>
            <p>Calorías diarias recomendadas: {resultado.calorias}</p>
          </div>

          {resultado.planAlimenticio && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Plan de Alimentación</h3>
              <p className="mb-2">Calorías objetivo: {resultado.planAlimenticio.calorias}</p>
              <div className="mb-4">
                <p className="mb-1">Proteínas: {resultado.planAlimenticio.distribucion.proteinas}g</p>
                <p className="mb-1">Carbohidratos: {resultado.planAlimenticio.distribucion.carbohidratos}g</p>
                <p>Grasas: {resultado.planAlimenticio.distribucion.grasas}g</p>
              </div>
              <div>
                {resultado.planAlimenticio.comidas.map((comida, index) => (
                  <p key={index} className="text-sm mb-1">{comida}</p>
                ))}
              </div>
            </div>
          )}

          {resultado.rutina && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Rutina de Ejercicios</h3>
              <div>
                {resultado.rutina.map((dia, index) => (
                  <p key={index} className="text-sm mb-1">{dia}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FitnessCalculator;