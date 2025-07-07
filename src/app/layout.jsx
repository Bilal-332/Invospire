import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Invospire - Software Engineering Excellence",
  description: "Transforming ideas into digital reality. Expert software engineering, e-commerce development, digital marketing, and innovative solutions.",
  keywords: "software engineering, e-commerce development, digital marketing, web development, mobile apps, UI/UX design",
  authors: [{ name: "Invospire Team" }],
  openGraph: {
    title: "Invospire - Software Engineering Excellence",
    description: "Transforming ideas into digital reality. Expert software engineering, e-commerce development, digital marketing, and innovative solutions.",
    url: "https://invospire.com",
    siteName: "Invospire",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invospire - Software Engineering Excellence",
    description: "Transforming ideas into digital reality. Expert software engineering, e-commerce development, digital marketing, and innovative solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen`}
      >
        <Header />
        <main className="relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
