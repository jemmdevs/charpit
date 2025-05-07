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
        <h1 className="text-4xl font-bold text-center mb-8">Nuestra Carta</h1>
        
        {/* Filtro de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                categoriaActiva === categoria
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100'
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosFiltrados.map((producto) => (
              <div key={producto._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  {producto.imagen ? (
                    <Image 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Sin imagen
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{producto.nombre}</h3>
                    <span className="text-amber-600 font-bold">{producto.precio.toFixed(2)} €</span>
                  </div>
                  <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                  <p className="text-sm text-gray-500 italic">Ingredientes: {producto.ingredientes}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-xl">No hay productos en esta categoría</p>
          </div>
        )}

        {/* Botón para volver */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}