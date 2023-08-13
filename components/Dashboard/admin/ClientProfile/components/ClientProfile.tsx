import React from "react";

export const Search = () => {
  return (
    <>
      <span className="w-[25rem]">Street Address</span>
      <span className="w-[25rem]">0156241893525</span>
      <span className="w-[7rem]">xyz@gnail.com</span>
    </>
  )
};
export default function ClientProfile({search,setSearch}:{search: string;setSearch: React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <div className="lg:w-3/4 lg:mx-auto">
      <div className="flex w-1/2   rounded-md shadow-md">
        <input type="text" className="grow px-3 py-1  rounded-l-md outline-none" placeholder="search by email, company name or listing id" name="search_service" title="Search our services" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className="py-3 px-4 bg-white text-black border-l-2 rounded-r-md">
          Find Service
        </button>
      </div>
      <div className="mt-10 shadow-md rounded-md">
        <div className="w-full overflow-x-scroll">
          <div className="w-[60rem] md:w-full">
            <div className="flex justify-center items-center bg-[#F0EAEA] py-3 px-10 rounded-t-md">
              <span className="font-bold w-[25rem]">Address</span>
              <span className="font-bold w-[25rem]">Phone Number</span>
              <span className="font-bold w-[7rem]">Email Address</span>
            </div>
            <div className="flex justify-center items-center bg-white py-5 px-10 rounded-b-md">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
