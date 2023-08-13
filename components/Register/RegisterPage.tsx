import React, { useState } from "react";
import RegisterFormHeader from "./components/RegisterFormHeader";
import RegisterForms from "./components/RegisterForms";
import Steps from "./components/Steps";
import Footer from "@/components/Footer";
import Article from "./components/Article";

export default function RegisterForm() {
  const [selectCard, setSelectCard] = useState<string[]>([]);
  const [selectCaredError, setSelectCardError] = useState<string>("");
  return (
    <div className="w-full bg-mainBackground h-screen">
      <div className="px-5 bg-cover bg-registration-hero-img md:py-20 py-10">
        <div className="max-w-7xl mx-auto mt-20 bg-white bg-opacity-50 rounded-2xl shadow-lg p-8">
          <section className="text-center flex flex-col justify-center items-center mb-5  pt-5 sm:pt-3 space-y-5">
            <h1 className="sm:text-5xl text-4xl font-bold leading-tight">
              Find Jobs
            </h1>
            <p className="font-medium sm:text-xl">
              Find the right jobs for your trade with our Handyman Service
            </p>
          </section>
          <div>
            {selectCard.length <= 0 ?(  
              <RegisterFormHeader setSelectCard={setSelectCard} selectCaredError={selectCaredError} selectCard={selectCard} setSelectCardError={setSelectCardError}/>
            ) :(
              <RegisterForms selectCard={selectCard} setSelectCardError={setSelectCardError} setSelectCard={setSelectCard}/>
            ) }
          </div>
        </div>
      </div>
      <div className="bg-mainBackground Container">
        <Steps />
        <Article />
      </div>
      <Footer />
    </div>
  );
}
