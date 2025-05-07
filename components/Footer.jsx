export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Char Pit</h3>
            <p className="mb-2">Calle Principal 123</p>
            <p className="mb-2">Ciudad de México, CP 12345</p>
            <p className="mb-2">Teléfono: +52 55 1234 5678</p>
            <p>Email: info@charpit.com</p>
          </div>
          
          {/* Horario */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <p className="mb-2">Lunes - Jueves: 12:00 - 23:00</p>
            <p className="mb-2">Viernes - Sábado: 12:00 - 00:00</p>
            <p>Domingo: 12:00 - 22:00</p>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-amber-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="/menu" className="hover:text-amber-400 transition-colors">Carta</a>
              </li>
              <li>
                <a href="/reservas" className="hover:text-amber-400 transition-colors">Reservas</a>
              </li>
              <li>
                <a href="/ubicacion" className="hover:text-amber-400 transition-colors">Ubicación</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Char Pit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}