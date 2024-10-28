export const generarRutina = (objetivo, imc) => {
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
  
  export const generarPlanAlimenticio = (calorias, objetivo) => {
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