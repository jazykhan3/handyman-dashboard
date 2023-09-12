import React, { useState,useEffect } from "react";
import Image from "next/image";
import { ServiceCards } from "@/constants/landingPage/index";
import ServicePopUpPage from '@/components/landingPage/components/ServicePopUP';
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
      <div className="hidden sm:block">
        <div className="grid lg:grid-cols-7 lg:mx-20 mx-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {ServiceCards.slice(0, 14).map(({ id,icon,shortText , slug }) => (
              <Cards key={id} icon={icon} shortText={shortText} setServicePopUP={setServicePopUP}/>
          ))}
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="grid grid-cols-2">
          {ServiceCards.slice(0, !toggleAllServicesOnMB ? 4 : 14).map(({ id, icon, shortText, slug }) => (
              <Cards key={id} icon={icon} shortText={shortText} setServicePopUP={setServicePopUP}/>
            )
          )}
        </div>
        <div className="flex justify-center items-center my-3">
          <button className="bg-white px-5 py-3 rounded-full shadow" onClick={() => setToggleAllServicesOnMB(!toggleAllServicesOnMB)}>
            {!toggleAllServicesOnMB ? "Show all services" : "Show Less all services"}
          </button>
        </div>
      </div>
        {servicePopUp && (
        <div className="fixed -top-8 left-0 right-0 bottom-0 bg-[rgba(189,189,189,0.6)] z-50">
          <div className="max-h-full  overflow-y-auto">
            <ServicePopUpPage setServicePopUP={setServicePopUP} servicePopUp={servicePopUp} />
          </div>
        </div>
      )}
    </div>
  );
}
