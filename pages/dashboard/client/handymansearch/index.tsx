import React, { useState } from "react";
import { ClientLayout, HandymanSearch, PostedJOB, ProfileManagement } from "@/components/Dashboard";
import Head from "next/head";
import { GoChevronDown } from "react-icons/go";
import { ServiceCards } from "@/constants/landingPage";


export default function HandymanSearchPage() {
  const [selectCard,setSelectCard] = useState<string []>([]);
  const [orderTime,setOrderTime] = useState<orderTimeType>('Sort by newest or older');
  const [filter,setFilter] = useState<FilterType>({ //Filter data 
    distance:'',
    pin_code:''
  });
  return (
    <React.Fragment>
      <Head>
        <title>Client | Handyman Search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientLayout>
        <main className="h-full bg-mainBackground">
          <div className="Container pt-24">
<HandymanSearch selectCard={selectCard} setSelectCard={setSelectCard} setFilter={setFilter} filter={filter} orderTime={orderTime} setOrderTime={setOrderTime}/>        </div>
        </main>
      </ClientLayout>
    </React.Fragment>
  );
}