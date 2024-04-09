import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/LandingPage/NavBar";
import Footer from "@/components/LandingPage/Footer";


export const metadata: Metadata = {
  title: "Ember & Oak",
  description: "Fashion Ecommerce Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-Outfit my-4 mx-12'>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
