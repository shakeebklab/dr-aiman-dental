import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { contactDetails } from "@/lib/data";

export function Consultation() {
  return (
    <section id="contact" className="page-section section-spacing">
      <Container>
        <div className="contact-grid rounded-[36px] px-5 py-5 sm:px-7 sm:py-7 lg:px-10 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal variant="left">
              <div className="rounded-[30px] bg-white p-7 sm:p-9">
                <SectionHeading
                  eyebrow="Contact Now"
                  title="Get Free Professional Consultation"
                  description="A modern care experience for every stage of treatment, from planning to follow-up."
                />

                <div className="mt-10 space-y-4">
                  {contactDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex items-start gap-4 rounded-[20px] bg-[#EFF8FF] px-5 py-5"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#1E84B5]">
                        <detail.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1E84B5]">
                          {detail.label}
                        </p>
                        <p className="mt-2 text-lg font-medium text-[#0E384C]">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <form className="rounded-[30px] bg-white p-7 shadow-[0_24px_70px_rgba(14,56,76,0.1)] sm:p-9">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#0E384C]">Full Name</span>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="h-14 w-full rounded-[18px] border border-[#0E384C14] px-4 outline-none transition focus:border-[#1E84B5]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#0E384C]">Email</span>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="h-14 w-full rounded-[18px] border border-[#0E384C14] px-4 outline-none transition focus:border-[#1E84B5]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#0E384C]">Phone</span>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="h-14 w-full rounded-[18px] border border-[#0E384C14] px-4 outline-none transition focus:border-[#1E84B5]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#0E384C]">Service</span>
                    <select className="h-14 w-full rounded-[18px] border border-[#0E384C14] px-4 outline-none transition focus:border-[#1E84B5]">
                      <option>General Dental Care</option>
                      <option>Dental Implants</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Teeth Whitening</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-[#0E384C]">Message</span>
                    <textarea
                      rows={6}
                      placeholder="Write your message"
                      className="w-full rounded-[22px] border border-[#0E384C14] px-4 py-4 outline-none transition focus:border-[#1E84B5]"
                    />
                  </label>
                </div>
                <div className="mt-7">
                  <Button href="#contact">Make An Appointment</Button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

