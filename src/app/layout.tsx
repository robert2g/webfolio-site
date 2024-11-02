import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Robert's Webfolio",
  description: "Developer Webfolio/Resume Site"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
