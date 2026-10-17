import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { reasons } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="page-section section-soft section-spacing">
      <Container className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Diagnosis of Dental Diseases"
              description="Accurate diagnosis is the foundation of great dental care. Here is what sets our clinic apart."
            />
          </Reveal>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.06} className="h-full">
                <article className="group feature-card panel-card h-full rounded-[26px] p-5 sm:p-6">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-[16px] bg-[#EFF8FF] text-[#1E84B5] transition-all duration-500 group-hover:-rotate-6 group-hover:bg-[#1E84B5] group-hover:text-white sm:mb-6 sm:h-14 sm:w-14 sm:rounded-[18px]">
                    <reason.icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[20px] sm:text-[22px]">{reason.title}</h3>
                  <p className="mt-3">{reason.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="right" className="lg:sticky lg:top-28">
          <div className="group relative">
            <div className="relative min-h-[320px] overflow-hidden rounded-[28px] sm:min-h-[460px] sm:rounded-[34px] lg:min-h-[700px]">
              <Image
                src="/photos/clinic-room.jpg"
                alt="Modern dental clinic treatment room"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>
            <div className="floating-card animate-float left-3 top-3 rounded-[20px] px-4 py-4 sm:left-8 sm:top-8 sm:rounded-[24px] sm:px-5 sm:py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1E84B5]">
                Smart Care
              </p>
              <p className="mt-2 max-w-[180px] text-base font-semibold text-[#0E384C] sm:text-lg">
                Guided treatment in a calm environment
              </p>
            </div>
            <div className="floating-card animate-float-slow bottom-4 right-3 rounded-[20px] px-4 py-4 sm:bottom-10 sm:right-8 sm:rounded-[24px] sm:px-5 sm:py-5">
              <p className="text-[32px] font-bold leading-none tracking-[-0.04em] text-[#0E384C] sm:text-[42px]">
                5.0
              </p>
              <p className="mt-2 text-sm font-medium text-[#527282]">Trusted Google rating</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
