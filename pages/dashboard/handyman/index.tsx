import React from "react";
import Head from "next/head";
import EditProfile from "./editprofile";
export default function HandymantDashboard() {
  return (
    <div className="w-full">
      <div>
        <EditProfile />
      </div>
    </div>
  );
}
