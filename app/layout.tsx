import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Nunito } from "next/font/google";
import "./globals.css";


const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Next Pizza Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <main className="min-h-screen">
          <Header/>
          {children}
          </main>
      </body>
    </html>
  );
}
