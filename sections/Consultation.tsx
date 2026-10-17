import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { contactDetails } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Consultation() {
  return (
    <section id="contact" className="page-section section-spacing">
      <Container>
        <div className="contact-grid rounded-[28px] px-4 py-4 sm:rounded-[36px] sm:px-7 sm:py-7 lg:px-10 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal variant="left">
              <div className="rounded-[24px] bg-white p-5 sm:rounded-[30px] sm:p-9">
                <SectionHeading
                  eyebrow="Contact Now"
                  title="Get Free Professional Consultation"
                  description="A modern care experience for every stage of treatment, from planning to follow-up."
                />

                <div className="mt-8 space-y-4 sm:mt-10">
                  {contactDetails.map((detail) => {
                    const content = (
                      <>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#1E84B5] transition-colors duration-300 group-hover:bg-[#1E84B5] group-hover:text-white sm:h-12 sm:w-12">
                          <detail.icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1E84B5]">
                            {detail.label}
                          </p>
                          <p className="mt-2 break-words text-base font-medium text-[#0E384C] sm:text-lg">
                            {detail.value}
                          </p>
                        </div>
                      </>
                    );
                    const className =
                      "group flex items-start gap-3 rounded-[18px] bg-[#EFF8FF] px-4 py-4 transition-all duration-300 sm:gap-4 sm:rounded-[20px] sm:px-5 sm:py-5";

                    return detail.href ? (
                      <a
                        key={detail.label}
                        href={detail.href}
                        className={cn(className, "hover:translate-x-1 hover:shadow-[0_12px_28px_rgba(14,56,76,0.08)]")}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={detail.label} className={className}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
