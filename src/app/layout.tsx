import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import SplashWrapper from "./SplashWrapper";

export const metadata: Metadata = {
  title: "Oja",
  description: "Book services from providers in one market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="bg-[#800020]" suppressHydrationWarning>
        <ClerkProvider>
          <SplashWrapper>{children}</SplashWrapper>
        </ClerkProvider>
      </body>
    </html>
  );
}