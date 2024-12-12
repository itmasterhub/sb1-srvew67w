import React from 'react';

export default function Hero() {
  return (
    <section className="pt-20 pb-32 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
             Eleve su negocio con soluciones de TI expertas
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Servicios integrales de TI adaptados a las necesidades de su negocio.
            Desde seguridad hasta innovación, lo tenemos cubierto.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold 
                           hover:bg-blue-50 transition-colors duration-300">
            Programe una consulta
          </button>
        </div>
      </div>
    </section>
  );
}