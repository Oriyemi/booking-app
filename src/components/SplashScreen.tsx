"use client";

import { useEffect, useState } from "react";
import { createTimeline } from "animejs";

interface SplashScreenProps {
  finishloading: () => void;
}

const SplashScreen = ({ finishloading }: SplashScreenProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const startAnimation = () => {
    const loader = createTimeline({
      onComplete: () => finishloading(),
    });

    loader.add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easting:"easeInOutExpo",
    });
    };
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10) 
        startAnimation()
        return ()=>clearTimeout(timeout)
    },[])

    return (
        <div className="flex h-screen items-center justify-center" >
          <Image id="logo" src="" alt="" width={60} height={60} />
        </div>
    )
};

export default SplashScreen;