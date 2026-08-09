import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="page-section section-soft section-spacing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Hight Quality Services for You."
            description="We are committed to sustainability. eco-friendly initiatives."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="service-card panel-card h-full rounded-[28px] p-7">
                <div className="mb-8 grid h-16 w-16 place-items-center rounded-[20px] bg-[#EFF8FF] text-[#1E84B5]">
                  <service.icon className="h-8 w-8" strokeWidth={1.7} />
                </div>
                <h3 className="text-[24px] leading-[1.2]">{service.title}</h3>
                <p className="mt-4">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0E384C] hover:text-[#1E84B5]"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[30px] border border-[#0E384C14] bg-white px-7 py-8 text-center lg:flex-row lg:text-left">
            <p className="max-w-[760px] text-lg text-[#0E384C]">
              We believe in using the latest technology and techniques to ensure the best outcomes
              for our patients.
            </p>
            <Button href="#contact" variant="ghost" className="min-w-[200px]">
              View All Service
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

