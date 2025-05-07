import mongoose from 'mongoose';

// Esquema para productos (carta del restaurante)
const ProductoSchema = new mongoose.Schema({
  categoria: {
    type: String,
    required: true,
    enum: ['entrada', 'plato', 'postre', 'bebida']
  },
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true
  },
  ingredientes: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  imagen: {
    type: String,
    required: false
  },
  orden: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

// Esquema para reservas
const ReservaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellidos: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  telefono: {
    type: String,
    required: true,
    trim: true
  },
  fecha: {
    type: Date,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  comensales: {
    type: Number,
    required: true,
    min: 1
  },
  notas: {
    type: String,
    required: false
  },
  estado: {
    type: String,
    enum: ['pendiente', 'confirmada', 'cancelada'],
    default: 'pendiente'
  }
}, { timestamps: true });

// Exportar modelos (con verificación para evitar errores de compilación en desarrollo)
const Producto = mongoose.models.Producto || mongoose.model('Producto', ProductoSchema);
const Reserva = mongoose.models.Reserva || mongoose.model('Reserva', ReservaSchema);

export { Producto, Reserva };