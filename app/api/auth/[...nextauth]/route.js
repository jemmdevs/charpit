import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';

// Determinar la URL correcta para NextAuth
const useSecureCookies = process.env.VERCEL_URL ? true : false;
const nextAuthUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.NEXTAUTH_URL;

// Configuración de NextAuth
const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Credenciales',
      credentials: {
        username: { label: 'Usuario', type: 'text' },
        password: { label: 'Contraseña', type: 'password' }
      },
      async authorize(credentials) {
        // Verificar las credenciales del administrador
        if (credentials.username === 'charpit' && credentials.password === 'charpit123') {
          return {
            id: '1',
            name: 'Administrador',
            email: 'admin@charpit.com',
            role: 'admin'
          };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 días
  },
  callbacks: {
    async jwt({ token, user }) {
      // Añadir el rol al token JWT
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Añadir el rol a la sesión
      session.user.role = token.role;
      return session;
    }
  },
  pages: {
    signIn: '/admin-panel/login',
    error: '/admin-panel/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  url: nextAuthUrl,
  useSecureCookies: useSecureCookies,
});

export { handler as GET, handler as POST };