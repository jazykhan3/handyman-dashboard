import React from "react";
import Logout from "./Logout";
import {FaRegUserCircle} from 'react-icons/fa';
import { navigation } from "@/constants/Dashboard/handyman";
import SidbarNavigationLinks from '@/components/Dashboard/components/SidbarNavigationLinks';
export default function Sidebar({slideNav,toggleSideBar,setToggleSideBar}: {slideNav: boolean;toggleSideBar: boolean;setToggleSideBar: React.Dispatch<React.SetStateAction<boolean>>;}) {
  return (
    <div className={`bg-white shadow-lg border-2  py-6 ${toggleSideBar ? "sm:w-72 w-60" : "w-24" } fixed top-0 ${!slideNav ? "left-0" : "-left-96"} overflow-y-auto`}>
      <nav className="h-screen flex  flex-col py-20 justify-between">
        <div className={`flex justify-start items-center  ${toggleSideBar ? "sm:mx-9 mx-5" : 'justify-center pr-2' } gap-3`}>
          <div className="bg-white  shadow rounded-full my-4 p-1">
            <FaRegUserCircle className="cursor-pointer text-6xl" title="Click on image"  onClick={() => setToggleSideBar(!toggleSideBar)}/>
          </div>
          <section className={`${toggleSideBar ? "block" : "hidden"}`}>
            <h1 className="text-xl font-bold">Paul Ben</h1>
            <p className="text-gray-600 font-medium">Wall Builder</p>
          </section>
        </div>
        <SidbarNavigationLinks navigation={navigation} toggleSideBar={toggleSideBar}/>
        <Logout toggleSideBar={toggleSideBar} />
      </nav>
    </div>
  );
}
