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
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
          precedence="default"
        />
      </head>
      <body className="overflow-x-hidden">
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
