import Image from 'next/image';
import Link from 'next/link';
import MapSection from '@/components/MapSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/videos/grill-bg.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6 space-y-2">
            <div className="inline-block px-4 py-1 bg-amber-700/80 rounded-sm">
              <span className="text-white text-sm font-medium tracking-widest uppercase">Tradición y Sabor</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg font-heading">
              The Char Pit
              <span className="block text-2xl md:text-3xl mt-4 font-light text-amber-300 tracking-wide">ASADOR & GRILL</span>
            </h1>
            <div className="w-24 h-1 bg-amber-500/70 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 opacity-90 font-light">El mejor asador de Sevilla</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu" 
              className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-sm transition duration-300 uppercase tracking-wider text-sm border border-amber-600/50"
            >
              Ver Carta
            </Link>
            <Link 
              href="/reservas" 
              className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-sm transition duration-300 uppercase tracking-wider text-sm border border-amber-400/30"
            >
              Reservar Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* Secciones Principales */}
      <section className="py-20 px-4 bg-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-5 text-amber-500 relative inline-block font-heading">
              <span className="relative z-10">Nuestra Historia</span>
              <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-amber-700/50"></span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Char Pit nació de la pasión por la auténtica cocina de asador. Desde nuestros inicios, 
              nos hemos dedicado a ofrecer los mejores cortes de carne a la parrilla con un toque único, 
              utilizando ingredientes frescos y técnicas culinarias que realzan el sabor natural de nuestros productos.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nuestra filosofía se basa en el respeto por la materia prima y en la cocción perfecta a la brasa, 
              logrando así platos con un sabor auténtico y diferenciado que ha conquistado a nuestros comensales.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl border border-gray-700">
              <Image 
                src="/images/aboutImage.webp" 
                alt="The Char Pit" 
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              />
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-900/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-800/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-14">
            <span className="inline-block px-4 py-1 bg-amber-900/70 text-amber-300 rounded-sm text-sm font-medium mb-4 uppercase tracking-wider">Especialidades de la Casa</span>
            <h2 className="text-3xl font-bold mb-4 text-amber-500 font-heading">Nuestras Especialidades</h2>
            <div className="w-24 h-1 bg-amber-700/50 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">Descubre nuestros platos más populares, preparados con ingredientes frescos y las mejores carnes a la parrilla.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent -z-10 rounded-xl"></div>
            {/* Plato 1 - Costillas */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col h-full overflow-hidden">
              <div className="border-b border-amber-800/30 pb-4 mb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-amber-400 font-heading">Costillas BBQ</h3>
                <div className="bg-amber-900/40 px-3 py-1 rounded-sm border border-amber-800/50">
                  <span className="text-amber-300 font-bold">18.95 €</span>
                </div>
              </div>
              <div className="mb-4 -mx-6 -mt-2 overflow-hidden">
                <Image 
                  src="/images/costillas.png" 
                  alt="Costillas BBQ"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-gray-300 mb-4 flex-grow">Jugosas costillas de cerdo cocinadas a baja temperatura y terminadas a la parrilla con nuestra salsa BBQ casera.</p>
              <div className="bg-gray-900/80 p-3 rounded-md border-l-4 border-amber-700">
                <p className="text-sm text-gray-400 text-left"><span className="font-medium text-amber-400">Ingredientes:</span> Costillas de cerdo, salsa BBQ casera, especias seleccionadas</p>
              </div>
            </div>
            
            {/* Plato 2 - Burrito */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col h-full overflow-hidden">
              <div className="border-b border-amber-800/30 pb-4 mb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-amber-400 font-heading">Burrito Gringo</h3>
                <div className="bg-amber-900/40 px-3 py-1 rounded-sm border border-amber-800/50">
                  <span className="text-amber-300 font-bold">12.50 €</span>
                </div>
              </div>
              <div className="mb-4 -mx-6 -mt-2 overflow-hidden">
                <Image 
                  src="/images/burrito.png" 
                  alt="Burrito Gringo"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-gray-300 mb-4 flex-grow">Delicioso burrito relleno de carne de ternera a la parrilla, arroz, frijoles y queso, envuelto en una tortilla de trigo.</p>
              <div className="bg-gray-900/80 p-3 rounded-md border-l-4 border-amber-700">
                <p className="text-sm text-gray-400 text-left"><span className="font-medium text-amber-400">Ingredientes:</span> Tortilla de trigo, carne de ternera, arroz, frijoles, queso, pico de gallo</p>
              </div>
            </div>
            
            {/* Plato 3 - Nachos */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col h-full overflow-hidden">
              <div className="border-b border-amber-800/30 pb-4 mb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-amber-400 font-heading">Nachos Supremos</h3>
                <div className="bg-amber-900/40 px-3 py-1 rounded-sm border border-amber-800/50">
                  <span className="text-amber-300 font-bold">10.95 €</span>
                </div>
              </div>
              <div className="mb-4 -mx-6 -mt-2 overflow-hidden">
                <Image 
                  src="/images/nachos.png" 
                  alt="Nachos Supremos"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-gray-300 mb-4 flex-grow">Crujientes nachos de maíz cubiertos con queso fundido, guacamole, crema agria, jalapeños y pico de gallo.</p>
              <div className="bg-gray-900/80 p-3 rounded-md border-l-4 border-amber-700">
                <p className="text-sm text-gray-400 text-left"><span className="font-medium text-amber-400">Ingredientes:</span> Totopos de maíz, queso cheddar, guacamole, crema agria, jalapeños, pico de gallo</p>
              </div>
            </div>
          </div>
          
          <div className="inline-block border-t border-amber-800/30 pt-8 px-12">
            <Link 
              href="/menu" 
              className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-sm transition duration-300 shadow-md uppercase tracking-wider text-sm border border-amber-600/50"
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
