import React, { useContext } from "react";
import { Context } from "../layout";
import AcceptOffers from "./components/AcceptOffers";
const TestData = [
  {
    id:1,
    job_title:'Laying tiles: 25m2; Floor in bathroom, kitchen, hall 25km, Berlin',
    listing_ID:'32918465',
    price:'$250',
    posted_on:{
      date:'23/05/2023',
      time:'9:45 AM'
    }
  },
  {
    id:2,
    job_title:'Laying tiles: 25m2; Floor in bathroom, kitchen, hall 25km, Berlin',
    listing_ID:'32918465',
    price:'$250',
    posted_on:{
      date:'23/05/2023',
      time:'9:45 AM'
    }
  },
];
export default function Index() {
  const { toggleSideBar } = useContext(Context);
  return (
    <div className={`w-full ${toggleSideBar ? "lg:mx-32" : "md:mx-10"} my-12`}>
      <div className="flex justify-center items-center gap-14 flex-wrap">
        {TestData.map((item)=>(
          <AcceptOffers key={item.id} job_title={item.job_title} listing_ID={item.listing_ID} price={item.price} posted_on={item.posted_on}/>
        ))}
      </div>
    </div>
  );
}
