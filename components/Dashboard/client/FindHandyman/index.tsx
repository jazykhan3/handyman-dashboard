import React, { useRef, useState, useContext } from "react";
import SliderCrouserl from "react-slick";
import Header from './components/Header';
import { ServiceCard } from "../../components/ServiceCards";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Context } from "../layout";
import ServicePopUpPage from '@/components/landingPage/components/ServicePopUP';
import Link from 'next/link';
export default function FindHanyman() {
  const slider = useRef<SliderCrouserl>(null);
  const [servicePopUp, setServicePopUP] = useState<boolean>(false);
  const [serviceCardData, setServiceCardData] = useState<string[]>([]);
  const { toggleSideBar } = useContext(Context);
  return (
    <div className={`w-full ${toggleSideBar ? "lg:mx-10" : "lg:mx-auto"} my-12`}>
      <h1 className=" text-3xl font-bold">Receive free <span className="text-orange">handyman offer</span> </h1>
      <h2 className='ml-2 text-center mt-20 font-bold text-2xl md:text-3xl mb-2'>Select the appropriate service for your job: </h2>

      <div className="flex justify-between items-center lg:mx-20 my-10 flex-wrap flex-row-reverse">
        <Header/>
      </div>
        <div className="mt-3  lg:px-20 py-3 relative">
          <ServiceCard slider={slider} slidesToShowCustom={7} setServicePopUP={setServicePopUP} setServiceCardData={setServiceCardData}/>
          <div className="text-4xl sm:flex justify-between items-center top-[50%] absolute right-4 left-4  lg:right-12 lg:left-12 hidden" aria-hidden="true">
            <button className="cursor-pointer bg-orange rounded-full text-white" onClick={() => slider.current?.slickPrev()} aria-label="Left shift" aria-hidden="true">
              <IoIosArrowBack className="text-[48px] sm:text-[30px]" />
            </button>
            <button className="cursor-pointer bg-orange rounded-full text-white" onClick={() => slider.current?.slickNext()} aria-label="right shift" aria-hidden="true">
              <IoIosArrowForward className="text-[48px] sm:text-[30px]" />
            </button>
          </div>
        </div>
        {servicePopUp && (
        <div className="fixed inset-0 bg-[rgba(189,189,189,0.6)] z-50">
          <div className="max-h-full overflow-y-auto">
            <ServicePopUpPage setServicePopUP={setServicePopUP} servicePopUp={servicePopUp} serviceCardData={serviceCardData}/>
          </div>
        </div>
      )}
    </div>
  );
}
