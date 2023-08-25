import React from "react";

export default function DeletedJob({job_title,posted_on}:{job_title: string;posted_on: {date: string;time: string;}}) {
  return (
    <div className="px-10 py-5 lg:w-full w-[60rem]">
      <div className="flex justify-between items-center ">
        <section className="w-[20rem]">
          <h1>
            {job_title}
          </h1>
        </section>
        <div className="flex gap-7 w-[20rem]">
          <h4 className="font-semibold">Posted on</h4>
          <ul className="flex gap-7 list-disc mx-4 md:mx-0">
            <li className="text-gray-500">{posted_on.date}</li>
            <li className="text-gray-500">{posted_on.time}</li>
          </ul>
        </div>
        <ul className="w-[5rem] list-disc text-gray-500">
          <li className="font-semibold">
            Deleted
          </li>
        </ul>
      </div>
    </div>
  );
}
