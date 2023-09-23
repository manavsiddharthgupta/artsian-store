import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { CartContextWrap } from "@/lib/CartContextWrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artsian Store",
  description: "E-Commerece for Tech Enthusiasts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#eeeae6]`}>
        <CartContextWrap>
          <Navbar />
          {children}
        </CartContextWrap>
      </body>
    </html>
  );
}
