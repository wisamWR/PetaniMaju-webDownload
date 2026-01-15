import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://petanimaju.vercel.app'),
  title: "PetaniMaju - Solusi Digital Pertanian Indonesia",
  description: "Aplikasi pendamping petani untuk meningkatkan hasil panen dengan teknologi modern. Download sekarang!",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PetaniMaju - Solusi Digital Pertanian Indonesia",
    description: "Aplikasi pendamping petani untuk meningkatkan hasil panen dengan teknologi modern.",
    images: ["/tampilan_app.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${jakarta.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
