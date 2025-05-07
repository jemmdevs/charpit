'use client';

import dynamic from 'next/dynamic';

// Importar MapComponent de forma dinámica para evitar errores de SSR
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-200 flex items-center justify-center">Cargando mapa...</div>
});

export default function MapSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Encuéntranos</h2>
        <p className="text-gray-800 mb-8">Visítanos y disfruta de la mejor experiencia de asador en Alcalá de Guadaíra</p>
        <div className="h-96 rounded-lg mb-6 border border-gray-300 overflow-hidden">
          <MapComponent />
        </div>
        <div className="text-left max-w-md mx-auto bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p className="font-bold text-gray-800">Dirección:</p>
          <p className="text-gray-800 mb-2">Av. de la Escultora 'la Roldana', 15, local 14</p>
          <p className="text-gray-800 mb-2">41500 Alcalá de Guadaíra, Sevilla</p>
          <p className="font-bold text-gray-800">Horario:</p>
          <p className="text-gray-800">Lunes a Domingo: 12:00 - 23:00</p>
        </div>
      </div>
    </section>
  );
}
