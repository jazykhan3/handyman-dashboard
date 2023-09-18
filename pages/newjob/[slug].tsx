import React from "react";
import { Footer, Job } from "@/components";
import Head from "next/head";
import {Header} from '@/components';

export default function JobDetails() {
  return (
    <div className="bg-mainBackground">
       <Head>
        <title>Skilled Craftsman Needed for Floor in bathroom, kitchen, hall</title>
        <meta name="description" content="Looking for a skilled craftsman to handle floor in bathroom, kitchen, hall? Make an offer and connect with talented craftsmen who specialize in floor in bathroom, kitchen, hall. Find the perfect match for your project and ensure quality workmanship. Get started now and bring your vision to life with the help of skilled craftsmen." />
        {/*Short description more effective for SEO*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <header className="white flex justify-between items-center bg-white shadow-lg px-5 py-6 z-50">
        <div className="Container">
          <div className="flex items-center gap-3">
            <ImArrowLeft2 className="text-2xl cursor-pointer" onClick={()=>router.push('/')}/>
            <span className="font-bold text-xl">Job Details</span>
          </div>
        </div>
        <div/>
      </header> */}
      <header className="Container">
        <Header/>
     </header>
      <div className="Container pt-24">
        <Job />
      </div>
      <Footer/>
    </div>
  );
}
