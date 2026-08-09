import { About } from "@/sections/About";
import { Consultation } from "@/sections/Consultation";
import { Doctors } from "@/sections/Doctors";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Process } from "@/sections/Process";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
import { VisitClinic } from "@/sections/VisitClinic";
import { WhyChooseUs } from "@/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <VisitClinic />
        <WhyChooseUs />
        <Process />
        <Doctors />
        <Testimonials />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}

