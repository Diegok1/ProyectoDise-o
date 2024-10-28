'use client'
import dynamic from 'next/dynamic'

const FitnessCalculator = dynamic(() => import('../components/FitnessCalculator'), { ssr: false })

export default function CalculadoraPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Calculadora de Fitness
      </h1>
      <FitnessCalculator />
    </div>
  )
}