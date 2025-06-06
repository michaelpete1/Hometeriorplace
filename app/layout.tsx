import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./styles/globals.css"; // Ensure Tailwind is imported

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
