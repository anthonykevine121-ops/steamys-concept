import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steamy Concepts | Cleaning & Restoration",
  description: "Professional carpet cleaning, tile and grout cleaning, upholstery care and water damage restoration."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
