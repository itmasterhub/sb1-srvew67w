import React from 'react';
import { Shield, Headphones, Lightbulb } from 'lucide-react';

const features = [
  {
    title: "Seguridad Confiable",
    description: "Soluciones de seguridad de nivel empresarial para su tranquilidad.",
    Icon: Shield
  },
  {
    title: "Soporte 24/7",
    description: "Soporte técnico las 24 horas cuando lo necesites.",
    Icon: Headphones
  },
  {
    title: "Primero Innovación",
    description: "Soluciones de vanguardia para los desafíos empresariales modernos.",
    Icon: Lightbulb
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué Elegirnos?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Con años de experiencia en servicios de TI, brindamos soluciones de vanguardia. 
            que ayudan a las empresas a prosperar en la era digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.Icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}