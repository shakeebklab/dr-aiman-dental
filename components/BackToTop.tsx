"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#1E84B5] text-white shadow-[0_16px_30px_rgba(30,132,181,0.3)] hover:bg-[#0E384C] sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2.4} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
