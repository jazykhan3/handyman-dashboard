import React, { useContext, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import SliderCrouserl from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceCards } from "@/constants/landingPage";
import ServicePopUpPage from "@/components/landingPage/components/ServicePopUP";

export default function JobAlerts() {
  const [isService, setIsService] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>("Select Service");
  const slider = useRef<SliderCrouserl>(null);
  const [selectCard,setSelectCard] = useState<string []>([]);

  return (
    <div className="my-2 w-full md:ml-[15rem]">
      <h1 className="text-3xl font-bold mt-20">
        <span className="text-orange">Notifications for </span> matching orders
      </h1>
      <div className="w-full flex gap-2">
        <div className="flex gap-5 mt-3 flex-wrap md:relative">
          <div>
            <p className="font-semibold mb-4">Radius</p>

            <div className="bg-white px-3 py-3 rounded-lg  shadow">
              <input
                type="number"
                className="w-full outline-none"
                id="filter_km"
                name="filter_km"
                placeholder="50 km"
                min={1}
                // onChange={(e) => setFilter({ ...filter, distance: e.target.value })}
              />
            </div>
          </div>
          <div>
            <p className="font-semibold mb-4">Zip Code</p>

            <div className="bg-white px-3 py-3 rounded-lg  shadow">
              <input
                type="text"
                className="w-full outline-none"
                id="filter_pin"
                name="filter_pin"
                placeholder="e.g. 40210"
                // onChange={(e) => setFilter({ ...filter, pin_code: e.target.value })}
              />
            </div>
          </div>
          <div className="hidden sm:block"></div>
          <div>
            {" "}
            <p className="font-semibold mb-4">Service</p>
            <div className="relative">
              <div
                className={`shadow bg-white  flex justify-center items-center rounded-md py-3 px-4 gap-4 ${
                  isService && "text-orange"
                }`}
              >
                <button onClick={() => setIsService(!isService)}>
                  {selectedService}{" "}
                </button>
                <GoChevronDown className="mt-1 text-xl" />
              </div>
              {isService && (
                <div
                  className={`h-60 overflow-auto bg-white shadow  p-3 rounded cursor-pointer  mt-1   absolute flex flex-col space-y-5 z-40`}
                >
                  {ServiceCards?.map((item, idx) => {
                    return (
                      <span
                        key={idx}
                        className={`hover:text-orange  cursor-pointer ${item?.shortText == selectedService && 'text-orange'}`}
                        onClick={() => {
                          setIsService(false);
                          setSelectedService(item?.shortText);
                        }}
                      >
                        {item?.shortText}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="mt-3 sm:px-5 py-3">
          <h3 className="font-semibold">Select Role</h3>
          <ServiceCard
            slider={slider}
            slidesToShowCustom={7}
            setSelectCard={setSelectCard}
            selectCard={selectCard}
          />
          <div
            className="text-4xl sm:flex justify-between items-center top-[45%] absolute  -right-2 -left-2 hidden"
            aria-hidden="true"
          >
            <button
              onClick={() => slider.current?.slickPrev()}
              aria-label="Left shift"
            >
              <IoIosArrowBack className="text-[48px] sm:text-[30px]" />
            </button>
            <button
              onClick={() => slider.current?.slickNext()}
              aria-label="right shift"
            >
              <IoIosArrowForward className="text-[48px] sm:text-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
