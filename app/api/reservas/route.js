import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Reserva } from '@/models/index';

// Conexión a MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

// GET: Obtener todas las reservas (solo para administradores)
export async function GET() {
  try {
    await connectDB();
    const reservas = await Reserva.find({}).sort({ fecha: 1, hora: 1 });
    return NextResponse.json(reservas);
  } catch (error) {
    console.error('Error al obtener reservas:', error);
    return NextResponse.json(
      { mensaje: 'Error al obtener reservas' },
      { status: 500 }
    );
  }
}

// POST: Crear una nueva reserva
export async function POST(request) {
  try {
    const data = await request.json();
    await connectDB();
    
    // Validaciones básicas
    if (!data.nombre || !data.apellidos || !data.email || !data.telefono || !data.fecha || !data.hora || !data.comensales) {
      return NextResponse.json(
        { mensaje: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }
    
    // Validar que la fecha no sea en el pasado
    const fechaReserva = new Date(data.fecha);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    if (fechaReserva < hoy) {
      return NextResponse.json(
        { mensaje: 'La fecha de reserva no puede ser en el pasado' },
        { status: 400 }
      );
    }
    
    // Validar horario de apertura (simplificado)
    const horaReserva = data.hora.split(':')[0];
    if (horaReserva < 12 || horaReserva > 22) {
      return NextResponse.json(
        { mensaje: 'El horario de reserva debe estar entre las 12:00 y las 22:00' },
        { status: 400 }
      );
    }
    
    // Verificar si ya existe una reserva similar
    const reservaExistente = await Reserva.findOne({
      fecha: data.fecha,
      hora: data.hora,
      estado: { $ne: 'cancelada' }
    });
    
    if (reservaExistente) {
      return NextResponse.json(
        { mensaje: 'Ya existe una reserva para esta fecha y hora' },
        { status: 409 }
      );
    }
    
    // Crear la reserva
    const nuevaReserva = new Reserva(data);
    await nuevaReserva.save();
    
    return NextResponse.json(
      { mensaje: 'Reserva creada correctamente', reserva: nuevaReserva },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al crear reserva:', error);
    return NextResponse.json(
      { mensaje: 'Error al procesar la reserva' },
      { status: 500 }
    );
  }
}

// PUT: Actualizar estado de reserva (solo para administradores)
export async function PUT(request) {
  try {
    const data = await request.json();
    await connectDB();
    
    if (!data.id || !data.estado) {
      return NextResponse.json(
        { mensaje: 'ID y estado son obligatorios' },
        { status: 400 }
      );
    }
    
    const reserva = await Reserva.findById(data.id);
    
    if (!reserva) {
      return NextResponse.json(
        { mensaje: 'Reserva no encontrada' },
        { status: 404 }
      );
    }
    
    reserva.estado = data.estado;
    await reserva.save();
    
    return NextResponse.json(
      { mensaje: 'Reserva actualizada correctamente', reserva }
    );
  } catch (error) {
    console.error('Error al actualizar reserva:', error);
    return NextResponse.json(
      { mensaje: 'Error al actualizar la reserva' },
      { status: 500 }
    );
  }
}