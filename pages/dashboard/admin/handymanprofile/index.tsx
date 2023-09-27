import React from "react";
import { AdminDashBoard, HandymanProfile } from "@/components/Dashboard";
import Head from "next/head";

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Handyman profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminDashBoard>
        <main className="h-screen bg-mainBackground">
          <div className="Container pt-24">
            <HandymanProfile />
          </div>
        </main>
      </AdminDashBoard>
    </React.Fragment>
  );
}
