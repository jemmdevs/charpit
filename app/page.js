import Image from 'next/image';
import Link from 'next/link';
import MapSection from '@/components/MapSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-3 px-4 py-1 bg-amber-600/80 rounded-full">
            <span className="text-white text-sm font-medium tracking-wider">TRADICIÓN Y SABOR</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            The Char Pit
            <span className="block text-2xl md:text-3xl mt-2 font-light text-amber-200">ASADOR & GRILL</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white opacity-90">El mejor asador de Sevilla</p>
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
      <section className="py-16 px-4 bg-stone-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-60"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 relative inline-block">
              <span className="relative z-10">Nuestra Historia</span>
              <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-amber-400"></span>
            </h2>
            <p className="text-gray-800 mb-6">
              The Char Pit nació de la pasión por la auténtica cocina de asador. Desde nuestros inicios, 
              nos hemos dedicado a ofrecer los mejores cortes de carne a la parrilla con un toque único, 
              utilizando ingredientes frescos y técnicas culinarias que realzan el sabor natural de nuestros productos.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl border border-amber-200">
              <img 
                src="/images/aboutImage.webp" 
                alt="The Char Pit" 
                className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              />
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16 px-4 bg-amber-50/70 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-200/30 rounded-full -ml-12 -mb-12"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-3">ESPECIALIDADES DE LA CASA</span>
            <h2 className="text-3xl font-bold mb-3 text-gray-800">Nuestras Especialidades</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestros platos más populares, preparados con ingredientes frescos y las mejores carnes a la parrilla.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/30 to-transparent -z-10 rounded-xl"></div>
            {/* Plato 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
              <div className="border-b border-amber-200 pb-4 mb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Chuletón de Vaca Madurada</h3>
                <div className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <span className="text-amber-700 font-bold">24.50 €</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">Exquisito chuletón de vaca madurada 30 días, cocinado a la parrilla con leña de encina.</p>
              <div className="bg-gray-50 p-3 rounded-md border-l-4 border-amber-400">
                <p className="text-sm text-gray-600 text-left"><span className="font-medium">Acompañamiento:</span> Patatas asadas, pimientos de Padrón y sal gourmet</p>
              </div>
            </div>
            
            {/* Plato 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
              <div className="border-b border-amber-200 pb-4 mb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Costillas BBQ</h3>
                <div className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <span className="text-amber-700 font-bold">18.95 €</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">Jugosas costillas de cerdo cocinadas a baja temperatura y terminadas a la parrilla con nuestra salsa BBQ casera.</p>
              <div className="bg-gray-50 p-3 rounded-md border-l-4 border-amber-400">
                <p className="text-sm text-gray-600 text-left"><span className="font-medium">Acompañamiento:</span> Ensalada de col, mazorca de maíz asada y patatas fritas</p>
              </div>
            </div>
            
            {/* Plato 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col h-full">
              <div className="border-b border-amber-200 pb-4 mb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Secreto Ibérico</h3>
                <div className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <span className="text-amber-700 font-bold">16.50 €</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">Delicioso corte de cerdo ibérico a la parrilla, jugoso y con el punto perfecto de cocción.</p>
              <div className="bg-gray-50 p-3 rounded-md border-l-4 border-amber-400">
                <p className="text-sm text-gray-600 text-left"><span className="font-medium">Acompañamiento:</span> Patatas a lo pobre, pimientos asados y alioli casero</p>
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
      <MapSection />
    </div>
  );
}
