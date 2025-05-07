'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Reservas() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales: 1,
    notas: ''
  });
  
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

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
      const respuesta = await fetch('/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const datos = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(datos.mensaje || 'Error al procesar la reserva');
      }

      setMensaje({
        tipo: 'exito',
        texto: 'Reserva realizada con éxito. Te hemos enviado un correo de confirmación.'
      });
      
      // Limpiar formulario después de éxito
      setFormData({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        fecha: '',
        hora: '',
        comensales: 1,
        notas: ''
      });
    } catch (error) {
      setMensaje({
        tipo: 'error',
        texto: error.message
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Reserva tu mesa</h1>
        
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
              <label htmlFor="apellidos" className="block text-sm font-medium text-dark mb-1">Apellidos *</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
              />
            </div>
            
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-dark mb-1">Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="fecha" className="block text-sm font-medium text-dark mb-1">Fecha *</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
              />
            </div>
            
            <div>
              <label htmlFor="hora" className="block text-sm font-medium text-dark mb-1">Hora *</label>
              <select
                id="hora"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
              >
                <option value="">Selecciona una hora</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
                <option value="22:00">22:00</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="comensales" className="block text-sm font-medium text-dark mb-1">Comensales *</label>
              <select
                id="comensales"
                name="comensales"
                value={formData.comensales}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="notas" className="block text-sm font-medium text-dark mb-1">Notas o peticiones especiales</label>
            <textarea
              id="notas"
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-gray-800"
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={enviando}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 disabled:opacity-50"
            >
              {enviando ? 'Procesando...' : 'Confirmar Reserva'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="text-amber-600 hover:text-amber-800 font-medium"
          >
            ← Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}