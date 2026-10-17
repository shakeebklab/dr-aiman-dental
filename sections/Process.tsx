import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="page-section section-spacing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="What We Do for Your Teeth"
            description="Getting started is simple. Book a visit, get a thorough checkup, and receive a care plan built around you."
            align="center"
          />
        </Reveal>

        <div className="relative mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-[64px] hidden border-t-2 border-dashed border-[#1E84B5]/25 lg:block"
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.12} className="h-full">
              <article className="group process-card card-accent panel-card relative h-full rounded-[28px] px-6 py-7 sm:px-7 sm:py-8">
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-[18px] bg-[#EFF8FF] text-[#1E84B5] transition-all duration-500 group-hover:-rotate-6 group-hover:bg-[#1E84B5] group-hover:text-white sm:h-16 sm:w-16 sm:rounded-[20px]">
                    <step.icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.8} />
                  </div>
                  <span className="text-[38px] font-bold leading-none tracking-[-0.04em] text-[#0E384C14] transition-colors duration-500 group-hover:text-[#1E84B5]/30 sm:text-[46px]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-[24px] leading-[1.15] sm:text-[28px]">{step.title}</h3>
                <p className="mt-4">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
