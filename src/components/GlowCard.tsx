"use client";

import { useRef } from "react";

const GlowCard = ({ card, index, children }: any) => {
  const cardRefs = useRef<any>([]);

  const handleMouseMove = (index: any) => (e: any) => {
    const card: any = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el) as any}
      onMouseMove={handleMouseMove(index)}
      className="exp-glow-card timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            key={i}
            src="/images/gold-star.png"
            alt="star"
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-muted-foreground text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
