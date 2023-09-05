import React, { useContext } from "react";
import { Context } from "../layout";
import Messages from "../../components/Messages";
import Table from "./components/table";

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
    paymentPlan: '3 Month ',
    paymentThru: 'Credit Card',
    paymentAmount: '$30',
    id:12,
  },
  {
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'Credit Card',
      paymentAmount: '$30',
      id:12,
    },
    {
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'PayPal',
      paymentAmount: '$30',
      id:12,
    },
    {
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'Credit Card',
      paymentAmount: '$30',
      id:12,
    },
    {
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'PayPal',
      paymentAmount: '$30',
      id:12,
    },{
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'Credit Card',
      paymentAmount: '$30',
      id:12,
    },
    {
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'Credit Card',
      paymentAmount: '$30',
      id:12,
    },
    {
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'PayPal',
      paymentAmount: '$30',
      id:12,
    },{
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'Credit Card',
      paymentAmount: '$30',
      id:12,
    },
    {
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'PayPal',
      paymentAmount: '$30',
      id:12,
    },{
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'Credit Card',
      paymentAmount: '$30',
      id:12,
    },
    {
      paymentDate: '2023-08-01',
      paymentPlan: '3 Month ',
      paymentThru: 'PayPal',
      paymentAmount: '$30',
      id:12,
    },
  // Add more data here...
];
export default function Index() {
  const { toggleSideBar } = useContext(Context);

  return (
    <div className={`lg:w-[80%]  ${toggleSideBar ? "mx-auto" : "md:mx-32"}  my-12`}>
           <section className="  my-8">
        <h1 className="font-bold text-4xl text-Heading">
        Admin payment management:
          <span className="text-orange font-bold">
          Control and Oversight         </span>
        </h1>
      </section>
      <div className=" rounded-md  h-[18rem]  flex flex-col gap-5 ">
        <Table data={data}/>
      </div>
    </div>
  );
}
