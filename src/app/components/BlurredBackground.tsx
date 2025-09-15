"use client";

import React from "react";

const BlurredBackground = () => {
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
          background: "rgba(255, 207, 39, 0.13)",
          filter: "blur(200px)",
          borderRadius: "50%",
          width: "600px",
          height: "600px",
          left: "947.64px",
          top: "577px",
        }}
        className="sm:w-[300px] sm:h-[300px] sm:left-[150px] sm:top-[200px]"
      />

      {/* Top Blue Blob */}
      <div
        style={{
          position: "absolute",
          background: "rgba(35, 70, 233, 0.15)",
          filter: "blur(200px)",
          borderRadius: "50%",
          width: "600px",
          height: "600px",
          left: "-233.55px",
          top: "-232.39px",
        }}
        className="sm:w-[300px] sm:h-[300px] sm:left-[-150px] sm:top-[-150px]"
      />

      {/* Bottom Blue Blob */}
      <div
        style={{
          position: "absolute",
          background: "rgba(35, 70, 233, 0.15)",
          filter: "blur(200px)",
          borderRadius: "50%",
          width: "600px",
          height: "600px",
          left: "50%",
          bottom: "-300px",
          transform: "translateX(-50%)",
        }}
        className="sm:w-[300px] sm:h-[300px] sm:bottom-[-150px]"
      />

      {/* Right-side Light Orange Blob */}
      <div
        style={{
          position: "absolute",
          background: "rgba(255, 160, 60, 0.12)",
          filter: "blur(200px)",
          borderRadius: "50%",
          width: "500px",
          height: "500px",
          right: "-150px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        className="sm:w-[250px] sm:h-[250px] sm:right-[-100px]"
      />
    </div>
  );
};

export default BlurredBackground;
