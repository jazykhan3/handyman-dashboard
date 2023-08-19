import React, { useContext } from "react";
import { Context } from "../layout";
import Messages from "../../components/Messages";
const TestData = [
  {
    id:1,
    name:'Johnsmith',
    time:'5 hours ago',
    message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'
  },
  {
    id:2,
    name:'Paul Ben',
    time:'8 hours ago',
    message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'
  },
  {
    id:3,
    name:'Paul Ben',
    time:'8 hours ago',
    message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'
  },
]
export default function Index() {
  const { toggleSideBar } = useContext(Context);
  return (
    <div className={`lg:w-[80%]  ${toggleSideBar ? "mx-auto" : "md:mx-32"}  my-12`}>
           <section className="  my-8">
        <h1 className="font-bold text-4xl text-Heading">
        Stay Connected:
          <span className="text-orange font-bold">
            Your Message Center
          </span>
        </h1>
      </section>
      <div className=" rounded-md  h-[18rem]  flex flex-col gap-5 ">
        {TestData.map((item)=>(
          <Messages key={item.id} name={item.name} time={item.time} message={item.message}/>
        ))}
      </div>
    </div>
  );
}
