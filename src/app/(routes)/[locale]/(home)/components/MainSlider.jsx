"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const MainSlider = ({ headerImages }) => {
  const t = useTranslations("home");
  const { locale } = useParams();

  // If no images are provided, display a fallback message
  if (!headerImages || headerImages.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <section className="relative flex flex-col items-center justify-center mx-auto my-2 w-[90%] max-w-7xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true} // Enable infinite looping
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{ delay: 3000 }}
        className="w-full h-[300px] md:h-[600px]"
      >
        {headerImages?.map((image) => (
          <SwiperSlide key={image.id} className="relative">
            <div className="relative w-full h-full">
              <Image
                src={image.image}
                className="object-cover w-full h-full"
                width={1000}
                height={500}
                alt="Hero Image"
                priority
                onError={(e) => {
                  e.target.src = "/fallback-image.jpg"; // Fallback image on error
                }}
              />
              <div className="absolute top-1/2 transform mx-16 md:mx-28 -translate-y-1/2 text-white max-w-[50%]">
                <h1 className="text-5xl font-bold md:text-7xl">KIME:</h1>
                <h4 className="mt-2 font-bold md:text-4xl">
                  El enfoque que define el Karate.
                </h4>
                {/* Read more button linked to localized 'nosotros' page */}
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
