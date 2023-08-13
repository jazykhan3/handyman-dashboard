import React from "react";
interface OrderItem {
  title: string;
  paragraph: string;
  price: string;
  postedOn: {
    date:string,
    time:string
  };
}
export default function Orders({title,paragraph,price,postedOn}:OrderItem) {
  const {date,time} = postedOn;
  return (
    <div className="w-full py-5 px-7">
      <section className="space-y-3 ">
        <h1 className="text-xl font-semibold">
          {title}
        </h1>
        <p className="lg:w-1/2 w-full">
         {paragraph}
        </p>
      </section>
      <span className="text-xl font-bold inline-block my-3">{price}</span>
      <div className="flex md:gap-10 gap-2 flex-col md:flex-row flex-wrap">
        <h4 className="font-semibold">Posted on</h4>
        <ul className="flex gap-7 list-disc mx-4 md:mx-0">
          <li className="text-gray-500">{date}</li>
          <li className="text-gray-500">{time}</li>
        </ul>
      </div>
    </div>
  );
}
