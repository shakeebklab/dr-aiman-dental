import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  "Experienced team",
  "Comprehensive services",
  "State-of-the-art technology",
  "Emergency dental services",
];

export function About() {
  return (
    <section id="about" className="page-section section-spacing">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <Reveal variant="left">
          <div className="group relative">
            <div className="relative min-h-[320px] overflow-hidden rounded-[28px] sm:min-h-[420px] sm:rounded-[34px] lg:min-h-[560px]">
              <Image
                src="/photos/about-patient.jpg"
                alt="Patient consultation in a dental clinic"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>
            <div className="floating-card animate-float bottom-4 right-3 rounded-[20px] px-4 py-4 sm:bottom-8 sm:right-8 sm:rounded-[24px] sm:px-6 sm:py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1E84B5]">
                Since 2008
              </p>
              <p className="mt-2 text-lg font-semibold text-[#0E384C] sm:text-xl">Modern family care</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="Your Journey to a Healthier Smile Begins Here"
              description="The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments, all under one roof."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <Reveal key={item} delay={0.08 * index}>
                <div className="group flex items-center gap-3 rounded-[18px] border border-[#0E384C14] bg-white px-4 py-4 transition-all duration-300 hover:border-[#1E84B5]/30 hover:shadow-[0_14px_30px_rgba(14,56,76,0.08)]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EFF8FF] text-[#1E84B5] transition-colors duration-300 group-hover:bg-[#1E84B5] group-hover:text-white">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-[#0E384C]">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.32}>
            <div className="mt-10">
              <Button href="#services">Explore Our Services</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
