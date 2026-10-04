"use client";

import { useEffect } from "react";
import { createTimeline } from "animejs";
import Image from "next/image";

interface SplashScreenProps {
  finishloading: () => void;
}

const SplashScreen = ({ finishloading }: SplashScreenProps) => {
  useEffect(() => {
    const loader = createTimeline({
      onComplete: () => finishloading(),
    });

    loader
      .set("#logo", { scale: 0, opacity: 0 })
      .add("#logo", {
        scale: 1.2,
        opacity: 1,
        duration: 700,
        ease: "outBack",
      })
      .add("#logo", {
        scale: 1,
        duration: 400,
        ease: "inOutQuad",
      })
      .add("#logo", {
        scale: 1.1,
        duration: 400,
        ease: "outQuad",
      })
      .add("#logo", {
        scale: 1,
        duration: 300,
        ease: "inOutQuad",
      });

    return () => {
      loader.pause(); // "If this component is removed before the animation finishes, stop the animation."
    };
  }, [finishloading]);

  return (
    <div className="flex h-screen items-center justify-center bg-[#800020].">
      <Image
        id="logo"
        src="/oja-logo.png"
        alt="logo"
        width={200}
        height={200}
        className="h-auto w-50 object-contain"
        priority
      />
    </div>
  );
};

export default SplashScreen;