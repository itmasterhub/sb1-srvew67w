import React from 'react';
import ServiceCard from './ServiceCard';
import { Shield, Headphones, ProjectorIcon, FileText, Lightbulb, Network, Settings } from 'lucide-react';

const services = [
  {
    title: "Seguridad Informática y Protección de Datos",
    description: "Soluciones de Seguridad Integrales para Proteger sus Valiosos Datos y Sistemas de Amenazas.",
    Icon: Shield
  },
  {
    title: "Soporte Técnico",
    description: "Soporte Técnico Experto las 24 horas, los 7 días de la Semana para que su Negocio Funcione sin Problemas.",
    Icon: Headphones
  },
  {
    title: "Gestión de Proyectos",
    description: "Gestión Profesional de sus Proyectos Tecnológicos desde el Inicio hasta su Finalización.",
    Icon: ProjectorIcon
  },
  {
    title: "Gestión de Contratos de TI",
    description: "Manejo Experto de las Relaciones con Proveedores y Negociaciones de Contratos de TI.",
    Icon: FileText
  },
  {
    title: "Innovación y Mejora",
    description: "Innovación y Mejora Continua de su Infraestructura TI.",
    Icon: Lightbulb
  },
  {
    title: "Gestión de Red",
    description: "Gestión Integral de tus Redes de Comunicaciones e Informática.",
    Icon: Network
  },
  {
    title: "Sistema de Mantenimiento",
    description: "Mantenimiento y Actualizaciones Periódicas de su Software y Sistemas",
    Icon: Settings
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}