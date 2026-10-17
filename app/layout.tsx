import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
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

export const viewport: Viewport = {
  themeColor: "#1E84B5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lato.variable} antialiased`}>
      <body className="site-shell">
        <MotionProvider>
          <ScrollProgress />
          {children}
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
