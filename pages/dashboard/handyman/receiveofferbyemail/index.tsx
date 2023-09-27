import React from "react";
import { HandymanLayout, ReceiveOfferByEmail } from "@/components/Dashboard";
import Head from "next/head";

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Receive offer by email</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HandymanLayout>
        <main className="h-screen bg-mainBackground">
          <div className="Container pt-24">
            <ReceiveOfferByEmail />
          </div>
        </main>
      </HandymanLayout>
    </React.Fragment>
  );
}
