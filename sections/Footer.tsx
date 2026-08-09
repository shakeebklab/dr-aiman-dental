import Link from "next/link";
import { Globe, Send, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/Container";
import { navigation } from "@/lib/data";

const socials = [
  { label: "Facebook", icon: Globe },
  { label: "Instagram", icon: Sparkles },
  { label: "YouTube", icon: Send },
  { label: "Twitter", icon: Star },
];

export function Footer() {
  return (
    <footer className="footer page-section">
      <Container className="py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.9fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-start gap-4 text-white">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#1E84B5] text-lg text-white">
                D
              </span>
              <span className="max-w-[220px] leading-[0.95]">
                <span className="block text-[30px] font-bold tracking-[-0.03em]">Dr. Aiman</span>
                <span className="mt-2 block text-[30px] font-bold tracking-[-0.03em]">
                  Dental Care
                </span>
              </span>
            </div>
            <p className="visually-muted mt-6 max-w-[360px]">
              The goal our clinic is provide friendly, caring dentistry and highest level of
              general, cosmetic, and specialist dental treatments.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-md bg-[#1E84B5] text-white hover:bg-white hover:text-[#0E384C]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[24px] text-white">Quick Links</h3>
            <ul className="mt-6 space-y-3">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="visually-muted hover:text-[#1E84B5]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[24px] text-white">Social Media</h3>
            <ul className="mt-6 space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href="#contact" className="visually-muted hover:text-[#1E84B5]">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[24px] text-white">Contact Us</h3>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="mailto:info@domain.com" className="visually-muted hover:text-[#1E84B5]">
                  info@domain.com
                </a>
              </li>
              <li>
                <a href="tel:+1236985245" className="visually-muted hover:text-[#1E84B5]">
                  +(123) 698-5245
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/72 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2024 All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="#home" className="hover:text-[#1E84B5]">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#1E84B5]">
              About Us
            </Link>
            <Link href="#services" className="hover:text-[#1E84B5]">
              Services
            </Link>
            <Link href="#contact" className="hover:text-[#1E84B5]">
              Book Appointment
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
