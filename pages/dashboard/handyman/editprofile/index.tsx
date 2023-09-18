import React from "react";
import { HandymanLayout, EditProfile } from "@/components/Dashboard";
import Head from "next/head";

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Handyman | Edit profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HandymanLayout>
        <main className="h-full bg-mainBackground">
          <div className="Container pt-24 -mb-10">
            <EditProfile />
          </div>
        </main>
      </HandymanLayout>
    </React.Fragment>
  );
}
