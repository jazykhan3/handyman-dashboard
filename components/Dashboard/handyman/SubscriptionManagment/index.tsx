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
          planName: '3 Month Subscription',
          price: 30,
          paymentStatus: 'payment',
        },
        {
          planName: '6 Month Subscription',
          price: 50,
          paymentStatus: 'paid',
        },
        {
          planName: '12 Month Subscription',
          price: 90,
          paymentStatus: 'paid',
        },
      ];
    return (
      <div className="my-2 w-full md:mx-32">
        <h1 className="text-3xl font-bold">
          <span className="text-orange">Your Subscription Hub:</span> Manage Your Preferences
        </h1>
        <div className="my-7 mx-5">
        {dummyData?.map((item, idx) => (
  <div key={idx} className="flex items-end justify-between p-4 border border-gray-300 rounded-lg h-[6rem] shadow-md mb-4">
    <div className="w-2/5 mr-4">
      <Image height={85} width={386} src={'/Dashboard/handyman/paymentOptions.svg'} alt={''} />
    </div>
    <div className="w-3/5 border bg-white rounded-2xl  shadow-md p-3">
  <div className="flex items-center justify-between">
    <span className="font-semibold">{item.planName}</span>
    <span className="flex items-center">
      <span className="mr-2">${item.price}</span>
      <button className={`py-1 px-2 rounded ${item.paymentStatus === 'paid' ? 'bg-[#FF6A18] text-white' : 'bg-[#FF6A18] text-white'}`}>
        {item.paymentStatus}
      </button>
    </span>
  </div>
</div>
  </div>
))}
<div className="my-14"><PaymentTable data={data} />
</div>  
        </div>
      </div>
    );
  } 