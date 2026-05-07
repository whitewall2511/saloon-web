import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhiteWall Salon | Premium Salon Booking App",
  description: "Book your salon appointments anytime, anywhere. Find nearby salons, choose services, and manage your bookings effortlessly with the WhiteWall Salon mobile app.",
  keywords: ["salon booking", "haircut app", "barber booking", "WhiteWall Salon", "grooming app"],
  openGraph: {
    title: "WhiteWall Salon | Premium Salon Booking App",
    description: "The ultimate grooming experience at your fingertips.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0B0B0C] text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
