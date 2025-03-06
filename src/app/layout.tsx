import "@/app/globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Metadata } from "next";

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
    <html lang="en" suppressHydrationWarning>
      <body className="font-inter">
        <ThemeProvider>
          <Header />
          <main className="bg-secondary/20 mx-auto flex min-h-screen flex-1 flex-col overflow-x-hidden overflow-y-auto px-8 py-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
