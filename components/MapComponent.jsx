'use client';

import { useState, useEffect } from 'react';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Componente que se encarga de la carga del mapa de manera segura
export default function MapComponent() {
  // Estado para controlar si estamos en el cliente
  const [isMounted, setIsMounted] = useState(false);
  
  // Efecto para asegurar que el componente solo se renderice en el cliente
  useEffect(() => {
    setIsMounted(true);
    
    // Solución para el problema con los estilos CSS de Leaflet que a veces no se cargan
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  // Coordenadas del restaurante en Alcalá de Guadaíra, Sevilla
  const position = [37.342083, -5.823167];
  
  // Solución para el problema de iconos en Leaflet con Next.js
  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  // No renderizar nada hasta que estemos en el cliente
  if (!isMounted) {
    return <div className="h-full w-full bg-gray-700 flex items-center justify-center">
      <p className="text-amber-400">Cargando mapa...</p>
    </div>;
  }
  
  return (
    <MapContainer 
      center={position} 
      zoom={15} 
      style={{ height: '100%', width: '100%' }}
      className="z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup className="custom-popup">
          <div className="p-1">
            <h3 className="font-bold text-gray-800 font-heading">The Char Pit</h3>
            <p className="text-gray-700 text-sm">Av. de la Escultora &apos;la Roldana&apos;, 15, local 14</p>
            <p className="text-gray-700 text-sm">41500 Alcalá de Guadaíra, Sevilla</p>
            <a 
              href="https://maps.google.com/?q=37.342083,-5.823167" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-800 text-sm font-medium mt-2 inline-block"
            >
              Ver en Google Maps
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}