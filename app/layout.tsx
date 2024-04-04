import type { Metadata } from "next";
import "./globals.css";


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
      <body className='font-Outfit my-4 mx-12'>{children}</body>
    </html>
  );
}
