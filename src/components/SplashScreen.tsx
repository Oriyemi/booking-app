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

    loader
      .add("#logo", {
        scale: 0,
        opacity: 0,
        duration: 0,
      })
      .add("#logo", {
        scale: 1.4,
        opacity: 1,
        duration: 700,
        easing: "easeOutBack",
      })
      .add("#logo", {
        scale: 1,
        rotate: "360deg",
        duration: 1000,
        easing: "easeInOutExpo",
      })
      .add("#logo", {
        scale: 1.15,
        duration: 400,
        easing: "easeOutQuad",
      })
      .add("#logo", {
        scale: 1,
        duration: 300,
        easing: "easeInOutQuad",
      });
  };
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    startAnimation();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-[#800020]">
      <Image
        id="logo"
        src="/vercel.svg"
        alt="logo image"
        width={200}
        height={200}
      />
    </div>
  );
};

export default SplashScreen;
