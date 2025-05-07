'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NuevoProducto() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    categoria: '',
    nombre: '',
    descripcion: '',
    ingredientes: '',
    precio: '',
    imagen: '',
    orden: '0'
  });
  
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  // Redireccionar si no está autenticado
  if (status === 'unauthenticated') {
    router.push('/admin-panel/login');
    return null;
  }

  // Si está cargando la sesión
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl">Cargando...</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje({ tipo: '', texto: '' });

    try {
      // Convertir precio a número
      const productoData = {
        ...formData,
        precio: parseFloat(formData.precio),
        orden: parseInt(formData.orden, 10) || 0
      };

      const respuesta = await fetch('/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productoData),
      });

      if (!respuesta.ok) {
        const error = await respuesta.json();
        throw new Error(error.mensaje || 'Error al crear el producto');
      }

      const datos = await respuesta.json();
      setMensaje({
        tipo: 'exito',
        texto: 'Producto creado correctamente'
      });
      
      // Limpiar formulario después de éxito
      setFormData({
        categoria: '',
        nombre: '',
        descripcion: '',
        ingredientes: '',
        precio: '',
        imagen: '',
        orden: '0'
      });
      
      // Redireccionar al dashboard después de 2 segundos
      setTimeout(() => {
        router.push('/admin-panel/dashboard');
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setMensaje({
        tipo: 'error',
        texto: error.message
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden container-with-border">
          <div className="bg-amber-600 text-white p-4">
            <h1 className="text-2xl font-bold">Nuevo Producto</h1>
          </div>
          
          <div className="p-6">
            {mensaje.texto && (
              <div className={`p-4 mb-6 rounded-md ${
                mensaje.tipo === 'exito' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {mensaje.texto}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-dark mb-1">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="categoria" className="block text-sm font-medium text-dark mb-1">Categoría *</label>
                  <select
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="entrantes">Entrantes</option>
                    <option value="ensaladas">Ensaladas</option>
                    <option value="pasta">Pasta</option>
                    <option value="fundidos del oeste">Fundidos del Oeste</option>
                    <option value="burritos">Burritos</option>
                    <option value="pollo">Pollo</option>
                    <option value="costillas">Costillas</option>
                    <option value="ternera">Ternera</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-dark mb-1">Descripción *</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="ingredientes" className="block text-sm font-medium text-dark mb-1">Ingredientes *</label>
                <textarea
                  id="ingredientes"
                  name="ingredientes"
                  value={formData.ingredientes}
                  onChange={handleChange}
                  required
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
                  placeholder="Separados por comas (ej: tomate, cebolla, cilantro)"
                ></textarea>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="precio" className="block text-sm font-medium text-dark mb-1">Precio (€) *</label>
                  <input
                    type="number"
                    id="precio"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="orden" className="block text-sm font-medium text-dark mb-1">Orden</label>
                  <input
                    type="number"
                    id="orden"
                    name="orden"
                    value={formData.orden}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="imagen" className="block text-sm font-medium text-dark mb-1">URL de imagen (opcional)</label>
                  <input
                    type="text"
                    id="imagen"
                    name="imagen"
                    value={formData.imagen}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <Link
                  href="/admin-panel/dashboard"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  disabled={enviando}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50"
                >
                  {enviando ? 'Guardando...' : 'Guardar Producto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
