'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="bg-gray-900 shadow-lg border-b border-amber-800/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image 
                src="/images/logocharpit.jpg" 
                alt="The Char Pit"
                width={48}
                height={48}
                className="h-12 w-auto rounded-md border border-amber-700/50"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-amber-500 font-heading">The Char Pit</span>
                <span className="text-xs text-amber-400/80 tracking-wider">ASADOR & GRILL</span>
              </div>
            </Link>
          </div>
          
          {/* Menú de navegación para pantallas medianas y grandes */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md font-medium text-sm uppercase tracking-wider transition-colors">
              Inicio
            </Link>
            <Link href="/menu" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md font-medium text-sm uppercase tracking-wider transition-colors">
              Carta
            </Link>
            <Link href="/reservas" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md font-medium text-sm uppercase tracking-wider transition-colors">
              Reservas
            </Link>
            <Link href="/ubicacion" className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md font-medium text-sm uppercase tracking-wider transition-colors">
              Ubicación
            </Link>
            <Link 
              href="/reservas" 
              className="bg-amber-700 hover:bg-amber-800 text-white font-medium px-5 py-2 rounded-md transition duration-300 text-sm uppercase tracking-wider border border-amber-600/50"
            >
              Reservar Mesa
            </Link>
          </div>
          
          {/* Botón de menú móvil */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-400 hover:text-amber-500 hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icono de menú */}
              <svg 
                className={`${menuAbierto ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icono de cerrar */}
              <svg 
                className={`${menuAbierto ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`${menuAbierto ? 'block' : 'hidden'} md:hidden bg-gray-800 border-t border-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/" 
            className="text-gray-300 hover:text-amber-400 block px-3 py-2 rounded-md font-medium"
            onClick={() => setMenuAbierto(false)}
          >
            Inicio
          </Link>
          <Link 
            href="/menu" 
            className="text-gray-300 hover:text-amber-400 block px-3 py-2 rounded-md font-medium"
            onClick={() => setMenuAbierto(false)}
          >
            Carta
          </Link>
          <Link 
            href="/reservas" 
            className="text-gray-300 hover:text-amber-400 block px-3 py-2 rounded-md font-medium"
            onClick={() => setMenuAbierto(false)}
          >
            Reservas
          </Link>
          <Link 
            href="/ubicacion" 
            className="text-gray-300 hover:text-amber-400 block px-3 py-2 rounded-md font-medium"
            onClick={() => setMenuAbierto(false)}
          >
            Ubicación
          </Link>
          <Link 
            href="/reservas" 
            className="bg-amber-700 hover:bg-amber-800 text-white block px-3 py-2 rounded-md font-medium text-center mt-4"
            onClick={() => setMenuAbierto(false)}
          >
            Reservar Mesa
          </Link>
        </div>
      </div>
    </nav>
  );
}