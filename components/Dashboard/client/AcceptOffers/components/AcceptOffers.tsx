import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

export default function AcceptOffers({
  job_title,
  icon,
  listing_ID,
  price,
  posted_on,
}: {
  icon: string;
  job_title: string;
  listing_ID: string;
  price: string;
  posted_on: { date: string; time: string };
}) {
  return (
    <div className="bg-white rounded-md shadow-md">
      <div className="px-10 py-5">
        <section>
          <div className="flex items-center justify-between">
            <img src={icon} alt="" />
            <button className="border border-orange px-3 py-1 rounded-md">View Profile</button>
          </div>
          <div className="flex gap-2">
            {[...Array(5)].map((a, index) => {
              index += 1;
              return (
                <div key={index} className="bg-orange rounded">
                  <AiTwotoneStar color={'#ffffff'} className="text-3xl cursor-pointer text-orange" />
                </div>
              );
            })} 79
          </div>
          <section className="flex items-center gap-2 mt-2"><HiLocationMarker  /> Berlin</section>
        </section>
        <section className="space-y-2 mb-2">
          <h1 className="font-bold text-xl">Job title</h1>
          <p className="lg:w-2/3 w-full">{job_title}</p>
        </section>
        <div className="my-2 space-y-1">
          <div>
            <h2 className="font-bold text-xl">Listing ID</h2>
            <span>{listing_ID}</span>
          </div>
          <div>
            <h3 className="font-bold text-xl">Price</h3>
            <span>{price}</span>
          </div>
        </div>
        <div className="py-1">
          <div className="flex md:gap-10 gap-2 flex-col md:flex-row flex-wrap">
            <h4 className="font-semibold">Posted on</h4>
            <ul className="flex gap-7 list-disc mx-4 md:mx-0">
              <li className="text-gray-500">{posted_on.date}</li>
              <li className="text-gray-500">{posted_on.time}</li>
            </ul>
          </div>
        
        </div>
      </div>
      <section className="flex flex-col p-10 bg-orange rounded-sm">expires in 2 days<div className="flex justify-between"> <button className="bg-[#2D9F4CF2] hover:text-black font-bold py-2 px-4 rounded focus:outline-none mt-4">
            Accept 
          </button> <button className="bg-[#FD2E00] hover:text-black  font-bold py-2 px-4 rounded focus:outline-none mt-4">
            Reject
          </button></div></section>
    </div>
  );
}
