import React from "react";
import Head from "next/head";
import { HandymanLayout, JobAlerts, PaymentSetting, ReviewsAndFeedback, SubcriptionManagement } from "@/components/Dashboard";

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Handyman | Job Alerts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HandymanLayout>
        <main className="h-full bg-mainBackground ">
          <div className="Container pt-24 flex justify-center">
            <JobAlerts />
          </div>
        </main>
      </HandymanLayout>
    </React.Fragment>
  );
}
