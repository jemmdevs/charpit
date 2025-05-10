'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  const [productos, setProductos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch('/api/productos');
        if (!respuesta.ok) {
          throw new Error('Error al cargar los productos');
        }
        const datos = await respuesta.json();
        setProductos(datos);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  const categorias = ['todos', 'entrantes', 'ensaladas', 'pasta', 'fundidos del oeste', 'burritos', 'pollo', 'costillas', 'ternera'];
  
  const productosFiltrados = categoriaActiva === 'todos' 
    ? productos 
    : productos.filter(producto => producto.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6 inline-block">
            <img src="/images/logocharpit.jpg" alt="The Char Pit" className="h-24 w-auto mx-auto rounded-md border border-amber-700/50" />
          </div>
          <h1 className="text-4xl font-bold text-amber-500 mb-3 font-heading">Nuestra Carta</h1>
          <div className="w-24 h-1 bg-amber-600/40 mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-amber-700/30 w-16"></div>
            <div className="text-amber-500">★</div>
            <div className="h-px bg-amber-700/30 w-16"></div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">Descubre nuestra selección de especialidades a la parrilla, preparadas con los mejores ingredientes y técnicas de asador.</p>
        </div>
        
        {/* Filtro de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-6 py-2 font-medium transition-colors ${
                categoriaActiva === categoria
                  ? 'border-b-2 border-amber-600 text-amber-400 font-bold'
                  : 'text-gray-400 hover:text-amber-400 border-b-2 border-transparent hover:border-amber-700'
              }`}
            >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </button>
          ))}
        </div>

        {/* Lista de productos */}
        {cargando ? (
          <div className="text-center py-12 text-amber-400">
            <p className="text-xl">Cargando productos...</p>
          </div>
        ) : productosFiltrados.length > 0 ? (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Marca de agua */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <img src="/images/logocharpit.jpg" alt="" className="w-96 h-96 object-contain" />
            </div>
            
            {/* Decoración esquinas */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-amber-700/40"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-amber-700/40"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-amber-700/40"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-amber-700/40"></div>
            
            <div className="relative z-10">
              {/* Agrupar productos por categoría */}
              {['entrantes', 'ensaladas', 'pasta', 'fundidos del oeste', 'burritos', 'pollo', 'costillas', 'ternera'].map(categoria => {
                const productosCategoria = productosFiltrados.filter(
                  p => categoriaActiva === 'todos' ? p.categoria === categoria : true
                );
                
                if (categoriaActiva !== 'todos' && categoriaActiva !== categoria) return null;
                if (productosCategoria.length === 0) return null;
                
                return (
                  <div key={categoria} className="mb-10 last:mb-0">
                    {categoriaActiva === 'todos' && (
                      <div className="mb-4 border-b border-amber-700/40 pb-2">
                        <h2 className="text-2xl font-heading text-amber-500 relative">
                          {categoria.charAt(0).toUpperCase() + categoria.slice(1)}s
                        </h2>
                      </div>
                    )}
                    
                    <div className="space-y-6">
                      {productosCategoria.map((producto) => (
                        <div key={producto._id} className="flex justify-between items-start border-b border-dotted border-gray-700 pb-4 group hover:bg-gray-700/50 transition-colors p-2 -mx-2 rounded">
                          <div className="flex-grow pr-4">
                            <h3 className="text-lg font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                              {producto.nombre}
                            </h3>
                            <p className="text-gray-300 mt-1 text-sm">{producto.descripcion}</p>
                            <p className="text-gray-400 mt-2 text-xs">
                              <span className="font-medium text-amber-400/80">Ingredientes:</span> {producto.ingredientes}
                            </p>
                          </div>
                          <div className="text-amber-300 font-bold whitespace-nowrap text-lg">
                            {producto.precio.toFixed(2)} €
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-800 rounded-lg shadow-xl border border-gray-700 max-w-4xl mx-auto">
            <div className="max-w-md mx-auto">
              <div className="border-b border-gray-700 pb-4 mb-4">
                <h3 className="text-xl font-heading text-amber-500">Categoría sin productos</h3>
              </div>
              <p className="text-gray-300 mb-4">Actualmente no hay productos disponibles en esta categoría.</p>
            </div>
          </div>
        )}

        {/* Botón para volver */}
        <div className="mt-16 text-center">
          <div className="inline-block border-t border-gray-700 pt-6 px-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-amber-400 font-medium py-3 px-8 rounded-sm transition duration-300 shadow-md border border-amber-700/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Volver a Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}