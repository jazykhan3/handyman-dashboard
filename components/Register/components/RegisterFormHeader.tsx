import { ServiceCard } from "@/components/ServiceCard";
import React, {useRef} from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SliderCrouserl from "react-slick";

export default function RegisterForms({setSelectCard,selectCaredError,selectCard,setSelectCardError}:{setSelectCard:React.Dispatch<React.SetStateAction<string[]>>,selectCaredError:string,selectCard:string[],setSelectCardError:React.Dispatch<React.SetStateAction<string>>}) {
  const slider = useRef<SliderCrouserl>(null);
  return (
    <div className="px-5">
        <span className="pl-12 font-semibold text-lg">Role</span>
        <div className="relative  rounded-2xl sm:px-3 sm:mx-5 my-3 mb-5">
          <ServiceCard slider={slider} slidesToShowCustom={7} setSelectCard={setSelectCard} selectCard={selectCard} setSelectCardError={setSelectCardError}/>
          {selectCaredError &&  <p className="absolute text-sm text-red-500  left-0 mt-1">{selectCaredError}</p>}
          <div className="text-4xl sm:flex justify-between items-center top-[45%] absolute md:-left-4 md:-right-4 right-0 left-0 hidden" aria-hidden="true">
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
}
