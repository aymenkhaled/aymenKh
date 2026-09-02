"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: string;
  duration?: number;
}

export function AnimatedCounter({ value, duration = 1500 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    if (isNaN(num)) return;
    const isInt = Number.isInteger(num);
    let startTime: number | null = null;
    let frame: number;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isInt
        ? Math.floor(eased * num)
        : parseFloat((eased * num).toFixed(1));
      setDisplay(String(current) + suffix);
      if (progress < 1) frame = requestAnimationFrame(step);
      else setDisplay(String(isInt ? Math.floor(num) : num) + suffix);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}</span>;
}
