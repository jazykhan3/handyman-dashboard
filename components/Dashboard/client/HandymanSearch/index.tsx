import React, { useContext, useRef, useState } from "react";
import { Context } from "../layout";
import SliderCrouserl from "react-slick";
import { FaCheckCircle, FaFilter, FaSearch } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { ServiceCards } from "@/constants/landingPage";
import { ServiceCard } from "@/components/ServiceCard";
import { HiLocationMarker } from "react-icons/hi";
import { AiTwotoneStar } from "react-icons/ai";
import { useRouter } from "next/router";

export interface EmailErroType {
  password_Error: string;
  password_doNotMatch: string;
}
export type EmailType = {
  password: string;
  cPassword: string;
};
const Filters = ({
  setFilter,
  filter,
  orderTime,
  setOrderTime,
}: FilterPropsType) => {
  const [orderNewOrOld, setOrderNewOrOld] = useState<boolean>(false);
  const [isService, setIsService] = useState<boolean>(false);
  const [selectedService, setSelectedService] =
    useState<string>("Select Service");

  return (
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
            onChange={(e) => setFilter({ ...filter, distance: e.target.value })}
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
            onChange={(e) => setFilter({ ...filter, pin_code: e.target.value })}
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
  );
};
export default function Index({
  selectCard,
  setSelectCard,
  filter,
  setFilter,
  orderTime,
  setOrderTime,
}: NewListedOrderPropsType) {
  const { toggleSideBar } = useContext(Context);
  const slider = useRef<SliderCrouserl>(null);
  const boxCount = 14;
  const boxArray = new Array(boxCount).fill(null);
  const router = useRouter();

  return (
    <div
      className={`lg:w-[80%]  ${toggleSideBar ? "mx-auto" : "md:mx-32"}  my-12`}
    >
  
      <section className="  my-8">
        <h1 className="font-bold text-4xl text-Heading text-center">
          Discover trustworthy{" "}
          <span className="text-orange font-bold">crafting companies</span>
        </h1>
      </section>
      <section className="mx-20">
        {" "}
        <div className="flex align-center justify-start gap-6">
          <FaFilter fontSize={40} />
          <h1 className="text-4xl font-bold">Filter</h1>
        </div>
      </section>
      <div className=" rounded-md  h-[18rem]  flex flex-col gap-5 ">
        <div className="Container my-10">
          <div className="mx-5">
            <h2 className="font-semibold">Search by filters</h2>
            <Filters
              setFilter={setFilter}
              filter={filter}
              orderTime={orderTime}
              setOrderTime={setOrderTime}
            />
          </div>
        </div>
      </div>
     { [...Array(4)].map((a,idx)=>{
return(
  <section key={idx} className="mx-20 w-5/5 gap-20 flex rounded-md shadow-md border bg-white p-10 my-10">
        <div className="w-1/5 flex flex-col gap-4 items-center">
          <img src="/Dashboard/client/cityIcon.svg" />
          <span className="flex items-center gap-2">
            <HiLocationMarker />
            Berlin
          </span>
          <button onClick={()=>{router.push('/craftsman/paul-ben/')}} className="border border-[#FF6A18] rounded outline-none p-2">
            View Profile
          </button>
        </div>
        <div className="w-3/5  flex flex-col  gap-6">
          <div className="flex gap-10">
            Paul Ben{" "}
            <span className="flex items-center gap-1">
              <FaCheckCircle color={"#73e190"} /> Verified User
            </span>{" "}
            <div className="flex gap-2">
              {[...Array(5)].map((a, index) => {
                index += 1;
                return (
                  <div key={index} className="bg-orange rounded">
                    <AiTwotoneStar
                      color={"#ffffff"}
                      className="text-2xl cursor-pointer text-orange"
                    />
                  </div>
                );
              })}{" "}
              79
            </div>
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s{" "}
            <span className="text-orange">read more</span>
          </div>
          <div className="flex gap-6 flex-wrap">
            {boxArray.map((_, index) => (
              <div
                key={index}
                style={{ width: 55, height: 47, fontSize: 8, padding: 10 }}
                className="w-55 h-47 rounded-md shadow-md flex items-center justify-center"
              >
                Demolition contractor
              </div>
            ))}
          </div>
        </div>
      </section>
)
     })}
      
    </div>
  );
}
