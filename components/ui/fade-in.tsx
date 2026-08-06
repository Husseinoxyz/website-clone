"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = directionOffset[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = directionOffset[direction];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...initial },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
