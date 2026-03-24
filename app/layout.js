import { Inter, Geist_Mono } from "next/font/google";
import Header from "../components/layout/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Icecube Digital | Full Service Digital Agency",
  description:
    "Build, Grow & Scale your digital presence with Icecube Digital. We offer web development, eCommerce, digital marketing, and UI/UX design services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
