'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('reservas');
  const [reservas, setReservas] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

  // Redireccionar si no está autenticado
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin-panel/login');
    }
  }, [status, router]);

  // Cargar datos según la pestaña activa
  useEffect(() => {
    if (status === 'authenticated') {
      if (activeTab === 'reservas') {
        cargarReservas();
      } else if (activeTab === 'productos') {
        cargarProductos();
      }
    }
  }, [activeTab, status]);

  // Función para cargar reservas
  const cargarReservas = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch('/api/reservas');
      if (!respuesta.ok) {
        throw new Error('Error al cargar reservas');
      }
      const datos = await respuesta.json();
      setReservas(datos);
    } catch (error) {
      console.error('Error:', error);
      setMensaje({ tipo: 'error', texto: 'Error al cargar las reservas' });
    } finally {
      setCargando(false);
    }
  };

  // Función para cargar productos
  const cargarProductos = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch('/api/productos');
      if (!respuesta.ok) {
        throw new Error('Error al cargar productos');
      }
      const datos = await respuesta.json();
      setProductos(datos);
    } catch (error) {
      console.error('Error:', error);
      setMensaje({ tipo: 'error', texto: 'Error al cargar los productos' });
    } finally {
      setCargando(false);
    }
  };

  // Función para actualizar estado de reserva
  const actualizarReserva = async (id, estado) => {
    try {
      const respuesta = await fetch('/api/reservas', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, estado }),
      });

      if (!respuesta.ok) {
        throw new Error('Error al actualizar reserva');
      }

      // Actualizar la lista de reservas
      cargarReservas();
      setMensaje({ tipo: 'exito', texto: 'Reserva actualizada correctamente' });
    } catch (error) {
      console.error('Error:', error);
      setMensaje({ tipo: 'error', texto: 'Error al actualizar la reserva' });
    }
  };

  // Si está cargando la sesión
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl">Cargando...</p>
      </div>
    );
  }

  // Si está autenticado, mostrar el panel
  if (status === 'authenticated') {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-amber-600 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Panel de Administración - Char Pit</h1>
            <div className="flex items-center gap-4">
              <span>Hola, {session.user.name}</span>
              <button 
                onClick={() => router.push('/api/auth/signout')}
                className="bg-white text-amber-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-4">
          {mensaje.texto && (
            <div className={`p-4 mb-6 rounded-md ${
              mensaje.tipo === 'exito' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {mensaje.texto}
              <button 
                className="ml-4 font-bold"
                onClick={() => setMensaje({ tipo: '', texto: '' })}
              >
                ×
              </button>
            </div>
          )}

          {/* Pestañas de navegación */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-3 px-6 font-medium ${activeTab === 'reservas' ? 'border-b-2 border-amber-600 text-amber-600' : 'text-gray-500 hover:text-amber-600'}`}
              onClick={() => setActiveTab('reservas')}
            >
              Reservas
            </button>
            <button
              className={`py-3 px-6 font-medium ${activeTab === 'productos' ? 'border-b-2 border-amber-600 text-amber-600' : 'text-gray-500 hover:text-amber-600'}`}
              onClick={() => setActiveTab('productos')}
            >
              Carta de Productos
            </button>
          </div>

          {/* Contenido según pestaña activa */}
          {activeTab === 'reservas' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Gestión de Reservas</h2>
                <button 
                  onClick={cargarReservas}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors"
                >
                  Actualizar
                </button>
              </div>

              {cargando ? (
                <p className="text-center py-8">Cargando reservas...</p>
              ) : reservas.length > 0 ? (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha y Hora</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comensales</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {reservas.map((reserva) => (
                        <tr key={reserva._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{reserva.nombre} {reserva.apellidos}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{reserva.email}</div>
                            <div className="text-sm text-gray-500">{reserva.telefono}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {new Date(reserva.fecha).toLocaleDateString('es-ES')}
                            </div>
                            <div className="text-sm text-gray-500">{reserva.hora}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {reserva.comensales}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              reserva.estado === 'confirmada' ? 'bg-green-100 text-green-800' :
                              reserva.estado === 'cancelada' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {reserva.estado.charAt(0).toUpperCase() + reserva.estado.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {reserva.estado === 'pendiente' && (
                              <>
                                <button
                                  onClick={() => actualizarReserva(reserva._id, 'confirmada')}
                                  className="text-green-600 hover:text-green-900 mr-3"
                                >
                                  Confirmar
                                </button>
                                <button
                                  onClick={() => actualizarReserva(reserva._id, 'cancelada')}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Cancelar
                                </button>
                              </>
                            )}
                            {reserva.estado === 'confirmada' && (
                              <button
                                onClick={() => actualizarReserva(reserva._id, 'cancelada')}
                                className="text-red-600 hover:text-red-900"
                              >
                                Cancelar
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 bg-white rounded-lg shadow">
                  <p className="text-gray-500">No hay reservas disponibles</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'productos' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Gestión de Productos</h2>
                <div className="flex gap-4">
                  <button 
                    onClick={cargarProductos}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition-colors"
                  >
                    Actualizar
                  </button>
                  <Link 
                    href="/admin-panel/productos/nuevo"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Nuevo Producto
                  </Link>
                </div>
              </div>

              {cargando ? (
                <p className="text-center py-8">Cargando productos...</p>
              ) : productos.length > 0 ? (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {productos.map((producto) => (
                        <tr key={producto._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{producto.nombre}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {producto.precio.toFixed(2)} €
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Link 
                              href={`/admin-panel/productos/editar/${producto._id}`}
                              className="text-amber-600 hover:text-amber-900 mr-3"
                            >
                              Editar
                            </Link>
                            <button
                              className="text-red-600 hover:text-red-900"
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 bg-white rounded-lg shadow">
                  <p className="text-gray-500">No hay productos disponibles</p>
                  <Link 
                    href="/admin-panel/productos/nuevo"
                    className="mt-4 inline-block text-amber-600 hover:text-amber-800"
                  >
                    Añadir el primer producto
                  </Link>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    );
  }

  // Si llega aquí, no está autenticado
  return null;
}