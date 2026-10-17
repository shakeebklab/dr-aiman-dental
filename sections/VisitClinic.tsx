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
      <Container className="grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Visit Clinic"
              title="Comprehensive Dental Care For All Ages"
              description="Modern diagnostics, calm treatment environments, and practical preventive care for children, adults, and seniors."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative mt-8 min-h-[280px] overflow-hidden rounded-[28px] sm:mt-10 sm:min-h-[360px] sm:rounded-[34px] lg:min-h-[430px]">
              <Image
                src="/photos/visit-treatment.jpg"
                alt="Dental treatment in progress at the clinic"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(14,56,76,0.3))]" />
              <a
                href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                target="_blank"
                rel="noreferrer"
                className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#1E84B5] shadow-[0_20px_50px_rgba(14,56,76,0.18)] hover:scale-110 sm:h-20 sm:w-20"
                aria-label="Play clinic video (opens YouTube)"
              >
                <span className="pulse-ring" aria-hidden="true" />
                <span className="pulse-ring pulse-ring--delayed" aria-hidden="true" />
                <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} className="h-full">
              <InView triggerOnce threshold={0.4}>
                {({ inView, ref }) => (
                  <article
                    ref={ref}
                    className="group feature-card card-accent panel-card h-full rounded-[28px] px-6 py-7 sm:px-7 sm:py-8"
                  >
                    <h3 className="text-[40px] font-bold leading-none tracking-[-0.04em] text-[#0E384C] transition-colors duration-300 group-hover:text-[#1E84B5] sm:text-[52px]">
                      {inView ? <CountUp end={stat.value} duration={2.1} /> : 0}
                      {stat.suffix}
                    </h3>
                    <h4 className="mt-4 text-[20px] sm:text-[22px]">{stat.label}</h4>
                    <p className="mt-3">{stat.description}</p>
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
