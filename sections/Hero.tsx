"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const { scrollY } = useScroll();
  const doctorY = useTransform(scrollY, [0, 500], [0, 70]);
  const cardY = useTransform(scrollY, [0, 500], [0, -35]);

  return (
    <section id="home" className="page-section hero-gradient pt-8 md:pt-10">
      <Container className="grid items-center gap-12 pb-8 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-0 lg:pt-16">
        <div className="max-w-[720px]">
          <Reveal>
            <span className="subheading">Dr. Aiman Dental Care</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-[760px] text-[30px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0E384C] sm:text-[44px] lg:text-[58px] xl:text-[64px]">
              Experience <span className="text-[#1E84B5]">Dental</span>
              <br />
              Excellence with a
              <br />
              Gentle Touch
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[560px] text-lg">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#contact">Make An Appointment</Button>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-[#0E384C1A] pt-7 text-sm font-medium text-[#0E384C]">
              <span>Google Rating</span>
              <span className="text-[#1E84B5]">5.0</span>
              <div className="flex items-center gap-1 text-[#FDBA3C]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-[#527282]">Based on 492 Reviews</span>
            </div>
          </Reveal>
        </div>

        <motion.div style={{ y: doctorY }} className="relative pb-14 lg:pb-0">
          <motion.div style={{ y: cardY }} className="hero-portrait">
            <div className="hero-spark hero-spark--primary" aria-hidden="true">
              <Sparkles className="h-12 w-12 fill-current" />
            </div>

            <div className="hero-spark hero-spark--secondary" aria-hidden="true">
              <Sparkles className="h-8 w-8 fill-current" />
            </div>

            <Image
              src="/dr-aiman-hero.png"
              alt="Dr. Aiman"
              width={920}
              height={1120}
              priority
              className="hero-portrait-image"
            />

            <div className="floating-card bottom-8 left-4 flex w-[196px] items-center gap-3 p-3 sm:left-8">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                <Image
                  src="/dr-aiman-hero.png"
                  alt="Dr. Aiman portrait"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0E384C]">Dr. Aiman</p>
                <p className="text-xs text-[#527282]">Dental surgeon</p>
              </div>
            </div>

            <div className="floating-card right-4 top-7 flex h-16 w-16 items-center justify-center rounded-full text-[#1E84B5] sm:right-8">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <div className="floating-card right-4 bottom-36 flex w-[184px] items-center gap-3 rounded-[22px] px-4 py-4 sm:right-8">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#EFF8FF] text-[#1E84B5]">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0E384C]">Gentle care</p>
                <p className="text-xs text-[#527282]">Trusted treatment</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <Container className="pt-8 pb-12 lg:pt-10 lg:pb-16">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr_1fr]">
          <Reveal variant="left">
            <div className="dark-panel panel-card rounded-[28px] px-7 py-7">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                +
              </div>
              <h3 className="text-2xl font-semibold text-white">Need Dental Services ?</h3>
              <p className="mt-2 visually-muted">Call on : (+01) 987 828 745</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="panel-card rounded-[28px] px-7 py-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF8FF] text-[#1E84B5]">
                <span className="text-lg font-semibold">?</span>
              </div>
              <h3 className="text-2xl font-semibold">Opening Hours</h3>
              <p className="mt-2">Mon to Sat 9:00AM to 9:00PM</p>
            </div>
          </Reveal>
          <Reveal delay={0.16} variant="right">
            <div className="panel-card rounded-[28px] bg-[#1E84B5] px-7 py-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Quick Access
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Make an appointment</h3>
              <p className="mt-2 text-white/80">
                Reserve your consultation online with a single click.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

