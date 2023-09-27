import React, { useContext } from "react";
import { Context } from "../layout";
import LoginDetails from "./components/LoginDetails";
export default function Index() {
  const { toggleSideBar } = useContext(Context);
  return (
    <div className={`w-full ${toggleSideBar ? "lg:mx-32" : "mx-0"} my-12`}>
      <LoginDetails />
    </div>
  );
}
