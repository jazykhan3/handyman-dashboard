import moment from "moment";
import React, { useState } from "react";
import StatusButton from "./StatusButton";
import { FaEdit, FaTrash } from "react-icons/fa";
import FeedbackPopup from "./feedback";
interface OrderItem {
  title: string;
  paragraph: string;
  price: string;
  postedOn: {
    date: string;
    time: string;
    day: string;
  };
  isNew: boolean;
  status: string;
  listingId:number;
}
export default function Orders({
  title,
  paragraph,
  price,
  postedOn,
  isNew,
  status,
  listingId,
}: OrderItem) {
  const { date, time } = postedOn;
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <><div className="w-full py-5 px-3">
    <section className="w-5/5  flex justify-between items-center">
      <div className="w-1/5 text-xl font-semibold flex flex-col">
        <h1 className="text-xl font-semibold flex flex-row gap-3 items-end">
          {moment(date, "DD-MM-YYYY").format("D/MMM")}
          {isNew && (
            <span className="text-[#67B554]">
              new <span className="text-5xl">.</span>
            </span>
          )} </h1>
          <span className="font-normal">{time}</span>
       
      </div>

      <div className="w-4/5 flex justify-between items-center"><div className="text-normal">{title}</div><div className="font-bold">{`listing ID: ${listingId}`}</div><div className="flex items-center gap-3">{status =='open' && <button className="bg-orange px-2 py-1 rounded">Withdraw Offer</button>}<StatusButton showIcons={(status=='accepted') ? false : true} status={status} /></div></div>
    </section>
    <section className="my-3">
      Demolition & disposal Complete demolition of buildings and structures
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry&apos;s standard dummy text
    </section>
    <span className="text-6xl font-normal inline-block my-3 float-right">
      {price}
    </span>
  </div>
        <FeedbackPopup isOpen={isPopupOpen} onClose={closePopup} /></>

  );
}
