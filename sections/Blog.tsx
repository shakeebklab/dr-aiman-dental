import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="page-section section-soft section-spacing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Blogs"
            title="Check Our Latest Articles"
            description="We are committed to sustainability. eco-friendly initiatives."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.08}>
              <article className="blog-card panel-card overflow-hidden rounded-[30px] p-4">
                <div className="relative min-h-[230px] overflow-hidden rounded-[24px]">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>
                <div className="px-3 pb-4 pt-6">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#1E84B5]">
                    {article.date}
                  </p>
                  <h3 className="mt-3 text-[30px] leading-[1.18]">{article.title}</h3>
                  <p className="mt-4">{article.description}</p>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0E384C] hover:text-[#1E84B5]"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
