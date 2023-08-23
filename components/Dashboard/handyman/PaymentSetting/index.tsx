import Image from "next/image";
import React from "react";
import {
  BiCheckCircle,
  BiCheckboxChecked,
  BiInfoCircle,
  BiLogoMastercard,
} from "react-icons/bi";
import { FaCcMastercard } from "react-icons/fa";
export default function SubscriptionManagement() {
  const cardsData = [
    {
      cardType: "VISA",
      cardNumber: "***** 5555",
      text: "Filippo Di Trapani",
      expiryDate: "07/22",
      imgSrc: "/Dashboard/handyman/mastercard-logo.svg",
      checked: false,
      shortDesc: "Add another credit or debit card",
    },
    {
      cardType: "VISA",
      cardNumber: "***** 5555",
      text: "Filippo Di Trapani",
      expiryDate: "07/22",
      imgSrc: "/Dashboard/handyman/paypal-logo.svg",
      checked: true,
      shortDesc: "Add another PayPal  Account",
    },
  ];
  return (
    <div className="my-2 w-full md:mx-32">
      <h1 className="text-3xl font-bold">
        <span className="text-orange">Manage Your Payments: </span> Explore
        Payment Settings
      </h1>
      <div className="w-full flex gap-2">
        <div className="w-4/5">
          <div className="my-7 mx-5 bg-[#E2E6F4] flex flex-col justify-start gap-10 p-4 rounded-xl">
            {cardsData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex gap-2 w-5/5 shadow-md p-3 rounded-md border border-black border-opacity-10"
                >
                  <div className="flex w-1/5 items-center gap-2">
                    <BiCheckCircle
                      color={item.checked ? "#FF6A18" : "#00000092"}
                    />
                    <div className="flex flex-col">
                      <span className="text-[#00000092]">
                        {item?.cardType} {item?.cardNumber}{" "}
                      </span>
                      <span className="text-[#00000092]">{item?.text}</span>
                    </div>
                  </div>
                  <div className="flex w-4/5 justify-between item-start text-[#00000092] ">
                    <div>Expires {item?.expiryDate}</div>
                    <div>
                      <Image
                        alt={""}
                        width={118}
                        height={44}
                        src={item?.imgSrc}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            {cardsData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex gap-2 w-5/5 shadow-md p-3 justify-between rounded-md border border-black border-opacity-10"
                >
                  <div className="flex w-3/5 items-center gap-2">
                    <BiCheckCircle
                      color={item.checked ? "#FF6A18" : "#00000092"}
                    />
                    <div className="flex ">
                      <span className="text-[#00000092]">
                        {item?.shortDesc}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex w-2/5 justify-end item-start text-[#00000092] ">
                    <div>
                      <Image
                        alt={""}
                        width={118}
                        height={44}
                        src={item?.imgSrc}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex items-center gap-2 w-4/5">
              <BiInfoCircle color={"#00000092"} fontSize={30} />{" "}
              <span className="text-[#00000092]">
                By saving this credit card, you agree to our Terms of Service
                and you authorized it to be charged on a recurring basis until
                you cancel your subscription - which you can do at any time{" "}
              </span>
            </div>
            <div>
              <button className="px-4 py-2 text-black bg-orange rounded-xl ">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/5 flex flex-col gap-3">
          <div className="rounded-xl bg-[#E2E6F4] my-6 p-4">
            <h1 className="border-b  p-4 border-b-3 mb-2 border-black border-opacity-57">
              Subscription Details
            </h1>
            <span className="text-[#00000092] text-xs mt-2 p-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </span>
          </div>
          <div className="rounded-xl bg-[#E2E6F4] my-6 p-4">
            <h1 className="border-b  p-4 border-b-3 mb-2 border-black border-opacity-57">
              Subscription Details
            </h1>
            <span className="text-[#00000092] text-xs mt-2 p-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
