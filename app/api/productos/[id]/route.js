import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Producto } from '@/models/index';

// Conexión a MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

// GET: Obtener un producto específico por ID
export async function GET(request, { params }) {
  const { id } = params;
  
  try {
    await connectDB();
    
    // Validar que el ID sea un ObjectId válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { mensaje: 'ID de producto no válido' },
        { status: 400 }
      );
    }
    
    const producto = await Producto.findById(id);
    
    if (!producto) {
      return NextResponse.json(
        { mensaje: 'Producto no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(producto);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    return NextResponse.json(
      { mensaje: 'Error al obtener el producto' },
      { status: 500 }
    );
  }
}

// PUT: Actualizar un producto existente
export async function PUT(request, { params }) {
  const { id } = params;
  
  try {
    await connectDB();
    
    // Validar que el ID sea un ObjectId válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { mensaje: 'ID de producto no válido' },
        { status: 400 }
      );
    }
    
    const data = await request.json();
    
    // Buscar y actualizar el producto
    const productoActualizado = await Producto.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );
    
    if (!productoActualizado) {
      return NextResponse.json(
        { mensaje: 'Producto no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      mensaje: 'Producto actualizado correctamente',
      producto: productoActualizado
    });
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    return NextResponse.json(
      { mensaje: 'Error al actualizar el producto' },
      { status: 500 }
    );
  }
}

// DELETE: Eliminar un producto
export async function DELETE(request, { params }) {
  const { id } = params;
  
  try {
    await connectDB();
    
    // Validar que el ID sea un ObjectId válido de MongoDB
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { mensaje: 'ID de producto no válido' },
        { status: 400 }
      );
    }
    
    // Buscar y eliminar el producto
    const productoEliminado = await Producto.findByIdAndDelete(id);
    
    if (!productoEliminado) {
      return NextResponse.json(
        { mensaje: 'Producto no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      mensaje: 'Producto eliminado correctamente'
    });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    return NextResponse.json(
      { mensaje: 'Error al eliminar el producto' },
      { status: 500 }
    );
  }
}
