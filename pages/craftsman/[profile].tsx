import React from 'react'
import { ImArrowLeft2 } from "react-icons/im";
import { Footer ,CraftsmanProfile} from "@/components";
import {useRouter} from 'next/router';
import Head from "next/head";
import {Header} from '@/components';

export default function Profile() {
  const router = useRouter(); //At this moment
  return (
    <div className="bg-mainBackground">
    <Head>
        <title>Craftsman Profile | Explore the Expertise of Paul</title>
        <meta name="description" content="Discover the expertise and skills of paul through their comprehensive craftsman profile. Explore their completed works, customer reviews, and company description. Choose a qualified and competent craftsman for your project with confidence. Find the perfect match for your needs and experience exceptional craftsmanship at its finest." />{" "}
        {/*Short description more effective for SEO*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <header className="white flex justify-between items-center bg-white shadow-lg px-5 py-6 w-full fixed z-50 left-0 right-0 top-0">
        <div className="Container">
          <div className="flex items-center gap-3">
            <ImArrowLeft2 className="text-2xl cursor-pointer" onClick={()=>router.push('/')}/>
            <span className="font-bold text-xl">Profile Info</span>
          </div>
        </div>
        <div/>
      </header> */}
       <header className="Container">
        <Header/>
      </header>
      <div className='Container'>
        <CraftsmanProfile/>
      </div>
      <Footer/>
    </div>
  )
}
