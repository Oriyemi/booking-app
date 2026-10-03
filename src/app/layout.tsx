"use client";

import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <html lang="en" className="h-full antialiased">
      <body className="bg-[#800020]">
        {isLoading && isHome ? (
          <SplashScreen finishloading={() => setIsLoading(false)} />
        ) : (
          <>
            {/* <Navbar /> */}

            {children}

            {/* <Footer /> */}
          </>
        )}
      </body>
    </html>
  );
}