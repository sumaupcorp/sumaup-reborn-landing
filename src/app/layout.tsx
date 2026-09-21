import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SUMAUP360 | Gestiona tus impuestos y negocio en Perú",
    template: "%s · SUMAUP360",
  },
  description: siteConfig.description,
  // El favicon usa la convencion de archivos de Next: app/icon.png, app/favicon.ico,
  // app/apple-icon.png (el isotipo circular de la app Suma).
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}
