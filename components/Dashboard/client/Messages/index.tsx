import React, { useContext } from "react";
import { Context } from "../layout/index";
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
  }
]
export default function Index() {
  const { toggleSideBar } = useContext(Context);
  return (
    <div className={`lg:w-[70%]  ${toggleSideBar ? "mx-auto" : "md:mx-10"}  my-12`}>
      <div className="bg-white rounded-md shadow-md h-[18rem] overflow-y-scroll ">
        {TestData.map((item)=>(
          <Messages key={item.id} name={item.name} time={item.time} message={item.message}/>
        ))}
      </div>
    </div>
  );
}
