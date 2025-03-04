import "@/app/globals.css";
import { homePath, ticketsPath } from "@/paths";
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
        <nav className="bg-background/60 fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5 backdrop-blur">
          <div>
            <Link className="text-lg font-bold" href={homePath()}>
              Home
            </Link>
          </div>
          <div>
            <Link className="text-sm underline" href={ticketsPath()}>
              Tickets
            </Link>
          </div>
        </nav>
        <main className="bg-secondary/20 flex min-h-screen flex-1 flex-col overflow-x-hidden overflow-y-auto px-8 py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
