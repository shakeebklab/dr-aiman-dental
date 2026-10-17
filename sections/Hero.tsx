"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, PhoneCall, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { clinic } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const headline = [
  <>
    Experience <span className="text-[#1E84B5]">Dental</span>
  </>,
  "Excellence with a",
  "Gentle Touch",
];

export function Hero() {
  const { scrollY } = useScroll();
  // Exposed as a CSS variable and only applied from `lg` up, so the portrait
  // never drifts into the cards below it on stacked (mobile) layouts.
  const parallax = useTransform(scrollY, [0, 600], ["0px", "48px"]);

  return (
    <section id="home" className="page-section hero-gradient pt-8 md:pt-10">
      <Container className="grid items-center gap-10 pb-8 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-0 lg:pt-16">
        <div className="max-w-[720px]">
          <Reveal>
            <span className="subheading">Dr. Aiman Dental Care</span>
          </Reveal>
          <h1 className="max-w-[760px] text-[26px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0E384C] sm:text-[44px] lg:text-[58px] xl:text-[64px]">
            {headline.map((line, index) => (
              <span key={index} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.15 + index * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <Reveal delay={0.45}>
            <p className="mt-5 max-w-[560px] text-base sm:mt-6 sm:text-lg">
              From routine checkups to complete smile makeovers, our team pairs modern technology
              with a calm, caring approach, so every visit feels comfortable and every result
              lasts.
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center">
              <Button href="#contact">Make An Appointment</Button>
            </div>
          </Reveal>
          <Reveal delay={0.65}>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#0E384C1A] pt-6 text-sm font-medium text-[#0E384C] sm:mt-10 sm:pt-7">
              <span>Google Rating</span>
              <span className="text-[#1E84B5]">5.0</span>
              <div className="flex items-center gap-1 text-[#FDBA3C]" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease, delay: 0.9 + index * 0.08 }}
                  >
                    <Star className="h-4 w-4 fill-current" />
                  </motion.span>
                ))}
              </div>
              <span className="text-[#527282]">Based on 492 Reviews</span>
            </div>
          </Reveal>
        </div>

        <motion.div
          style={{ "--parallax": parallax } as CSSProperties}
          className="relative pb-8 sm:pb-14 lg:translate-y-(--parallax) lg:pb-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="hero-portrait"
          >
            <Image
              src="/dr-aiman-hero.png"
              alt="Dr. Aiman, lead dentist"
              fill
              priority
              sizes="(min-width: 1320px) 600px, (min-width: 1024px) 46vw, 100vw"
              className="hero-portrait-image"
            />

            <div className="hero-spark hero-spark--primary" aria-hidden="true">
              <Sparkles className="h-10 w-10 fill-current sm:h-12 sm:w-12" />
            </div>

            <div className="hero-spark hero-spark--secondary" aria-hidden="true">
              <Sparkles className="h-6 w-6 fill-current sm:h-8 sm:w-8" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.8 }}
              className="floating-card animate-float bottom-4 left-3 flex w-[168px] items-center gap-3 p-3 sm:bottom-8 sm:left-8 sm:w-[196px]"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl sm:h-14 sm:w-14">
                <Image
                  src="/dr-aiman-hero.png"
                  alt=""
                  fill
                  priority
                  sizes="56px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0E384C]">Dr. Aiman</p>
                <p className="text-xs text-[#527282]">Dental surgeon</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease, delay: 1 }}
              className="floating-card animate-float-slow right-3 top-4 flex h-14 w-14 items-center justify-center rounded-full text-[#1E84B5] sm:right-8 sm:top-7 sm:h-16 sm:w-16"
            >
              <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.95 }}
              className="floating-card animate-float-slow right-3 bottom-24 flex w-[160px] items-center gap-3 rounded-[22px] px-3 py-3 sm:right-8 sm:bottom-36 sm:w-[184px] sm:px-4 sm:py-4"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EFF8FF] text-[#1E84B5] sm:h-12 sm:w-12">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0E384C]">Gentle care</p>
                <p className="text-xs text-[#527282]">Trusted treatment</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      <Container className="pb-12 pt-6 lg:pb-16 lg:pt-10">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr_1fr]">
          <Reveal variant="left">
            <a
              href={clinic.phoneHref}
              className="group dark-panel panel-card block h-full rounded-[28px] px-6 py-6 transition-all duration-300 hover:-translate-y-1 sm:px-7 sm:py-7"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 group-hover:bg-[#1E84B5]">
                <PhoneCall className="h-5 w-5 group-hover:animate-[ring_0.8s_ease-in-out]" />
              </div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">Need Dental Services?</h3>
              <p className="mt-2 visually-muted">Call us: {clinic.phone}</p>
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="panel-card h-full rounded-[28px] px-6 py-6 sm:px-7 sm:py-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF8FF] text-[#1E84B5]">
                <Clock3 className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold sm:text-2xl">Opening Hours</h3>
              <p className="mt-2">{clinic.hours}</p>
            </div>
          </Reveal>
          <Reveal delay={0.16} variant="right">
            <Link
              href="#contact"
              className="group panel-card block h-full rounded-[28px] border-transparent bg-[#1E84B5] px-6 py-6 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1A77A3] sm:px-7 sm:py-7"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                  Quick Access
                </p>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#1E84B5] transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.4} />
                </span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Make an appointment</h3>
              <p className="mt-2 text-white/80">
                Reserve your consultation online with a single click.
              </p>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
