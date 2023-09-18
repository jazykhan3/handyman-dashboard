import React, { useContext, useState } from "react";
import { Context } from "../layout";
import ChangePassword from "../../components/ChangePassword";
import ProfileManagementForm from "./components/form";
export interface EmailErroType {
  password_Error: string;
  password_doNotMatch: string;
}
export type EmailType = {
  password:string,
  cPassword:string
}
export default function Index() {
  const { toggleSideBar } = useContext(Context);

  return (
    <div className={`lg:w-[80%]  ${toggleSideBar ? "mx-auto" : "md:mx-32"}  my-12`}>
    <section className="  my-20">
 <h1 className="font-bold text-4xl text-Heading">
 Manage your  <span className="text-orange font-bold">
      Client profile
   </span>
 </h1>
</section>
<div className=" rounded-md  h-[18rem]  flex flex-col gap-5 ">
<ProfileManagementForm />
</div>
</div>
  );
}
