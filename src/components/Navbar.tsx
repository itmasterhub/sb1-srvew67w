import React from 'react';
import { Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">iTMasterHub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">Acerca de..</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contacto</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Empezar
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Acerca de Nosotros</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contacto</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Empezar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}