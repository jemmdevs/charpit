'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Solución para el problema de iconos en Leaflet con Next.js
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function MapComponent() {
  // Coordenadas del restaurante en Alcalá de Guadaíra, Sevilla
  // Convertidas de 37°20'31.5"N 5°49'23.4"W a formato decimal
  const position = [37.342083, -5.823167]; // Coordenadas exactas para Av. de la Escultora 'la Roldana', 15
  
  return (
    <MapContainer 
      center={position} 
      zoom={15} 
      style={{ height: '100%', width: '100%' }}
      className="z-10 overflow-hidden"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup className="custom-popup">
          <div className="p-1">
            <h3 className="font-bold text-gray-800 font-heading">The Char Pit</h3>
            <p className="text-gray-700 text-sm">Av. de la Escultora 'la Roldana', 15, local 14</p>
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