import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section className="page-section section-spacing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How It Work"
            title="What We Do for Your Teeth"
            description="We are committed to sustainability. Our clinic practices eco-friendly initiatives like digital records to reduce paper waste and energy-efficient equipment."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="process-card panel-card relative rounded-[28px] px-7 py-8">
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid h-16 w-16 place-items-center rounded-[20px] bg-[#EFF8FF] text-[#1E84B5]">
                    <step.icon className="h-8 w-8" strokeWidth={1.8} />
                  </div>
                  <span className="text-[46px] font-bold leading-none tracking-[-0.04em] text-[#0E384C14]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-[28px] leading-[1.15]">{step.title}</h3>
                <p className="mt-4">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

