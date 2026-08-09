"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { navigation } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navigation.map((item) => item.id));

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

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0E384C1A] bg-[#EFF8FF]/95 backdrop-blur-md">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-white shadow-[0_14px_36px_rgba(14,56,76,0.08)]" : "",
        )}
      >
        <Container className="flex min-h-[92px] items-center justify-between gap-6">
          <Link href="#home" className="shrink-0">
            <span className="flex items-center gap-3 text-[32px] font-bold tracking-[-0.03em] text-[#0E384C]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#1E84B5] text-lg text-white">
                D
              </span>
              <span className="leading-none">
                Dr. Aiman
                <span className="mt-1 block text-xs font-medium tracking-[0.12em] text-[#527282] uppercase">
                  Dental Care
                </span>
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
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

          <div className="hidden lg:block">
            <Button href="#contact" className="px-8">
              Book Appointment
            </Button>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-[#0E384C1A] bg-white text-[#0E384C] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>

        <div
          className={cn(
            "overflow-hidden border-t border-[#0E384C1A] bg-white transition-all duration-300 lg:hidden",
            open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <Container className="flex flex-col gap-5 py-6">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-lg font-medium text-[#0E384C]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="#contact">Book Appointment</Button>
          </Container>
        </div>
      </div>
    </header>
  );
}

