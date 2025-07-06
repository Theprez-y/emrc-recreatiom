import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSInitializer from './components/AOSInitializer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EMRC Energy Solutions",
  description: "Expert energy consulting and solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}