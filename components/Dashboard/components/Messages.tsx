import React from "react";

export default function Messages({name,time,message}:{name: string;time: string;message: string}) {
  return (
    <div className="px-10 py-5 w-full">
      <div className="space-y-4">
        <section className="flex justify-start items-center gap-10">
          <h1 className="font-bold text-2xl">{name}</h1>
          <ul className="list-disc">
            <li className="text-gray-500">{time}</li>
          </ul>
        </section>
        <div className="lg:mx-16">
          <p className="w-full">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
