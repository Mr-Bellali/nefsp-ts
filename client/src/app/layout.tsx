import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/landing/Header";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEFSP",
  description: "save big food for a little money.",
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
        <main className="relative overflow-hidden ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
