import React, { useState,useEffect, useRef } from "react";
import Image from "next/image";
import { ServiceCards } from "@/constants/landingPage/index";
import ServicePopUpPage from '@/components/landingPage/components/ServicePopUP';
import { ServiceCard } from "@/components/ServiceCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SliderCrouserl from "react-slick";
import ServicePage from "./ServicePopUP";

const Cards = ({icon,shortText,setServicePopUP}:{icon:string;shortText:string;setServicePopUP: React.Dispatch<React.SetStateAction<boolean>>})=>{
  return(
    <div className={`bg-white cursor-pointer  m-3  px-3 flex items-center text-center flex-col py-5 rounded-xl shadow-md  h-[8rem] transform hover:scale-105`} onClick={()=>setServicePopUP(true)}>
    <Image src={icon} className="w-10 h-auto mb-4 mt-1" alt="icon" width={100} height={100}/>
    <span className="leading-tight hover:text-orange " title={shortText}>
      {shortText}
    </span>
  </div>
  )
}

export default function Services() {
  const [toggleAllServicesOnMB, setToggleAllServicesOnMB] = useState<boolean>(false);
    const [servicePopUp, setServicePopUP] = useState<boolean>(false);
    const [serviceCardData, setServiceCardData] = useState<string[]>([]);

    const slider = useRef<SliderCrouserl>(null);

  useEffect(() => {
    if (!servicePopUp) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [servicePopUp]);
  return (
    <div className="lg:mt-15 my-8 space-y-7 " id="services">
      <h1 className="font-bold text-4xl">Services </h1>
      <div className="w-full ">
      <div className="relative">
        <div className="mt-3 sm:px-5 py-3">
          <ServiceCard slider={slider} slidesToShowCustom={7} setServicePopUP={setServicePopUP} setServiceCardData={setServiceCardData}/>
          <div className="text-4xl sm:flex justify-between items-center top-[45%] absolute md:-left-2 md:-right-2 right-0 left-0 hidden" aria-hidden="true">
            <button className="cursor-pointer bg-orange rounded-full text-white" onClick={() => slider.current?.slickPrev()} aria-label="Left shift" aria-hidden="true">
              <IoIosArrowBack className="text-[48px] sm:text-[30px]" />
            </button>
            <button className="cursor-pointer bg-orange rounded-full text-white" onClick={() => slider.current?.slickNext()} aria-label="right shift" aria-hidden="true">
              <IoIosArrowForward className="text-[48px] sm:text-[30px]" />
            </button>
          </div>
        </div>
      </div>
      {servicePopUp && (
        <div className="fixed inset-0 bg-[rgba(189,189,189,0.6)] z-50">
          <div className="max-h-full overflow-y-auto">
            <ServicePage setServicePopUP={setServicePopUP} servicePopUp={servicePopUp} serviceCardData={serviceCardData}/>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
