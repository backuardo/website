"use client";

import { P5CanvasInstance, type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5: P5CanvasInstance) {
  const cellSize = 4;
  const animationSpeed = 0.01;
  const noiseScale = 0.05;

  let time = 0;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.noStroke();
    p5.frameRate(30);
    p5.pixelDensity(1);
  };

  p5.draw = () => {
    p5.background(250);

    for (let x = 0; x < p5.width; x += cellSize) {
      for (let y = 0; y < p5.height; y += cellSize) {
        const noiseVal = p5.noise(x * noiseScale, y * noiseScale, time);

        if (noiseVal > 0.5) {
          p5.fill(20);
        } else {
          p5.fill(250);
        }

        p5.rect(x, y, cellSize, cellSize);
      }
    }

    time += animationSpeed;
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none">
      <NextReactP5Wrapper sketch={sketch} />
    </div>
  );
}
