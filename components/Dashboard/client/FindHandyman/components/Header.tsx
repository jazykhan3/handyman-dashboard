import React, { useCallback, useState, useEffect } from "react";
import { ServiceCards } from "@/constants/landingPage";
import ServicePopUpPage from '@/components/landingPage/components/ServicePopUP';
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
    <section className={`lg:mt-5  w-full  md:w-1/2`}>
      <div className={`mb-6`}>
        <p className="text-gray-500">Describe the Service you need</p>
        <div className="bg-white rounded-md relative mt-3 shadow-md flex flex-row">
          <div className="flex  flex-col sm:flex-row sm:justify-start rounded-md w-full p-1 ">
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
