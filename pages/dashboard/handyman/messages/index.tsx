import React from "react";
import { HandymanLayout, HandyManMessages } from "@/components/Dashboard";
import Head from "next/head";

export default function changeemail() {
  return (
    <React.Fragment>
      <Head>
        <title>Messages</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HandymanLayout>
        <main className="h-screen bg-mainBackground">
          <div className="Container pt-24">
            <HandyManMessages />
          </div>
        </main>
      </HandymanLayout>
    </React.Fragment>
  );
}
