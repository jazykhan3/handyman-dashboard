import React,{useEffect,useState} from "react";
import { useRouter } from "next/router";
import { Search } from "@/components";
import { ImArrowLeft2 } from "react-icons/im";
import { Footer } from "@/components";
import Head from "next/head";
import {Header} from '@/components';

export default function Handyman() {
  const router = useRouter();
  const { handyman, search } = router.query;
  return (
    <div className="w-full">
       <Head>
        <title>Find Verified Plumbers in Burn - Compare Reviews & Hire the Right Professional</title>
        <meta name="description" content="In search of a plumber in Burn? Our service allows you to effortlessly discover verified plumbers in your area. Compare customer reviews and select the ideal professional for your plumbing requirements. Get reliable and high-quality plumbing services with ease." />{" "}
        {/*Short description more effective for SEO*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <header className="flex justify-between items-center bg-white shadow-lg px-5 py-6 w-full fixed z-50 left-0 right-0 top-0">
        <div className="Container">
          <div className="flex items-center gap-3">
            <ImArrowLeft2 className="text-2xl cursor-pointer" onClick={() => router.push("/")}/>
            <span className="font-bold text-xl">Find Handyman</span>
          </div>
        </div>
        <div />
      </header> */}
       <header className="Container">
        <Header/>
      </header>
      <div className="pt-32 bg-mainBackground">
        <section className="Container space-y-10 text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Plumbing Handyman Services in{" "}
            <span className="text-orange">Bern</span>
          </h1>
          <p className="w-full lg:w-1/2 text-gray-600 text-left font-medium mx-auto">
            Are you looking for Plumber in Burn? With our service, you can
            quickly and freely find verified plumbers in your area. Compare
            reviews from other customers and choose the right professional for
            your plumbing needs.
          </p>
        </section>
        <Search />
      </div>
      <Footer />
    </div>
  );
}
