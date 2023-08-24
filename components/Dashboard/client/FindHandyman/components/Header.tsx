import React, { useCallback, useState, useEffect } from "react";
import { ServiceCards } from "@/constants/landingPage";
import ServicePopUpPage from '@/components/landingPage/components/ServicePopUP';
import { GoChevronDown } from "react-icons/go";
type SearchProps = {
  id: number;
  icon: string;
  shortText: string;
  slug: string;
};
export default function HeroSearchAndText() {
  const [Services, setServices] = useState<SearchProps[]>([
    {
      id: 0,
      icon: "",
      shortText: "",
      slug: "",
    },
  ]);
  const [servicePopUp, setServicePopUP] = useState<boolean>(false);
  const [serviceCardData, setServiceCardData] = useState<string[]>([]);
  const [isService, setIsService] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Select Service');
  const [userType, setUserType] = useState<string[]>([]);
  useEffect(() => {
    if (!servicePopUp) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [servicePopUp]);
  const HandleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const SearchVal = ServiceCards.sort((a, b) =>
        a.shortText.localeCompare(b.shortText)
      ).filter((item) =>
        item.shortText.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setServices(SearchVal);
      setUserType([e.target.value]);
    },
    [setServices]
  );
  const FindService = () => {
    if (userType[0] !== "") {
      setServiceCardData(userType);
      setServicePopUP(true);
      setUserType([""]);
    }
  };
  console.log(servicePopUp);
  return (
    <section className={`lg:mt-5  w-full  `}>
      <div className={`mb-6`}>
        <div className=" justify-between  flex flex-row">
        <div className="relative">
        <div
          className={`shadow bg-white  flex justify-center items-center rounded-md relative mt-3 shadow-md py-3 px-4 gap-4 ${
            isService && "text-orange"
          }`}
        >
          <button onClick={() => setIsService(!isService)}>
          {selectedService}           </button>
          <GoChevronDown className="mt-1 text-xl" />
        </div>
        {isService && (
          <div
            className={`h-60 overflow-auto bg-white shadow  p-3 rounded cursor-pointer  mt-1   absolute flex flex-col space-y-5 z-40`}
          >
            {ServiceCards?.map((item,idx)=>{
              return(
                <span
                key={idx}
              className=" hover:text-orange  cursor-pointer"
              onClick={() => {
                setIsService(false);
                setSelectedService(item?.shortText);
              }}
            >
              {item?.shortText}
            </span>
              )
})}
            
          
          </div>
        )}
      </div>
          <div className="flex  flex-col sm:flex-row sm:justify-start rounded-md  p-1 ">
            <input type="text" placeholder="e.g   Painter" name="search_service" className="grow p-3   border-r-0 rounded-l-md outline-none" title="Search our services" onChange={HandleChange} value={userType[0]}/>
            <button className="sm:bg-white border-l py-2 bg-orange rounded-l-md sm:rounded-l-none border-gray-300 px-4 text-black rounded-r-md hover:text-orange" onClick={() => FindService()} disabled={userType.length == 0}>
              Find Service
            </button>
          </div>
          <div className={` bg-white py-5 px-5 rounded-md  w-full absolute z-20 top-16 ${userType.length !== 0 && userType[0] !== "" ? "block" : "hidden" }`}>
            {Services.length !== 0 ? (
              Services.slice(0, 14).map((item) => (
                <div key={item.id}>
                  <span className="px-2 py-1 hover:text-gray-800 text-gray-500 cursor-pointer" onClick={() => setUserType([item.shortText, item.slug])}>
                    {item.shortText}
                  </span>
                </div>
              ))
            ) : (
              <span className="px-2 py-1 hover:text-gray-700 text-gray-500 cursor-pointer">
                Service not found
              </span>
            )}
          </div>
        </div>
      </div>
      {servicePopUp  && (
        <div className="fixed left-0 right-0 -top-10 bottom-0 bg-[rgba(189,189,189,0.6)] z-50">
        <div className="max-h-full overflow-y-auto">
        <ServicePopUpPage setServicePopUP={setServicePopUP} servicePopUp={servicePopUp} serviceCardData={serviceCardData}/>
        </div>
        </div>
      )}
    </section>
  );
}
