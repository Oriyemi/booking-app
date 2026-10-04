import "./globals.css";
import SplashWrapper from "./SplashWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="bg-[#800020]">
        <SplashWrapper>{children}</SplashWrapper>
      </body>
    </html>
  );
}