import React, { useContext } from "react";
import { Context } from "../layout";
import DeletedJob from "./components/DeletedJob";
const TestData = [
    {
      id:1,
      job_title:'Laying tiles: 25m2; Floor in bathroom, kitchen, hall 25km, Berlin',
      posted_on:{
        date:'23/05/2023',
        time:'9:45 AM'
      }
    },
    {
        id:2,
        job_title:'Laying tiles: 100m2; Floor, kitchen,',
        posted_on:{
          date:'24/05/2023',
          time:'8:45 AM'
        }
      },
]
export default function Index() {
  const { toggleSideBar } = useContext(Context);
  return (
    <div className={`w-full ${toggleSideBar ? "lg:mx-32" : "md:mx-10"} my-12`}>
      <div className="bg-white rounded-md shadow-md overflow-x-scroll">
      {TestData.map((item)=>(
        <DeletedJob key={item.id} job_title={item.job_title} posted_on={item.posted_on}/>
     ))}

      </div>
    </div>
  );
}
