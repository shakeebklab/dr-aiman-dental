"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { Play } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { stats } from "@/lib/data";

export function VisitClinic() {
  return (
    <section className="page-section section-spacing" id="visit-clinic">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr]">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Visit Clinic"
              title="Comprehensive Dental Care For All Ages"
              description="Modern diagnostics, calm treatment environments, and practical preventive care for children, adults, and seniors."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-10 min-h-[430px] overflow-hidden rounded-[34px]">
              <Image
                src="/photos/visit-treatment.jpg"
                alt="Dental treatment in progress at the clinic"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(14,56,76,0.3))]" />
              <a
                href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                target="_blank"
                rel="noreferrer"
                className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#1E84B5] shadow-[0_20px_50px_rgba(14,56,76,0.18)]"
                aria-label="Play clinic video"
              >
                <Play className="ml-1 h-7 w-7 fill-current" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <InView triggerOnce threshold={0.4}>
                {({ inView, ref }) => (
                  <article ref={ref} className="panel-card rounded-[28px] px-7 py-8">
                    <h3 className="text-[52px] font-bold leading-none tracking-[-0.04em] text-[#0E384C]">
                      {inView ? <CountUp end={stat.value} duration={2.1} /> : 0}
                      {stat.suffix}
                    </h3>
                    <h4 className="mt-4 text-[22px]">{stat.label}</h4>
                    <p className="mt-3">
                      Our team loves dental trivia. Did you know that tooth enamel is the hardest
                      substance in the human body?
                    </p>
                  </article>
                )}
              </InView>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
