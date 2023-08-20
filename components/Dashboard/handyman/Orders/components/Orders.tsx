import moment from "moment";
import React from "react";
import StatusButton from "./StatusButton";
import { FaEdit, FaTrash } from "react-icons/fa";
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
}
export default function Orders({
  title,
  paragraph,
  price,
  postedOn,
  isNew,
  status,
}: OrderItem) {
  const { date, time } = postedOn;
  return (
    <div className="w-full py-5 px-3">
      <section className="w-full  flex justify-between items-center">
        <div className="ext-xl font-semibold flex flex-col">
          <h1 className="text-xl font-semibold flex flex-row gap-3 items-end">
            {moment(date, "DD-MM-YYYY").format("D/MMM")}
            {isNew && (
              <span className="text-[#67B554]">
                new <span className="text-5xl">.</span>
              </span>
            )} </h1>
            <span className="font-normal">{time}</span>
         
        </div>

        <StatusButton status={status} />
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
  );
}
