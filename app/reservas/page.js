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
    <div className="min-h-screen bg-gray-900 py-16 px-4 overflow-hidden">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-500 mb-3 font-heading">Reserva tu mesa</h1>
          <div className="w-24 h-1 bg-amber-600/40 mx-auto mb-3"></div>
          <p className="text-gray-300">Reserva en unos simples pasos y disfruta de la mejor experiencia gastronómica</p>
        </div>
        
        {mensaje.texto && (
          <div className={`p-4 mb-6 rounded-md ${
            mensaje.tipo === 'exito' ? 'bg-green-900/70 text-green-200 border border-green-700' : 'bg-red-900/70 text-red-200 border border-red-700'
          }`}>
            {mensaje.texto}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-amber-400 mb-2 uppercase tracking-wider">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-sm focus:ring-amber-500 focus:border-amber-500 text-gray-100 placeholder-gray-400"
              />
            </div>
            
            <div>
              <label htmlFor="apellidos" className="block text-sm font-medium text-amber-400 mb-2 uppercase tracking-wider">Apellidos *</label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
                placeholder="Tus apellidos"
                className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-sm focus:ring-amber-500 focus:border-amber-500 text-gray-100 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-amber-400 mb-2 uppercase tracking-wider">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-sm focus:ring-amber-500 focus:border-amber-500 text-gray-100 placeholder-gray-400"
              />
            </div>
            
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-amber-400 mb-2 uppercase tracking-wider">Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                placeholder="Ej: 666 123 456"
                className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-sm focus:ring-amber-500 focus:border-amber-500 text-gray-100 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="fecha" className="block text-sm font-medium text-amber-400 mb-2 uppercase tracking-wider">Fecha *</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-sm focus:ring-amber-500 focus:border-amber-500 text-gray-100"
              />
            </div>
            
            <div>
              <label htmlFor="hora" className="block text-sm font-medium text-amber-400 mb-2 uppercase tracking-wider">Hora *</label>
              <select
                id="hora"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-sm focus:ring-amber-500 focus:border-amber-500 text-gray-100"
              >
                <option value="" disabled>Selecciona una hora</option>
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
              <label htmlFor="comensales" className="block text-sm font-medium text-amber-400 mb-2 uppercase tracking-wider">Comensales *</label>
              <select
                id="comensales"
                name="comensales"
                value={formData.comensales}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-sm focus:ring-amber-500 focus:border-amber-500 text-gray-100"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="notas" className="block text-sm font-medium text-amber-400 mb-2 uppercase tracking-wider">Notas o peticiones especiales</label>
            <textarea
              id="notas"
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              rows="4"
              placeholder="Indícanos tus preferencias, alergias o cualquier detalle importante"
              className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-sm focus:ring-amber-500 focus:border-amber-500 text-gray-100 placeholder-gray-400"
            ></textarea>
          </div>

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={enviando}
              className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-10 rounded-sm transition duration-300 disabled:opacity-50 uppercase tracking-wider text-sm border border-amber-600/50"
            >
              {enviando ? 'Procesando...' : 'Confirmar Reserva'}
            </button>
          </div>
        </form>

        <div className="mt-10 pt-6 text-center border-t border-gray-700">
          <p className="text-gray-400 mb-3 text-sm">Una vez recibida tu reserva, te enviaremos un correo de confirmación.</p>
          <Link 
            href="/" 
            className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}