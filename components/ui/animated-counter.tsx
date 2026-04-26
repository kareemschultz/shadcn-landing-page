"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedCounter({ value }: { value: string }) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const isNumeric = !isNaN(numeric);
  const suffix = value.replace(/[0-9]/g, "");

  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && isNumeric) motionValue.set(numeric);
  }, [isInView, isNumeric, motionValue, numeric]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(v).toLocaleString() + suffix;
      }
    });
  }, [spring, suffix]);

  if (!isNumeric) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>0</span>;
}
