"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  up: { opacity: 0, y: 42 },
  left: { opacity: 0, x: 42 },
  right: { opacity: 0, x: -42 },
  scale: { opacity: 0, scale: 0.92 },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: keyof typeof variants;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={variants[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

