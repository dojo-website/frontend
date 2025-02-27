"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { blogData } from "@/utils/Mocks/Data";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const MainSlider = () => {
  const t = useTranslations();
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
        autoplay={{ delay: 8000 }}
        className="w-full h-[500px] md:h-[600px] xl:h-[700px]"
      >
        {blogData.map((blog) => (
          <SwiperSlide key={blog.id} className="relative">
            <div className="relative w-full h-full">
              <Image
                src={blog.image}
                className="object-cover"
                layout="fill"
                objectFit="cover"
                alt={blog.title}
                priority
              />
              <div className="absolute top-1/2 transform mx-20 -translate-y-1/2 text-white max-w-[50%]">
                <h1 className="font-extrabold">KIME:</h1>
                <h4 className="mt-2">El enfoque que define el Karate.</h4>
                <Link href={`/${locale}/blog/${blog.id}`}>
                  <button className="my-6 text-lg font-medium md:text-2xl custom-btn">
                    {t("readMore")}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <button className="absolute z-10 transform -translate-y-1/2 size-10 md:size-20 custom-prev left-4 top-1/2">
        <Image src="/arrow-left.png" alt="Previous" width={50} height={50} />
      </button>

      <button className="absolute z-10 transform -translate-y-1/2 custom-next size-10 md:size-20 right-4 top-1/2">
        <Image
          src="/arrow-left.png"
          className="rotate-180"
          alt="Next"
          width={50}
          height={50}
        />
      </button>
    </section>
  );
};

export default MainSlider;
