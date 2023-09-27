import React, { useRef } from "react";
import SliderCrouserl from "react-slick";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TestImageData = [
  {
    id: 1,
    img: "/ProfileTest/crousel/img1.png",
  },
  {
    id: 2,
    img: "/ProfileTest/crousel/img2.png",
  },
  {
    id: 3,
    img: "/ProfileTest/crousel/img3.png",
  },
  {
    id: 4,
    img: "/ProfileTest/crousel/img4.png",
  },
  {
    id: 5,
    img: "/ProfileTest/crousel/img5.png",
  },
];
const settings = {
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  rows: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const ImageCrousel = () => {
  const slider = useRef<SliderCrouserl>(null);
  return (
    <div>
      <div className="mb-3">
        <h2 className="text-3xl font-semibold">Photos</h2>
      </div>
      <SliderCrouserl {...settings} ref={slider}>
        {TestImageData.map(({ id, img }) => (
          <div key={id}>
            <Image src={img} alt={`crousel ${id}`} width={700} height={700} className="object-cover h-[25rem] p-2 rounded-2xl"/>
          </div>
        ))}
      </SliderCrouserl>
      <div className="hidden sm:block">
        <div className="text-4xl  flex justify-center gap-6 my-4" aria-hidden="true">
          <button className="cursor-pointer bg-orange rounded-full text-white" onClick={() => slider.current?.slickPrev()} aria-label="Left shift" aria-hidden="true">
            <IoIosArrowBack className="text-[48px] sm:text-[30px]" />
          </button>
          <button className="cursor-pointer bg-orange rounded-full text-white" onClick={() => slider.current?.slickNext()} aria-label="right shift" aria-hidden="true">
            <IoIosArrowForward className="text-[48px] sm:text-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AboutBusiness() {
  return (
    <div>
      <section className="space-y-5 mb-10">
        <h1 className="text-3xl font-bold">
          About <span className="text-orange">Business</span>
        </h1>
        <p className="lg:w-3/4 w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the {"industry's"} standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </section>
      <ImageCrousel />
    </div>
  );
}
