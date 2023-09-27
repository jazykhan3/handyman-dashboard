import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Article3 from "./components/Article3";
import { Find_handyman } from "@/constants/FindHandyman";
import Link from "next/link";
import Services from "./components/Services";
export default function Find_handymanPage() {
  const [zip_code, setZip_code] = useState<string>("");
  const [zip_codeError,setZip_codeError] = useState<string>('');
  const [serviceCardData, setServiceCardData] = useState<string[]>([]);
  const router = useRouter();
  const find_handyman_search = () => {
    if (isNaN(Number(zip_code))) {
      setZip_codeError('Zip code must be a number');
      return;
    } else if (!/^\d+$/.test(zip_code)) {
      setZip_codeError('Zip code must contain only numbers');
    } else if (zip_code.length !== 4) {
      setZip_codeError('Zip code must contain 4 numbers');
    } else {
      setZip_codeError('');
    }
    if(zip_code.length !== 0 && zip_code.length === 4 && zip_codeError === ''){
      router.push({
        pathname: `/findhandyman/${serviceCardData[1]}`,
        query: { search: [zip_code, serviceCardData[1]] },
      });
      document.body.style.overflowY = "scroll";
    } 
  };
  return (
    <div className="pt-12">
      <div className="pt-20 bg-gradient-radial from-[#f87b37df] via-[#f87b37ab]  w-full flex justify-center items-center py-10 px-3 flex-col">
        <Image src={"/FindHandyman/hero.svg"} alt="Find handyman" width={800} height={800}/>
        <h1 className="text-4xl font-bold mt-4">
          Find <span className="text-orange">Handyman</span>
        </h1>
      </div>
      <div className="Container my-10">
        <Services setServiceCardData={setServiceCardData} setZip_code={setZip_code} zip_code={zip_code} find_handyman_search={find_handyman_search} zip_codeError={zip_codeError} setZip_codeError={setZip_codeError}/>
      </div>
      <div className="space-y-8 Container">
        <Article1 />
        <Article2 />
        <Article3 />
        <div>
          <Link href={"/register"} title={Find_handyman.Footer.color_text} className="text-orange">
            {Find_handyman.Footer.color_text}{" "}
          </Link>
          <span>{Find_handyman.Footer.text}</span>
        </div>
      </div>
    </div>
  );
}
