import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elie Kolela Inc — Expert Home & Appliance Repair",
  description:
    "Professional repair services for TVs, fridges, washing machines, plumbing, electrical systems, air conditioners, ovens, and general home maintenance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
