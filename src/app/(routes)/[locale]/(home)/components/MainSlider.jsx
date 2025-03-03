"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { blogData, heroImages } from "@/utils/Mocks/Data";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const MainSlider = () => {
  const t = useTranslations("home");
  const { locale } = useParams();
  return (
    <section className="relative flex flex-col items-center justify-center mx-auto my-2 max-w-[90%]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{ delay: 5000 }}
        className="w-full h-[300px] md:h-[600px]"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-full">
              <Image
                src={image.image}
                className="object-cover w-full h-full"
                width={1000}
                height={500}
                alt="Hero Image"
                priority
              />
              <div className="absolute top-1/2 transform mx-16 md:mx-28 -translate-y-1/2 text-white max-w-[50%]">
                <h1 className="text-5xl font-bold md:text-7xl">KIME:</h1>
                <h4 className="mt-2 font-bold md:text-4xl">
                  El enfoque que define el Karate.
                </h4>
                <Link href={`/${locale}/nosotros`}>
                  <button className="mt-4 text-sm font-medium md:mt-12 md:text-2xl custom-btn">
                    {t("readMore")}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <button className="absolute z-10 flex items-center justify-center transform -translate-y-1/2 size-8 md:size-20 custom-prev left-4 top-1/2">
        <Image
          src="/arrow-left.png"
          alt="Previous"
          width={50}
          height={50}
          priority
        />
      </button>

      <button className="absolute z-10 flex items-center justify-center transform -translate-y-1/2 custom-next size-8 md:size-20 right-4 top-1/2">
        <Image
          src="/arrow-left.png"
          className="rotate-180"
          alt="Next"
          width={50}
          height={50}
          priority
        />
      </button>
    </section>
  );
};

export default MainSlider;
