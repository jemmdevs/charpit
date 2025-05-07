'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Importación dinámica del mapa para evitar errores de SSR
const MapComponent = dynamic(
  () => import('@/components/MapComponent'),
  { ssr: false }
);

export default function Ubicacion() {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Nuestra Ubicación</h1>
          
          <div className="h-[500px] w-full mb-8 bg-gray-100 rounded-lg overflow-hidden">
            <MapComponent />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Dirección</h2>
              <p className="text-gray-700 mb-2">Calle Principal 123</p>
              <p className="text-gray-700 mb-2">Ciudad de México, CP 12345</p>
              <p className="text-gray-700 mb-6">México</p>
              
              <h2 className="text-xl font-bold mb-4">Contacto</h2>
              <p className="text-gray-700 mb-2">Teléfono: +52 55 1234 5678</p>
              <p className="text-gray-700 mb-2">Email: info@charpit.com</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Horario</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Lunes - Jueves:</span>
                  <span className="text-gray-700">12:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Viernes - Sábado:</span>
                  <span className="text-gray-700">12:00 - 00:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Domingo:</span>
                  <span className="text-gray-700">12:00 - 22:00</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Transporte</h2>
                <p className="text-gray-700 mb-2">Metro: Estación Central (Línea 1)</p>
                <p className="text-gray-700">Autobús: Líneas 42, 56 y 78</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 p-8 text-center">
          <Link 
            href="/reservas" 
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block mr-4"
          >
            Reservar Mesa
          </Link>
          <Link 
            href="/" 
            className="text-amber-600 hover:text-amber-800 font-medium"
          >
            ← Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}