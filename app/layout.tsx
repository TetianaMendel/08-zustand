import type { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto ({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata:Metadata = {
  title: "NoteHub",
  description: "Manage personal notes with NoteHub",
  openGraph: {
    title: "NoteHub",
    description: "Manage personal notes with NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub application preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
