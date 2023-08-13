import React from "react";
import { ClientLayout, PostedJOB } from "@/components/Dashboard";
import Head from "next/head";
export default function PostedJOBPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Posted job</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientLayout>
        <main className="h-screen bg-mainBackground">
          <div className="Container pt-24">
            <PostedJOB />
          </div>
        </main>
      </ClientLayout>
    </React.Fragment>
  );
}
