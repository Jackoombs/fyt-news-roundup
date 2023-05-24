"use client";

import { Children, useState } from "react";
import { Swiper as SwiperType, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "swiper/css";
import clsx from "clsx";

interface CarouselProps {
  children: React.ReactNode;
  options?: SwiperOptions;
}

type SlideStatus = "LOCKED" | "END" | "START" | null;

const Carousel = ({
  children,
  options = {
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
  },
}: CarouselProps) => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [slideStatus, setSlideStatus] = useState<SlideStatus>(null);

  const handleSwiper = (swiper: SwiperType) => {
    setSwiper(swiper);
    handleSlideChange(swiper);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    if (swiper.isLocked) {
      setSlideStatus("LOCKED");
    } else if (swiper.isBeginning) {
      setSlideStatus("START");
    } else if (swiper.isEnd) {
      setSlideStatus("END");
    } else {
      setSlideStatus(null);
    }
  };

  return (
    <div className="relative">
      <Swiper
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
        className="p-1"
        {...options}
      >
        {Children.map(children, (child: React.ReactNode) => (
          <SwiperSlide className="p-1">{child}</SwiperSlide>
        ))}
      </Swiper>
      <SwiperButtons {...{ swiper, slideStatus }} />
    </div>
  );
};

interface SwiperButtonsProps {
  swiper: SwiperType | undefined;
  slideStatus: SlideStatus;
}

const SwiperButtons = ({ swiper, slideStatus }: SwiperButtonsProps) => {
  const prevSlide = () => {
    swiper?.slidePrev();
  };

  const nextSlide = () => {
    swiper?.slideNext();
  };

  return (
    <div className="absolute right-0 -top-9 z-10">
      <button aria-label="Previous Slide" onClick={prevSlide}>
        <ChevronLeftIcon
          className={clsx(
            "h-6 duration-300",
            slideStatus === "START" && "text-slate-300 dark:text-slate-700 z-0"
          )}
        />
      </button>
      <button aria-label="Next Slide" onClick={nextSlide}>
        <ChevronRightIcon
          className={clsx(
            "h-6 duration-300",
            slideStatus === "END" && "text-slate-300 dark:text-slate-700"
          )}
        />
      </button>
    </div>
  );
};

export { Carousel };
