import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: "Talentid | Smart Hiring, Simplified",
  description: "Talentid helps you hire smarter, faster, and better. Instantly send offers, track hiring in real-time, predict joining with AI, and enable transparent candidate feedback—all in one seamless platform.",
  keywords: "Talentid, hiring platform, smart recruitment, offer tracking, joining prediction, AI hiring tool, recruitment automation, candidate feedback",
};

const dmSans = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, 'antialiased bg-[#e9d5ff]')}>
        {children}
      </body>
    </html>
  );
}
