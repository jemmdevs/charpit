'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function AdminPanel() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    // Si el usuario está autenticado, redirigir al dashboard
    // Si no está autenticado, redirigir a la página de login
    if (status === 'authenticated') {
      router.push('/admin-panel/dashboard');
    } else if (status === 'unauthenticated') {
      router.push('/admin-panel/login');
    }
    // No redirigir durante la carga (status === 'loading')
  }, [status, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-amber-600 mb-4">Panel de Administración</h1>
        <p className="text-gray-800 mb-4">Cargando...</p>
      </div>
    </div>
  );
}