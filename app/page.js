import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Char Pit</h1>
          <p className="text-xl md:text-2xl mb-8 text-white">Auténtica cocina mexicana</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Ver Carta
            </Link>
            <Link 
              href="/reservas" 
              className="bg-white hover:bg-gray-100 text-amber-600 font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Reservar Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* Secciones Principales */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestra Historia</h2>
            <p className="text-gray-800 mb-6">
              Char Pit nació de la pasión por la auténtica cocina mexicana. Desde nuestros inicios, 
              nos hemos dedicado a ofrecer los sabores más tradicionales con un toque contemporáneo, 
              utilizando ingredientes frescos y técnicas culinarias que respetan nuestras raíces.
            </p>
            <Link 
              href="/nosotros" 
              className="text-amber-600 hover:text-amber-800 font-semibold"
            >
              Conoce más sobre nosotros →
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl border border-gray-200">
            {/* Aquí iría una imagen del restaurante */}
            <div className="bg-gray-300 h-80 w-full"></div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3 text-gray-800">Nuestras Especialidades</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestros platos más populares, preparados con ingredientes frescos y auténticas recetas mexicanas.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Plato 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
              <div className="border-b border-amber-200 pb-4 mb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Tacos al Pastor</h3>
                <div className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <span className="text-amber-700 font-bold">9.50 €</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">Deliciosos tacos de cerdo marinado con piña y cilantro fresco.</p>
              <div className="bg-gray-50 p-3 rounded-md border-l-4 border-amber-400">
                <p className="text-sm text-gray-600 text-left"><span className="font-medium">Ingredientes:</span> Tortilla de maíz, cerdo marinado, piña, cilantro, cebolla</p>
              </div>
            </div>
            
            {/* Plato 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
              <div className="border-b border-amber-200 pb-4 mb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Enchiladas Suizas</h3>
                <div className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <span className="text-amber-700 font-bold">12.95 €</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">Tortillas rellenas de pollo bañadas en salsa verde y queso gratinado.</p>
              <div className="bg-gray-50 p-3 rounded-md border-l-4 border-amber-400">
                <p className="text-sm text-gray-600 text-left"><span className="font-medium">Ingredientes:</span> Tortilla de maíz, pollo, salsa verde, queso, crema</p>
              </div>
            </div>
            
            {/* Plato 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
              <div className="border-b border-amber-200 pb-4 mb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Guacamole Fresco</h3>
                <div className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <span className="text-amber-700 font-bold">7.50 €</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">Preparado al momento con aguacates, tomate, cebolla y chile serrano.</p>
              <div className="bg-gray-50 p-3 rounded-md border-l-4 border-amber-400">
                <p className="text-sm text-gray-600 text-left"><span className="font-medium">Ingredientes:</span> Aguacate, tomate, cebolla, chile serrano, cilantro, limón</p>
              </div>
            </div>
          </div>
          
          <div className="inline-block border-t border-amber-200 pt-6 px-12">
            <Link 
              href="/menu" 
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-sm"
            >
              Ver Carta Completa
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Encuéntranos</h2>
          <p className="text-gray-800 mb-8">Visítanos y disfruta de la mejor experiencia gastronómica mexicana</p>
          <div className="h-96 bg-gray-200 rounded-lg mb-6 border border-gray-300">
            {/* Aquí irá el mapa de OpenStreetMap */}
          </div>
          <div className="text-left max-w-md mx-auto bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="font-bold text-gray-800">Dirección:</p>
            <p className="text-gray-800 mb-2">Calle Principal 123, Ciudad de México</p>
            <p className="font-bold text-gray-800">Horario:</p>
            <p className="text-gray-800">Lunes a Domingo: 12:00 - 23:00</p>
          </div>
        </div>
      </section>
    </div>
  );
}
