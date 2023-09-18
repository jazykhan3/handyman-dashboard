import React, { useContext } from "react";
import { Context } from "../layout";
import ActiveListingCS from "./components/ActiveListingCS";

export default function Index() {
  const { toggleSideBar } = useContext(Context);

  return (
    <div className={`w-full ${toggleSideBar ? "lg:mx-32" : "mx-0"} my-12`}>
      <ActiveListingCS />
    </div>
  );
}
