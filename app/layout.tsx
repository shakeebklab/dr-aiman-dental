import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dr. Aiman Dental Care",
  description:
    "Modern dental clinic website with appointment booking, expert care, services, testimonials, and consultation sections.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lato.variable} antialiased`}>
      <body className="site-shell">{children}</body>
    </html>
  );
}

