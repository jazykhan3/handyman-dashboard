import React from "react";
import { HandymanLayout, ChangePasswordHandyman } from "@/components/Dashboard";
import Head from "next/head";

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Change password</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HandymanLayout>
        <main className="h-screen bg-mainBackground">
          <div className="Container pt-24">
            <ChangePasswordHandyman />
          </div>
        </main>
      </HandymanLayout>
    </React.Fragment>
  );
}
