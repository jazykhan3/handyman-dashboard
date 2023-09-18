import React from "react";
import { AdminDashBoard, ActivationSettingHS } from "@/components/Dashboard";
import Head from "next/head";

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Activation setting - handyman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminDashBoard>
        <main className="h-screen bg-mainBackground">
          <div className="Container pt-24">
            <ActivationSettingHS />
          </div>
        </main>
      </AdminDashBoard>
    </React.Fragment>
  );
}
