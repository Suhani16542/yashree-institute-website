"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
  className?: string;
}

export default function AnimatedReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-left":
        return "reveal-fade-left";
      case "fade-right":
        return "reveal-fade-right";
      case "scale":
        return "reveal-scale";
      case "fade-up":
      default:
        return "reveal-fade-up";
    }
  };

  const getDelayClass = () => {
    if (delay === 100) return "delay-100";
    if (delay === 200) return "delay-200";
    if (delay === 300) return "delay-300";
    if (delay === 400) return "delay-400";
    if (delay === 500) return "delay-500";
    return "";
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${getDelayClass()} ${
        revealed ? "is-revealed" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
