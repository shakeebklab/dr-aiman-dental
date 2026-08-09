import Image from "next/image";
import { Globe, Send, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { doctors } from "@/lib/data";

const icons = [Globe, Send, Sparkles, Star];

export function Doctors() {
  return (
    <section id="team" className="page-section section-soft section-spacing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Team"
            title="Our Friendly Dentists Team"
            description="We are committed to sustainability. eco-friendly initiatives."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doctor, index) => (
            <Reveal key={doctor.name} delay={index * 0.08}>
              <article className="team-card panel-card overflow-hidden rounded-[30px] p-4">
                <div className="relative min-h-[300px] overflow-hidden rounded-[24px]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="px-3 pb-3 pt-6 text-center">
                  <div className="mb-4 flex items-center justify-center gap-3 text-[#1E84B5]">
                    {icons.map((Icon, iconIndex) => (
                      <span
                        key={iconIndex}
                        className="grid h-9 w-9 place-items-center rounded-full bg-[#EFF8FF]"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[26px]">{doctor.name}</h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[#1E84B5]">
                    {doctor.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
