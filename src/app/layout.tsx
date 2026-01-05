import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DetectifiAI - Instant AI Image Detection",
  description: "Detect whether an image is AI-generated or real with high confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white antialiased`}>
        <Header />
        <main className="pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
