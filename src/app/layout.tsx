import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Button, buttonVariants } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/paths";
import { LucideTicketCheck } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ticket Bounty",
  description: "A simple ticket bounty app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        <Header />
        <main className="bg-secondary/20 flex min-h-screen flex-1 flex-col overflow-x-hidden overflow-y-auto px-8 py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
