import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "weframetech",
  description: "weframetech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-Dark01 w-full", inter.className)}>{children}</body>
    </html>
  );
}
