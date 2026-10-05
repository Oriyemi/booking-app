import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import SplashWrapper from "./SplashWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider> 
    <html lang="en" className="h-full antialiased">
      <body className="bg-[#800020]">
        <SplashWrapper>{children}</SplashWrapper>
      </body>
    </html>
   </ClerkProvider>
  );
}