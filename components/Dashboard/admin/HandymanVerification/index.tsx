import React, { useContext } from "react";
import { Context } from "../../client/layout";
import Messages from "../../components/Messages";
import VerificationCard from "./components/verificationCard";
import ReviewSection from "./components/reviewSection";
const TestData = [
  {
    id:1,
    name:'Paul Ben',
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
        Handyman Verification for Admins:
          <span className="text-orange font-bold">
          Approving and Validating New Registrations
          </span>
        </h1>
      </section>
      <div className=" rounded-md  h-[18rem]  flex flex-col gap-5 ">
        {TestData.map((item)=>(
          <VerificationCard key={item.id} name={item.name} time={item.time} message={item.message}/>
        ))}
         {TestData.map((item)=>(
          <ReviewSection key={item.id} name={item.name} time={item.time} message={item.message}/>
        ))}
      </div>
    </div>
  );
}
