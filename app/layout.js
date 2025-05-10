import "./globals.css";
import "./leaflet-fix.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Char Pit - Asador & Grill",
  description: "Auténtica cocina de asador en un ambiente elegante. Reserva tu mesa ahora.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="no-horizontal-scroll">
      <body className="antialiased no-horizontal-scroll">
        <AuthProvider>
          <Navbar />
          <main className="no-horizontal-scroll">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
