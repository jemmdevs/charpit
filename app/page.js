import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Char Pit</h1>
          <p className="text-xl md:text-2xl mb-8">Auténtica cocina mexicana</p>
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
            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
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
          <div className="rounded-lg overflow-hidden shadow-xl">
            {/* Aquí iría una imagen del restaurante */}
            <div className="bg-gray-300 h-80 w-full"></div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Nuestras Especialidades</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plato 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Tacos al Pastor</h3>
              <p className="text-gray-800">Deliciosos tacos de cerdo marinado con piña y cilantro fresco.</p>
            </div>
            {/* Plato 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Enchiladas Suizas</h3>
              <p className="text-gray-800">Tortillas rellenas de pollo bañadas en salsa verde y queso gratinado.</p>
            </div>
            {/* Plato 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-gray-200 h-48 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Guacamole Fresco</h3>
              <p className="text-gray-800">Preparado al momento con aguacates, tomate, cebolla y chile serrano.</p>
            </div>
          </div>
          <div className="mt-10">
            <Link 
              href="/menu" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Ver Carta Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Encuéntranos</h2>
          <p className="text-gray-800 mb-8">Visítanos y disfruta de la mejor experiencia gastronómica mexicana</p>
          <div className="h-96 bg-gray-200 rounded-lg mb-6">
            {/* Aquí irá el mapa de OpenStreetMap */}
          </div>
          <div className="text-left max-w-md mx-auto">
            <p className="font-bold">Dirección:</p>
            <p className="text-gray-800 mb-2">Calle Principal 123, Ciudad de México</p>
            <p className="font-bold">Horario:</p>
            <p className="text-gray-800">Lunes a Domingo: 12:00 - 23:00</p>
          </div>
        </div>
      </section>
    </div>
  );
}
