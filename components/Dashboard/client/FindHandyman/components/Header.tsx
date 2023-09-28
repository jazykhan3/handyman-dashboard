import React, { useCallback, useState, useEffect } from "react";
import { ServiceCards } from "@/constants/landingPage";
import ServicePopUpPage from '@/components/landingPage/components/ServicePopUP';
import { GoChevronDown } from "react-icons/go";
import Image from "next/image";
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
     <div className={`mb-6 mr-20  w-full `}>
      <p className="text-gray-500">Find the right tradesman quickly: Use our search bar and get free offers</p>
      <div className="bg-white relative mt-3">
        <div className="flex w-full  shadow-md z-30 absolute rounded-md">
          <input type="text" placeholder="e.g   Painter" name="search_service" className="grow px-3 py-3  border-2 border-r-0 rounded-l-md outline-none" title="Search our services" onChange={HandleChange} value={userType[0]}/>
          <button className="bg-orange py-3 shadow-md px-4 text-white rounded-r-md hover:text-black" onClick={()=>FindService()} disabled={userType.length == 0}>
            Post Job
          </button>
        </div>
        <div className={`border-2 bg-white py-5 shadow-md rounded-b-md  w-full absolute z-20 top-10 ${userType.length !== 0 && userType[0] !== '' ? 'block':'hidden'}`}>
          {Services.length !== 0 ? (Services.slice(0, 14).map((item) =>(
          <div key={item.id} className="flex justify-start items-center mx-3">
            <Image src={item.icon} alt={item.shortText} width={28} height={28} />
            <span className='px-2 py-1 hover:text-gray-700 text-gray-500 cursor-pointer' onClick={()=>setUserType([item.shortText,item.slug])}>
              {item.shortText}
            </span>
          </div>
          ) )):<span className="px-2 py-1 hover:text-gray-700 text-gray-500 cursor-pointer">Service not found</span>}
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
