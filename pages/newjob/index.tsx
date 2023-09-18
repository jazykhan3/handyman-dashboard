import React, { useState } from "react";
import { JOB } from "@/components/landingPage/components/NewJob/Job";
import { testData } from "@/components/landingPage/components/NewJob/FetchNewJob";
import {NewListedOrderPage} from '@/components';
import Head from "next/head";
import {Header} from '@/components';

export default function Index() {
  const [selectCard,setSelectCard] = useState<string []>([]);
  const [orderTime,setOrderTime] = useState<orderTimeType>('Sort by newest or older');
  const [filter,setFilter] = useState<FilterType>({ //Filter data 
    distance:'',
    pin_code:''
  });
  return (
    <div  className="bg-[#F2F8FF]">
       <Head>
        <title>New Job Listing | Exciting Opportunity for Craftsmen Work</title>
        <meta name="description" content="Discover a new job opportunity in the world of craftsmen work. Post your job listing and attract skilled professionals to bring your project to life. Find the right craftsmen to deliver exceptional results. Don't miss out on this exciting opportunity, post your job now!" />{" "}
        {/*Short description more effective for SEO*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <header className="white flex justify-between items-center bg-white shadow-lg px-5 py-6 fixed w-full top-0 z-50">
        <div className="container flex justify-between mx-auto">
          <div className="flex items-center gap-3">
            <ImArrowLeft2 className="text-2xl cursor-pointer"/>
            <Link href='/' className="font-bold text-xl">Job Details</Link>
          </div>
          <div>
          <button type="button" className="bg-orange  px-3 py-2 text-white rounded-lg sm:text-lg text-sm">
              Handyman Dashboard
          </button>
          </div>
        </div>
        <div />
      </header> */}
      <header className="Container">
        <Header/>
      </header>
      <div className="pt-36">
        <div className="text-center text-3xl font-bold mb-11">
        <h1 className='font-bold text-3xl sm:text-4xl text-Heading'>Discover new orders : <span className='text-orange'>Search and filter options</span></h1>
        </div>
        <NewListedOrderPage selectCard={selectCard} setSelectCard={setSelectCard} setFilter={setFilter} filter={filter} orderTime={orderTime} setOrderTime={setOrderTime}/>
      </div>
      <div className="container mx-auto h-screen">
        {testData.map(({ id, title, m2, image, posted, location, slug ,category}) => (
          <JOB key={id} id={id} title={title} m2={m2} image={image} posted={posted} location={location} slug={slug} category={category}/>
        ))}
      </div>
    </div>
  );
}
