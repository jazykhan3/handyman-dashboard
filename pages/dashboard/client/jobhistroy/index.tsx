import React from "react";
import { ClientLayout, JobHistroy } from "@/components/Dashboard";
import Head from "next/head";
export default function Index() {
  return (
    <React.Fragment>
        <Head>
        <title>Client | Job Histroy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientLayout>
        <main className="h-screen bg-mainBackground">
          <div className="Container pt-24">
            <JobHistroy />
          </div>
        </main>
      </ClientLayout>
    </React.Fragment>
  );
}
