import React, { useContext, useState } from "react";
import EditProfile from "./components/EditProfile";
import { Context } from "../layout";
import { BsPencil } from "react-icons/bs";
import { BiUpload } from "react-icons/bi";
import { handymanPofileImgsSrc } from "@/constants/Dashboard/handyman";
import { ServiceCards } from "@/constants/landingPage";
import Image from "next/image";
export type InputdDataType = {
  compnay_name: string;
  surname: string;
  last_name: string;
  address: string;
  zip_code: string;
};
export default function Index() {
  const { toggleSideBar } = useContext(Context);
  const [inputData, setInputData] = useState<InputdDataType>({
    compnay_name: "",
    surname: "",
    last_name: "",
    address: "",
    zip_code: "",
  });
  const [zip_codeError, setZipCodeError] = useState<string>("");
  const [imageDataPageData, setImagePageData] = useState<string[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputData.zip_code) {
      setZipCodeError("Zip code is required");
    } else if (isNaN(Number(inputData.zip_code))) {
      setZipCodeError("Zip code must be a number");
    } else setZipCodeError("");
    if (zip_codeError === "") {
      // console.log(inputData);
      // console.log(imageDataPageData);
    }
  };
  return (
    <div className={`w-full ${toggleSideBar ? "lg:mx-32" : "mx-0"} my-12`}>
      <section className="text-center flex justify-center flex-col items-center my-8">
        <h1 className="font-bold text-4xl text-Heading">
          Personalize your profile:{" "}
          <span className="text-orange font-bold">
            {" "}
            Manage your information{" "}
          </span>
        </h1>
      </section>
      <EditProfile
        inputData={inputData}
        setInputData={setInputData}
        handleSubmit={handleSubmit}
        zip_codeError={zip_codeError}
        imageDataPageData={imageDataPageData}
        setImagePageData={setImagePageData}
      />
      <section className="w-full text-center flex justify-between  items-center my-8">
        <h1 className="font-bold text-4xl text-Heading">
          About <span className="text-orange font-bold"> Business </span>
        </h1>
        <button className="bg-orange px-5 py-2 font-medium flex align-center text-white   rounded-xl">
          Edit <BsPencil className="ml-2 mt-1 text-white" />
        </button>
      </section>
      <section>
        {" "}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <section className="text-center flex justify-between  items-center my-8">
          <h1 className="font-bold text-4xl text-Heading">Photos</h1>
          <button className="bg-orange px-5 py-2 font-medium flex align-center text-white rounded-xl">
            Upload <BiUpload className="ml-2 mt-1 text-white" />
          </button>
        </section>
        <section className="flex flex-row gap-20">
        {handymanPofileImgsSrc?.map((imgSrc, idx) => (
  <Image src={imgSrc} alt="" width={215} height={199} key={idx} />
))}

        </section>
        <section className="text-center flex justify-between  items-center my-8">
        <h1 className="font-bold text-4xl text-Heading">
          Services
        </h1>
      </section>
      <section className="flex items-center">
      {ServiceCards?.slice(0, 8)?.map((item, idx) => (
  <div
    className={`w-30 h-30 bg-white cursor-pointer relative m-3 px-3 flex justify-center items-center text-center flex-col py-5 rounded-xl shadow-md h-[8rem] transform hover:scale-105`}
    // onClick={() => setServicePopUP(true)}
    key={idx}
  >
    <button
      className="absolute -top-2 -right-2 w-6 h-6 bg-orange rounded-full flex items-center justify-center opacity-50"
      onClick={(e) => {
        e.stopPropagation(); // Prevent the click event from propagating to the parent div
        // Handle your logic here, like removing the service card from the state
      }}
    >
      <span className="text-white text-xs">X</span>
    </button>
    <Image
      src={item.icon}
      className="w-10 h-auto mb-4 mt-1"
      alt="icon"
      width={100}
      height={100}
    />
    <span className="leading-tight hover:text-orange" title={item.shortText}>
      {item.shortText}
    </span>
  </div>
))}


    {/* View More Card */}
    <div
      className={`w-16 h-16 bg-orange cursor-pointer m-3 px-3 flex justify-center items-center text-center flex-col py-5 rounded-xl shadow-md h-[4rem] transform hover:scale-105`}
      // onClick={() => setServicePopUP(true)}
    >
      <div className="w-20 h-20 bg-orangerounded-full flex items-center justify-center">
        <span className="text-white text-4xl">+</span>
      </div>
    </div>


</section>
<section className="my-10 flex justify-end"><button className="bg-orange text-white lg:px-5 lg:py-2 px-3 py-1.5 rounded-xl font-medium focus:outline-none float-right " >
DELETE PROFILE 
      </button></section>

      </section>

    </div>
  );
}
