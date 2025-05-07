import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Producto } from '@/models/index';

// Conexión a MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

// GET: Obtener todos los productos
export async function GET() {
  try {
    await connectDB();
    const productos = await Producto.find({}).sort({ categoria: 1, orden: 1 });
    return NextResponse.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return NextResponse.json(
      { mensaje: 'Error al obtener productos' },
      { status: 500 }
    );
  }
}

// POST: Crear un nuevo producto (solo para administradores)
export async function POST(request) {
  try {
    const data = await request.json();
    await connectDB();
    
    const nuevoProducto = new Producto(data);
    await nuevoProducto.save();
    
    return NextResponse.json(
      { mensaje: 'Producto creado correctamente', producto: nuevoProducto },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al crear producto:', error);
    return NextResponse.json(
      { mensaje: 'Error al crear el producto' },
      { status: 500 }
    );
  }
}