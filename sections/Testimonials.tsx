"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";
import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section className="page-section section-spacing">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <Reveal variant="left">
            <div className="panel-card h-full rounded-[30px] bg-[#EFF8FF] p-8">
              <SectionHeading
                eyebrow="Testimonial"
                title="What our Client Say"
                description="We are committed to sustainability. eco-friendly initiatives."
              />
              <div className="mt-10 rounded-[28px] bg-white p-7">
                <h3 className="text-[44px] font-bold leading-none tracking-[-0.04em] text-[#0E384C]">
                  4.7/5
                </h3>
                <p className="mt-3">This rate is given by user after visiting our location</p>
                <div className="mt-5 flex items-center gap-1 text-[#FDBA3C]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" />
                  ))}
                  <span className="ml-3 text-sm font-medium text-[#0E384C]">
                    For excellence services
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="panel-card rounded-[30px] p-4 sm:p-6">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{ delay: 4200 }}
                pagination={{ clickable: true }}
                className="pb-12"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.name} className="testimonial-slide h-auto">
                    <article className="flex h-full flex-col rounded-[24px] bg-[#EFF8FF] p-7 sm:p-9">
                      <div className="mb-6 text-[70px] font-bold leading-none text-[#1E84B5]/12">
                        "
                      </div>
                      <p className="text-lg leading-8 text-[#0E384C]">{item.quote}</p>
                      <div className="mt-8 flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div>
                          <h3 className="text-[24px]">{item.name}</h3>
                          <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#1E84B5]">
                            {item.role}
                          </p>
                        </div>
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
