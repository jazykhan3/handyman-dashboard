import React from "react";
import { AdminDashBoard, ClientLayout, ClientMessages, Messages, Payments } from "@/components/Dashboard";
import Head from "next/head";

export default function changeemail() {
  return (
    <React.Fragment>
        <Head>
        <title>Payments | Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminDashBoard>
        <main className="h-screen bg-mainBackground">
          <div className="Container pt-24">
<Payments />          </div>
        </main>
      </AdminDashBoard>
    </React.Fragment>
  );
}
