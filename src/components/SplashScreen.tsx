"use client";

import { useEffect, useState } from "react";
import { createTimeline } from "animejs";
import Image from "next/image";

interface SplashScreenProps {
  finishloading: () => void;
}

const SplashScreen = ({ finishloading }: SplashScreenProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const startAnimation = () => {
    const loader = createTimeline({
      onComplete: () => finishloading(),
    });

    loader.add("#logo", {
      delay: 0,
      scale: 1,
      rotate: "360deg",
      duration: 1500,
      easing: "easeInOutExpo",
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    startAnimation();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        id="logo"
        src="/vercel.svg"
        alt="logo image"
        width={60}
        height={60}
      />
    </div>
  );
};

export default SplashScreen;
