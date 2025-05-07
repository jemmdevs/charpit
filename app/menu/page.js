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

  const categorias = ['todos', 'entrada', 'plato', 'postre', 'bebida'];
  
  const productosFiltrados = categoriaActiva === 'todos' 
    ? productos 
    : productos.filter(producto => producto.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold heading-dark mb-3">Nuestra Carta</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestra selección de auténticos platos mexicanos, preparados con ingredientes frescos y recetas tradicionales.</p>
        </div>
        
        {/* Filtro de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 bg-amber-50 py-4 px-6 rounded-lg border border-amber-100 max-w-3xl mx-auto">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                categoriaActiva === categoria
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200 hover:shadow-sm'
              }`}
            >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </button>
          ))}
        </div>

        {/* Lista de productos */}
        {cargando ? (
          <div className="text-center py-12">
            <p className="text-xl">Cargando productos...</p>
          </div>
        ) : productosFiltrados.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {productosFiltrados.map((producto) => (
              <div key={producto._id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col">
                <div className="border-b border-amber-200 pb-4 mb-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold heading-dark">{producto.nombre}</h3>
                  <div className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    <span className="text-amber-700 font-bold">{producto.precio.toFixed(2)} €</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <p className="text-gray-700 mb-4 leading-relaxed">{producto.descripcion}</p>
                  
                  <div className="bg-gray-50 p-3 rounded-md border-l-4 border-amber-400">
                    <p className="text-sm text-gray-600"><span className="font-medium">Ingredientes:</span> {producto.ingredientes}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                    {producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="max-w-md mx-auto">
              <div className="border-b border-amber-200 pb-4 mb-4">
                <h3 className="text-xl font-bold heading-dark">Categoría sin productos</h3>
              </div>
              <p className="text-gray-700 mb-4">Actualmente no hay productos disponibles en esta categoría.</p>
              <div className="inline-block bg-amber-50 px-4 py-2 rounded-md border border-amber-200">
                <p className="text-amber-700">Por favor, prueba con otra categoría o vuelve más tarde.</p>
              </div>
            </div>
          </div>
        )}

        {/* Botón para volver */}
        <div className="mt-16 text-center">
          <div className="inline-block border-t border-amber-200 pt-6 px-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-amber-700 font-medium py-3 px-6 rounded-md border border-amber-300 transition duration-300 shadow-sm"
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