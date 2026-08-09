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
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal variant="left">
          <div className="relative">
            <div className="relative min-h-[560px] overflow-hidden rounded-[34px]">
              <Image
                src="/photos/about-patient.jpg"
                alt="Patient consultation in a dental clinic"
                fill
                className="object-cover"
              />
            </div>
            <div className="floating-card bottom-8 right-8 rounded-[24px] px-6 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1E84B5]">
                Since 2008
              </p>
              <p className="mt-2 text-xl font-semibold text-[#0E384C]">Modern family care</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="Your Journey to a Healthier Smile Begins Here"
              description="The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <Reveal key={item} delay={0.08 * index}>
                <div className="flex items-center gap-3 rounded-[18px] border border-[#0E384C14] bg-white px-4 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EFF8FF] text-[#1E84B5]">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-[#0E384C]">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.32}>
            <div className="mt-10">
              <Button href="#services">Read More About Us</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
