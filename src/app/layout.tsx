import type { Metadata } from "next";
import { Anton, Caveat, La_Belle_Aurore } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

const laBelle = La_Belle_Aurore({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-la-belle",
});

export const metadata: Metadata = {
  title: "Cinematic Portfolio | Luxury UI/UX Designer",
  description: "Premium cinematic portfolio of a UI/UX designer and creative developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased selection:bg-orange-500/30 selection:text-orange-200">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${anton.variable} ${caveat.variable} ${laBelle.variable} min-h-full flex flex-col bg-[#1A1412] text-[#F3EFEA] font-satoshi overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
