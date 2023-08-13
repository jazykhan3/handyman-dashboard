import React,{useState,useCallback} from "react";
import ServiceCardsCarousel from './components/ServiceCards';
import SearchResult from './components/SearchResult';
import { ServiceCards } from "@/constants/landingPage";

type SearchProps = {
  id: number;
  icon: string;
  shortText: string;
  slug: string;
};
export default function Search() {
  const [Services, setServices] = useState<SearchProps[]>([
    {
      id: 0,
      icon: "",
      shortText: "",
      slug: "",
    },
  ]);
  const [userType, setUserType] = useState<string>("");
  const HandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const SearchVal = ServiceCards.sort((a, b) =>
        a.shortText.localeCompare(b.shortText)).filter((item) =>
        item.shortText.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setServices(SearchVal);
      setUserType(e.target.value);
    },
    [setServices]
  );
  const FindService = () =>{
    if(userType !== ''){
      console.log(userType); //user search value
      setUserType('');
    }
  }
  return (
    <div className="w-full Container">
      <section className="w-full space-y-5">
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <label htmlFor="search_service" className="md:w-1/2 text-gray-600 w-full font-medium">
            Describe the Service you need
          </label>
          <div className="flex  shadow-md md:w-1/2 grow w-full  rounded-md relative">
          <div className="z-30 w-full flex">
            <input type="text" placeholder="e.g   Painter" id="search_service" name="search_service" className="grow px-3 py-3  border-2 border-r-0 rounded-l-md outline-none" title="Search our services"  onChange={HandleChange} value={userType}/>
            <button className="bg-orange py-3 shadow-md px-4 text-white rounded-r-md hover:text-black" onClick={FindService}>
              Find Service
            </button>
          </div>
            <div className={`border-2 bg-white py-5 shadow-md rounded-b-md  w-full absolute z-20 top-10 ${userType!==''  ? 'block':'hidden'}`}>
                {Services.length !== 0 ? (Services.slice(0, 14).map((item) =>(
                  <div key={item.id}>
                  <span className='px-2 py-1 hover:text-gray-700 text-gray-500 cursor-pointer' onClick={()=>setUserType(item.shortText)}>
                    {item.shortText}
                  </span>
                </div>
                ) )):<span className="px-2 py-1 hover:text-gray-700 text-gray-500 cursor-pointer">Service not found</span>}
            </div>
          </div>
        </div>
      </section>
      <div className="py-10">
        <ServiceCardsCarousel/>
        <SearchResult/>
      </div>
    </div>
  );
}
