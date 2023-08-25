import React from "react";
import { ClientLayout, AcceptOffers } from "@/components/Dashboard";
import Head from 'next/head';
export default function changeemail() {
  return (
    <React.Fragment>
      <Head>
        <title>Client | Offers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientLayout>
        <main className="h-screen bg-mainBackground">
          <div className="Container pt-24">
            <AcceptOffers />
          </div>
        </main>
      </ClientLayout>
    </React.Fragment>
  );
}
