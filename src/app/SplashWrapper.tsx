"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  if (isLoading && isHome) {
    return <SplashScreen finishloading={() => setIsLoading(false)} />;
  }

  return <>{children}</>;
}