import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { doctors } from "@/lib/data";

export function Doctors() {
  return (
    <section id="team" className="page-section section-soft section-spacing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Team"
            title="Our Friendly Dentists Team"
            description="Meet the experienced, caring specialists who will look after your smile at every visit."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[420px] gap-5 sm:mt-14 sm:gap-6 md:max-w-[1120px] md:grid-cols-3">
          {doctors.map((doctor, index) => (
            <Reveal key={doctor.name} delay={index * 0.1}>
              <article className="group team-card panel-card overflow-hidden rounded-[30px] p-4">
                <div className="relative min-h-[300px] overflow-hidden rounded-[24px] sm:min-h-[340px]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 768px) 360px, 100vw"
                    className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="px-2 pb-3 pt-5 text-center sm:px-3 sm:pt-6">
                  <h3 className="text-[24px] sm:text-[26px]">{doctor.name}</h3>
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
