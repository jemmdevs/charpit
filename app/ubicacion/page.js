'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Importación dinámica del mapa para evitar errores de SSR
const MapComponent = dynamic(
  () => import('@/components/MapComponent'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gray-700 flex items-center justify-center">
        <p className="text-amber-400">Cargando mapa...</p>
      </div>
    )
  }
);

export default function Ubicacion() {
  // Estado para controlar si el componente está montado
  const [isMounted, setIsMounted] = useState(false);
  
  // Efecto para marcar el componente como montado
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-amber-500 mb-3 font-heading">Nuestra Ubicación</h1>
            <div className="w-24 h-1 bg-amber-600/40 mx-auto mb-3"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">Encuéntranos fácilmente y disfruta de la mejor experiencia gastronómica</p>
          </div>
          
          <div className="h-[500px] w-full mb-10 bg-gray-700 rounded-lg overflow-hidden border border-gray-700 shadow-md relative">
            {isMounted && <MapComponent />}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800/60 p-6 rounded-lg border border-gray-700 shadow-md">
              <h2 className="text-xl font-bold mb-4 text-amber-400 font-heading">Dirección</h2>
              <p className="text-gray-300 mb-2">Av. de la Escultora &apos;la Roldana&apos;, 15, local 14</p>
              <p className="text-gray-300 mb-2">41500 Alcalá de Guadaíra, Sevilla</p>
              <p className="text-gray-300 mb-6">España</p>
              
              <h2 className="text-xl font-bold mb-4 text-amber-400 font-heading">Contacto</h2>
              <p className="text-gray-300 mb-2">Teléfono: +34 955 123 456</p>
              <p className="text-gray-300 mb-6">Email: info@charpitgrill.com</p>
              
              <div className="mt-6 flex items-center gap-4">
                <a href="https://maps.google.com/?q=37.342083,-5.823167" target="_blank" rel="noopener noreferrer" className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded-sm transition duration-300 text-sm uppercase tracking-wider inline-flex items-center gap-2 border border-amber-600/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Ver en Google Maps
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800/60 p-6 rounded-lg border border-gray-700 shadow-md">
              <h2 className="text-xl font-bold mb-4 text-amber-400 font-heading">Horario</h2>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Lunes - Jueves:</span>
                  <span className="text-amber-300">12:00 - 23:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Viernes - Sábado:</span>
                  <span className="text-amber-300">12:00 - 00:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-300">Domingo:</span>
                  <span className="text-amber-300">12:00 - 22:00</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4 text-amber-400 font-heading">Transporte</h2>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>
                      <p className="text-gray-300">Metro: Estación Central (Línea 1)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-300">Autobús: Líneas 42, 56 y 78</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 p-8 text-center border-t border-gray-700">
          <Link 
            href="/reservas" 
            className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-sm transition duration-300 inline-block mr-6 uppercase tracking-wider text-sm border border-amber-600/50"
          >
            Reservar Mesa
          </Link>
          <Link 
            href="/" 
            className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}