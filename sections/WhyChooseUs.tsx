import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { reasons } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="page-section section-soft section-spacing">
      <Container className="grid items-start gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Diagnosis of Dental Diseases"
              description="We are committed to sustainability. eco-friendly initiatives."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.06}>
                <article className="feature-card panel-card h-full rounded-[26px] p-6">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-[18px] bg-[#EFF8FF] text-[#1E84B5]">
                    <reason.icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[22px]">{reason.title}</h3>
                  <p className="mt-3">{reason.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="right">
          <div className="relative">
            <div className="relative min-h-[700px] overflow-hidden rounded-[34px]">
              <Image
                src="/photos/clinic-room.jpg"
                alt="Modern dental clinic treatment room"
                fill
                className="object-cover"
              />
            </div>
            <div className="floating-card left-8 top-8 rounded-[24px] px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1E84B5]">
                Smart Care
              </p>
              <p className="mt-2 max-w-[180px] text-lg font-semibold text-[#0E384C]">
                Guided treatment in a calm environment
              </p>
            </div>
            <div className="floating-card bottom-10 right-8 rounded-[24px] px-5 py-5">
              <p className="text-[42px] font-bold leading-none tracking-[-0.04em] text-[#0E384C]">
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
