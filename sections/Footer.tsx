import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SocialIcon } from "@/components/SocialIcon";
import { clinic, navigation, socialLinks } from "@/lib/data";

const linkClass =
  "visually-muted inline-block transition-all duration-300 hover:translate-x-1 hover:text-[#5FB7E0]";

export function Footer() {
  return (
    <footer className="footer page-section">
      <Container className="pb-24 pt-16 md:pb-16">
        <Reveal>
          <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.8fr_0.8fr]">
            <div>
              <Link href="#home" className="group flex items-start gap-3 text-white sm:gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1E84B5] text-base text-white transition-transform duration-500 group-hover:rotate-[-8deg] sm:h-11 sm:w-11 sm:text-lg">
                  D
                </span>
                <span className="max-w-[220px] leading-[0.95]">
                  <span className="block text-[24px] font-bold tracking-[-0.03em] sm:text-[30px]">Dr. Aiman</span>
                  <span className="mt-2 block text-[24px] font-bold tracking-[-0.03em] sm:text-[30px]">
                    Dental Care
                  </span>
                </span>
              </Link>
              <p className="visually-muted mt-6 max-w-[360px]">
                The goal of our clinic is to provide friendly, caring dentistry and the highest level
                of general, cosmetic, and specialist dental treatments.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-md bg-[#1E84B5] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0E384C]"
                  >
                    <SocialIcon name={social.label} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[22px] text-white sm:text-[24px]">Quick Links</h3>
              <ul className="mt-6 space-y-3">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[22px] text-white sm:text-[24px]">Social Media</h3>
              <ul className="mt-6 space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer" className={linkClass}>
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[22px] text-white sm:text-[24px]">Contact Us</h3>
              <ul className="mt-6 space-y-3">
                <li>
                  <a href={`mailto:${clinic.email}`} className={linkClass}>
                    {clinic.email}
                  </a>
                </li>
                <li>
                  <a href={clinic.phoneHref} className={linkClass}>
                    {clinic.phone}
                  </a>
                </li>
                <li className="visually-muted">{clinic.address}</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/72 md:flex-row md:items-center md:justify-between">
          <p>Copyright © {new Date().getFullYear()} {clinic.name}. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6 md:pr-20">
            <Link href="#home" className="hover:text-[#5FB7E0]">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#5FB7E0]">
              About Us
            </Link>
            <Link href="#services" className="hover:text-[#5FB7E0]">
              Services
            </Link>
            <Link href="#contact" className="hover:text-[#5FB7E0]">
              Book Appointment
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
