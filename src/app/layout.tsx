import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael Romanenko",
  description: "Michael Romanenko est né à Paris en 1972. Il vit et travaille à Paris. Représenté à ses débuts par la galerie Hilario Galguera (Mexico), son travail est maintenant défendu par la galerie La Fonte (Montréal).",
  icons: {
    icon: [
      {
        url: "https://ext.same-assets.com/469626687/4172846660.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Michael Romanenko",
    description: "Michael Romanenko est né à Paris en 1972. Il vit et travaille à Paris. Représenté à ses débuts par la galerie Hilario Galguera (Mexico), son travail est maintenant défendu par la galerie La Fonte (Montréal).",
    images: [
      {
        url: "https://ext.same-assets.com/469626687/4172846660.png",
        width: 800,
        height: 600,
        alt: "Michael Romanenko",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
