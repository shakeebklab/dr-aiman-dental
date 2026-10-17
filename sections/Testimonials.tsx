"use client";

import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";
import "swiper/css";
import "swiper/css/pagination";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function Testimonials() {
  return (
    <section id="testimonials" className="page-section section-spacing">
      <Container>
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] xl:gap-10">
          <Reveal variant="left" className="min-w-0">
            <div className="panel-card mx-auto w-full max-w-[720px] rounded-[30px] bg-[#EFF8FF] p-6 sm:p-8 xl:mx-0 xl:max-w-none">
              <SectionHeading
                eyebrow="Testimonials"
                title="What Our Patients Say"
                description="Real words from the patients and families who trust us with their smiles."
              />
              <div className="mt-8 rounded-[24px] bg-white p-5 sm:mt-10 sm:rounded-[28px] sm:p-7">
                <h3 className="text-[34px] font-bold leading-none tracking-[-0.04em] text-[#0E384C] sm:text-[44px]">
                  4.7/5
                </h3>
                <p className="mt-3">This rating is given by patients after visiting our clinic.</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <div className="flex items-center gap-1 text-[#FDBA3C]" role="img" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium leading-6 text-[#0E384C]">
                    For excellent service
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" className="min-w-0">
            <div className="panel-card mx-auto w-full max-w-[720px] rounded-[30px] p-3 sm:p-6 xl:mx-0 xl:max-w-none">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                speed={700}
                loop
                autoHeight
                autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
                pagination={{ clickable: true }}
                className="pb-12!"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.name} className="testimonial-slide">
                    <article className="flex flex-col rounded-[24px] bg-[#EFF8FF] p-5 sm:p-9">
                      <Quote
                        aria-hidden="true"
                        className="mb-4 h-12 w-12 fill-current text-[#1E84B5]/15 sm:mb-6 sm:h-14 sm:w-14"
                        strokeWidth={0}
                      />
                      <p className="text-base leading-7 text-[#0E384C] sm:text-lg sm:leading-8">
                        {item.quote}
                      </p>
                      <div className="mt-6 flex items-center gap-4 sm:mt-8">
                        <span
                          aria-hidden="true"
                          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#1E84B5] text-lg font-bold text-white sm:h-16 sm:w-16 sm:text-xl"
                        >
                          {initials(item.name)}
                        </span>
                        <div>
                          <h3 className="text-[22px] sm:text-[24px]">{item.name}</h3>
                          <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#1E84B5]">
                            {item.role}
                          </p>
                        </div>
                        <span className="ml-auto hidden text-sm font-semibold text-[#0E384C] sm:block">
                          {item.rating}
                        </span>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
