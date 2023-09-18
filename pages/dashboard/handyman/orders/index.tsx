import React from "react";
import { HandymanLayout, Orders } from "@/components/Dashboard";
import Head from "next/head";

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Orders</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HandymanLayout>
        <main className="h-full bg-mainBackground">
          <div className="Container pt-24">
            <Orders />
          </div>
        </main>
      </HandymanLayout>
    </React.Fragment>
  );
}
