import React, { useState } from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { AllServices } from "@/components/landingPage/components";
import { IoCallOutline } from "react-icons/io5";
export default function Hero() {
  const [servicePopUp, setServicePopUP] = useState<boolean>(false);
  const [serviceCardData, setServiceCardData] = useState<string>('');
  const [showPhoneNumber, setShowPhoneNumber] = useState<boolean>(false);

  const Request_a_Quote__PopUp = ({serviceCardData,showArrows,setServiceCardData}:{setServiceCardData: React.Dispatch<React.SetStateAction<string>>;serviceCardData:string;showArrows:Boolean}) => {
    
    return (
      <>
        <div className="bg-white rounded-md p-3">
          <h1 className="text-4xl py-5 font-bold">Choose any service</h1>
          <AllServices />
  
        </div>
      </>
    );
  };
  return (
    <div className="w-full flex justify-around items-center relative bg-white rounded-md flex-col lg:flex-row lg:py-10 shadow">
      <div className="absolute w-full md:h-52 h-40 bg-orange top-0 -z-0 rounded-t-md opacity-70" />
      <div className="z-10 sm:px-10 my-5 sm:w-2/3 w-full">
        <div className="flex justify-center items-center text-center flex-col mt-20 lg:mt-16 mb-6">
          <Image src={"/ProfileTest/userTest.png"} alt="user name" width={100} height={100} className="w-[8rem] sm:w-auto h-auto"/>
          <div>
            <div className="flex justify-center flex-col items-center text-center mb-1 ">
              <h1 className="font-bold text-2xl">BuilderBen</h1>
              <div className="flex ml-3 items-center justify-center">
                <Image src={"/ProfileTest/verified.svg"} alt="verifed" width={100} height={100} className="w-auto h-auto"/>
                <span>Verified User</span>
              </div>
            </div>
          
            <div className="flex items-center justify-center mb-3">
              <div className="flex mt-3">
                {[1, 2, 3, 4, 5].map((item) => (
                  <AiFillStar
                    key={item}
                    className="bg-red-500 mx-1 text-white rounded text-lg p-0.5"
                  />
                ))}
              </div>
                <span className="inline-block mt-2 ml-1">23</span>
            </div>
            <div className="flex items-center justify-center gap-1 font-medium mb-1">
              <CiLocationOn />
              <span>Bern</span>
            </div>
            <button onClick={()=>setShowPhoneNumber(true)} className="bg-orange px-3 py-3 md:px-6 md:py-2 flex justify-center items-center gap-4 rounded-lg text-white text-xl hover:text-gray-100 group w-full">
           <div className="bg-white p-1 rounded-full group-hover:bg-gray-200">
             <IoCallOutline  className="text-black" />
           </div>
           {showPhoneNumber ? '+49 1234 5678' : 'Show Phone Number'}
         </button>
          </div>
        </div>
      </div>
      <div className="z-10 mb-10 w-full lg:flex lg:justify-end lg:pr-32 lg:mt-20 pl-10">
        {/* <a onClick={() => {setServicePopUP(true);setServiceCardData('')}}>
          <button className="bg-white border border-orange px-4 py-2 rounded-lg hover:bg-orange hover:text-white">Request a Quote</button>
        </a> */}
      </div>
      {servicePopUp&&(
              <div className="min-h-screen overflow-scroll w-full fixed inset-0 bg-gray-200 z-50 bg-opacity-50 flex justify-center items-center">
                <Request_a_Quote__PopUp showArrows={false} setServiceCardData={setServiceCardData} serviceCardData={serviceCardData}/>
              </div>
            )}
    </div>
  );
}
