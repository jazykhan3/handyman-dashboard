import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GoChevronDown } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import ServicePopUpPage from "@/components/landingPage/components/ServicePopUP";
import Link from "next/link";
import { ServiceCards } from "@/constants/landingPage/index";
import AllServices from "./AllServices";

type orderTimeType =
  | "Sort by rating"
  | "Five start rating"
  | "Four start rating"
  | "Three start rating"
  | "Two start rating"
  | "One start rating";

const Test_CardsData = [
  "Assembly service",
  "Air conditioning technician",
  "Bricklayers builders",
  "Building cleaning",
  "Construction Planner",
  "Carpenters",
  "Chimney builders",
  "Construction companies",
  "Concrete drillers",
  "Climate technicians",
];
const Cards = ({ title }: { title: string }) => {
  return (
    <div className="border-2 shadow m-2 rounded-md px-3 py-2">
      <span>{title}</span>
    </div>
  );
};
const Request_a_Quote__PopUp = ({serviceCardData,setServiceCardData}:{setServiceCardData: React.Dispatch<React.SetStateAction<string>>;serviceCardData:string}) => {
  const new_serviceCard = ServiceCards.filter((item) =>Test_CardsData.includes(item.shortText)); 
  return (
    <>
      <div className="bg-white rounded-md p-3">
        <h1 className="text-4xl py-5 font-bold">Choose any service</h1>
        <AllServices />

      </div>
    </>
  );
};

const Available_handyman = () => {
  const [servicePopUp, setServicePopUP] = useState<boolean>(false);
  const [serviceCardData, setServiceCardData] = useState<string>('');
console.log('serviceCardData',serviceCardData)
  useEffect(() => {
    if (!servicePopUp) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [servicePopUp]);
  return (
    <div className="bg-white shadow rounded-lg mt-10 py-5 lg:px-20 px-5">
      <div className="flex justify-center items-center lg:gap-20 flex-col lg:flex-row relative">
        <div className="flex justify-between items-center flex-col mt-5">
          <Image src={"/FindHandyman/wall-builder.svg"} alt="wall-builder" width={130} height={130} title="wall-builder"/>
          <div className="flex justify-center items-center my-3">
            <CiLocationOn />
            <span>Berlin</span>
          </div>
          <button className="bg-white border border-orange  p-2 rounded-lg hover:bg-orange hover:text-white">
            <Link href={"/craftsman/paul-ben"}>Visit profile</Link>
          </button>
        </div>
        <div className="flex flex-col w-full">
          <section>
            <div className="flex justify-start sm:items-center sm:gap-5 flex-col sm:flex-row my-5">
              <h3 className="text-3xl font-bold">Paul Ben</h3>
              <div className="flex sm:ml-3 items-center sm:justify-center">
                <Image src={"/ProfileTest/verified.svg"} alt="verifed" width={100} height={100} className="w-auto h-auto"/>
                <span>Verified User</span>
              </div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((item) => (
                  <AiFillStar
                    key={item}
                    className="bg-red-500 mx-1 text-white rounded text-lg p-0.5"
                  />
                ))}
                <span className="mb-1 ml-2">| 73</span>
              </div>
            </div>
            <p className="sm:w-2/3 w-full">
              {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
            </p>
          </section>
          <div className=" w-full">
            <div className="flex mt-6 flex-wrap   items-center justify-start ">
              {Test_CardsData?.slice(0,3).map((item, index) => (
                <Cards key={index} title={item} />
              ))}
            </div>
            <button className="bg-white border border-orange  p-2 rounded-lg hover:bg-orange hover:text-white ml-1 mt-4 absolute right-0 top-0" onClick={() => {setServicePopUP(true);setServiceCardData('')}}>
              Request a Quote
            </button>
            {servicePopUp&&(
              <div className="min-h-screen overflow-scroll w-full fixed inset-0 bg-gray-200 z-50 bg-opacity-50 flex justify-center items-center">
                <Request_a_Quote__PopUp setServiceCardData={setServiceCardData} serviceCardData={serviceCardData}/>
              </div>
            )}
            {serviceCardData && servicePopUp  && (
              <div className="fixed inset-0 bg-[rgba(189,189,189,0.6)] z-50">
                <div className="max-h-full overflow-y-auto">
                  <ServicePopUpPage setServicePopUP={setServicePopUP} servicePopUp={servicePopUp}/>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default function SearchResult() {
  const [orderTime, setOrderTime] = useState<orderTimeType>("Sort by rating");
  const [orderNewOrOld, setOrderNewOrOld] = useState<boolean>(false);
  return (
    <div className="w-full my-5">
      <div className="flex justify-end items-center mt-1">
        <div className={`shadow bg-white  rounded-md py-3 px-4 gap-4 relative`}>
          <div className={`flex rounded-md gap-4 ${orderNewOrOld && "text-orange" }`}>
            <button onClick={() => setOrderNewOrOld(!orderNewOrOld)}>
              {orderTime}
            </button>
            <GoChevronDown className="mt-1 text-xl" />
          </div>
          {orderNewOrOld && (
            <div className={`bg-white shadow  w-full p-3 rounded cursor-pointer  mt-4   absolute flex flex-col space-y-5 left-0 z-40`}>
              <span className=" hover:text-orange  cursor-pointer" onClick={() => {setOrderNewOrOld(false);setOrderTime("Five start rating");}}>
                Five start rating
              </span>
              <span className=" hover:text-orange  cursor-pointer" onClick={() => {setOrderNewOrOld(false);setOrderTime("Four start rating");}}>
                Four start rating
              </span>
              <span className=" hover:text-orange  cursor-pointer" onClick={() => {setOrderNewOrOld(false);setOrderTime("Three start rating");}}>
                Three start rating
              </span>
              <span className=" hover:text-orange  cursor-pointer" onClick={() => {setOrderNewOrOld(false);setOrderTime("Two start rating");}}>
                Two start rating
              </span>
              <span className=" hover:text-orange  cursor-pointer" onClick={() => {setOrderNewOrOld(false);setOrderTime("One start rating");}}>
                One start rating
              </span>
            </div>
          )}
        </div>
      </div>
      <Available_handyman />
    </div>
  );
}
