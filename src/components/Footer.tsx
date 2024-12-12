import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Acerca de Nosotros</h3>
            <p className="text-gray-400">Servicios Profesionales de TI para Empresas Modernas.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Soluciones de Seguridad</li>
              <li>Apoyo Técnico</li>
              <li>Gestión de Proyectos</li>
              <li>Gestión de Red</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>itmasterhubpty@gmail.com</li>
              <li>+507 62604112</li>
              <li>+507 61316731</li>
              <li>Condado del Rey, Ancon</li>
              <li>Ciudad de Panamá, Panamá</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síganos</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/sergio-bordas/" target="_blank" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="https://x.com/sergiobordas?t=-D6ncEOQtR5FO6Hej24Oqg&s=08" target="_blank" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="https://www.facebook.com/sergio.bordas.39?mibextid=ZbWKwL" className="text-gray-400 hover:text-white" target="_blank">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 iTMasterHub. Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}