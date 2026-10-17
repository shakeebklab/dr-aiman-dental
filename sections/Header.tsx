"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { navigation } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navigation.map((item) => item.id);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b border-[#0E384C1A] bg-[#EFF8FF]/95 backdrop-blur-md"
    >
      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-white shadow-[0_14px_36px_rgba(14,56,76,0.08)]" : "",
        )}
      >
        <Container
          className={cn(
            "flex items-center justify-between gap-4 transition-[min-height] duration-300 sm:gap-6",
            scrolled ? "min-h-[72px] sm:min-h-[80px]" : "min-h-[78px] sm:min-h-[92px]",
          )}
        >
          <Link href="#home" className="group shrink-0" aria-label="Dr. Aiman Dental Care home">
            <span className="flex items-center gap-2.5 text-[24px] font-bold tracking-[-0.03em] text-[#0E384C] sm:gap-3 sm:text-[32px]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1E84B5] text-base text-white transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105 sm:h-11 sm:w-11 sm:text-lg">
                D
              </span>
              <span className="leading-none">
                Dr. Aiman
                <span className="mt-1 block text-[10px] font-medium tracking-[0.12em] text-[#527282] uppercase sm:text-xs">
                  Dental Care
                </span>
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="nav-link"
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Button href="#contact">Book Appointment</Button>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-[#0E384C1A] bg-white text-[#0E384C] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={cn(
                "transition-transform duration-300",
                open ? "rotate-90" : "rotate-0",
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </Container>

        <div
          id="mobile-menu"
          inert={!open}
          className={cn(
            "overflow-hidden border-t border-[#0E384C1A] bg-white transition-all duration-500 lg:hidden",
            open ? "max-h-[560px] opacity-100" : "max-h-0 border-t-transparent opacity-0",
          )}
        >
          <Container className="flex flex-col gap-5 py-6">
            {navigation.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-all duration-500",
                  activeSection === item.id ? "text-[#1E84B5]" : "text-[#0E384C]",
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                )}
                style={{ transitionDelay: open ? `${index * 50}ms` : "0ms" }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div
              className={cn(
                "transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              )}
              style={{ transitionDelay: open ? `${navigation.length * 50}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              <Button href="#contact">Book Appointment</Button>
            </div>
          </Container>
        </div>
      </div>
    </motion.header>
  );
}
