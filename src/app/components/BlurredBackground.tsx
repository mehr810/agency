"use client";

import React, { useEffect, useState } from "react";

const BlurredBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Blob sizes
  const yellowSize = isMobile ? 300 : 600;
  const topBlueSize = isMobile ? 300 : 600;
  const bottomBlueSize = isMobile ? 300 : 600;
  const orangeSize = isMobile ? 250 : 500;

  // Blob positions
  const yellowLeft = isMobile ? 150 : 947.64;
  const yellowTop = isMobile ? 200 : 577;

  const topBlueLeft = isMobile ? -150 : -233.55;
  const topBlueTop = isMobile ? -150 : -232.39;

  const bottomBlueBottom = isMobile ? -150 : -300;

  const orangeRight = isMobile ? -100 : -150;
  const orangeTop = "50%";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {/* Yellow Blob */}
      <div
        style={{
          position: "absolute",
          width: `${yellowSize}px`,
          height: `${yellowSize}px`,
          left: `${yellowLeft}px`,
          top: `${yellowTop}px`,
          background: "rgba(255, 207, 39, 0.13)",
          filter: "blur(200px)",
          borderRadius: "50%",
        }}
      />

      {/* Top Blue Blob */}
      <div
        style={{
          position: "absolute",
          width: `${topBlueSize}px`,
          height: `${topBlueSize}px`,
          left: `${topBlueLeft}px`,
          top: `${topBlueTop}px`,
          background: "rgba(35, 70, 233, 0.15)",
          filter: "blur(200px)",
          borderRadius: "50%",
        }}
      />

      {/* Bottom Blue Blob */}
      <div
        style={{
          position: "absolute",
          width: `${bottomBlueSize}px`,
          height: `${bottomBlueSize}px`,
          left: "50%",
          bottom: `${bottomBlueBottom}px`,
          transform: "translateX(-50%)",
          background: "rgba(35, 70, 233, 0.15)",
          filter: "blur(200px)",
          borderRadius: "50%",
        }}
      />

      {/* Right-side Light Orange Blob */}
      <div
        style={{
          position: "absolute",
          width: `${orangeSize}px`,
          height: `${orangeSize}px`,
          right: `${orangeRight}px`,
          top: orangeTop,
          transform: "translateY(-50%)",
          background: "rgba(255, 160, 60, 0.12)",
          filter: "blur(200px)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default BlurredBackground;
