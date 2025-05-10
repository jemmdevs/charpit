'use client';

import dynamic from 'next/dynamic';

// Importar MapComponent de forma dinámica para evitar errores de SSR
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-800/50 flex items-center justify-center text-amber-400">Cargando mapa...</div>
});

export default function MapSection() {
  return (
    <section className="py-16 px-4 bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3 text-amber-500 font-heading">Encuéntranos</h2>
        <div className="w-24 h-1 bg-amber-600/40 mx-auto mb-6"></div>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">Visítanos y disfruta de la mejor experiencia de asador en Alcalá de Guadaíra, Sevilla</p>
        <div className="h-96 rounded-lg mb-8 border border-gray-700 shadow-xl overflow-hidden">
          <MapComponent />
        </div>
        <div className="text-left max-w-md mx-auto bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg">
          <div className="flex flex-col space-y-4">
            <div>
              <p className="font-bold text-amber-400 mb-1 uppercase text-sm tracking-wider">Dirección:</p>
              <p className="text-gray-300">Av. de la Escultora 'la Roldana', 15, local 14</p>
              <p className="text-gray-300">41500 Alcalá de Guadaíra, Sevilla</p>
            </div>
            <div>
              <p className="font-bold text-amber-400 mb-1 uppercase text-sm tracking-wider">Horario:</p>
              <p className="text-gray-300">Lunes a Domingo: 12:00 - 23:00</p>
            </div>
            <div>
              <p className="font-bold text-amber-400 mb-1 uppercase text-sm tracking-wider">Reservas:</p>
              <p className="text-gray-300">+34 955 123 456</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
