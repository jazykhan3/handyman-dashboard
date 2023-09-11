import Image from "next/image";
import React  from "react";
import PaymentTable from "./components/table";
  export default function SubscriptionManagement() {
    interface PaymentItem {
        paymentDate: string;
        paymentPlan: string;
        paymentThru: string;
        paymentAmount: string;
        id:number;
      }
      
      const data: PaymentItem[] = [
        {
          paymentDate: '2023-08-01',
          paymentPlan: '3 Month Subscription',
          paymentThru: 'Credit Card',
          paymentAmount: '$30',
          id:12,
        },
        {
            paymentDate: '2023-08-01',
            paymentPlan: '3 Month Subscription',
            paymentThru: 'Credit Card',
            paymentAmount: '$30',
            id:12,
          },
          {
            paymentDate: '2023-08-01',
            paymentPlan: '3 Month Subscription',
            paymentThru: 'Credit Card',
            paymentAmount: '$30',
            id:12,
          },
        // Add more data here...
      ];
      
    const dummyData = [
        {
          planName: '3-Month',
          price: 30,
          paymentStatus: 'Payment',
        },
        {
          planName: '6-Month',
          price: 50,
          paymentStatus: 'Paid',
        },
        {
          planName: '12-Month',
          price: 90,
          paymentStatus: 'Paid',
        },
      ];
    return (
      <div className="my-2 w-full md:mx-32">
        <h1 className="text-3xl font-bold">
          <span className="text-orange">Your Subscription Hub:</span> Manage Your Preferences
        </h1>
        <div className="my-7 mx-5 flex flex-row gap-4">
        {dummyData?.map((item, idx) => (
  <div key={idx} className="flex bg-white items-center pb-0 flex-col justify-between p-4 border border-gray-300 rounded-lg h-[20rem] shadow-md mb-4">
    
  <div className="flex items-center justify-between flex-col h-full">
  <span className="font-semibold text-center text-2xl">
  {item.planName}
  <br />
  Subscription
</span>
      <span className="mr-2 text-3xl">${item.price}</span>
      <button className={`py-1 px-4 rounded-xl  ${item.paymentStatus === 'Paid' ? 'bg-[#FF6A18] text-[#ffffff]' : 'border border-black bg-white text-black'}`}>
        {item.paymentStatus}
      </button>
</div>
<div className=" mt-4">
      <Image height={85} width={386} src={'/Dashboard/handyman/paymentOptions.svg'} alt={''} />
    </div>
  </div>
))}
</div>  
<div className="my-14"><PaymentTable data={data} />

        </div>
      </div>
    );
  } 