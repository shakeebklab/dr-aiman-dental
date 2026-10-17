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
            title="High Quality Services for You"
            description="Preventive, restorative, and cosmetic treatments delivered with modern tools and a gentle, personal touch."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08} className="h-full">
              <article className="group service-card card-accent panel-card flex h-full flex-col rounded-[28px] p-6 sm:p-7">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-[18px] bg-[#EFF8FF] text-[#1E84B5] transition-all duration-500 group-hover:-rotate-6 group-hover:bg-[#1E84B5] group-hover:text-white sm:mb-8 sm:h-16 sm:w-16 sm:rounded-[20px]">
                  <service.icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.7} />
                </div>
                <h3 className="text-[22px] leading-[1.2] sm:text-[24px]">{service.title}</h3>
                <p className="mt-4 flex-1">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 self-start font-semibold text-[#0E384C] hover:text-[#1E84B5]"
                >
                  Book This Service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[28px] border border-[#0E384C14] bg-white px-5 py-6 text-center sm:gap-6 sm:px-7 sm:py-8 lg:flex-row lg:text-left">
            <p className="max-w-[760px] text-base text-[#0E384C] sm:text-lg">
              We believe in using the latest technology and techniques to ensure the best outcomes
              for our patients.
            </p>
            <Button href="#contact" variant="ghost" className="min-w-0 sm:min-w-[200px]">
              Book a Consultation
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
