// components/PaymentTable.tsx
import React from 'react';
import { BiChevronDownCircle } from 'react-icons/bi';

interface PaymentItem {
  paymentDate: string;
  paymentPlan: string;
  paymentThru: string;
  paymentAmount: string;
  id: number;
}

interface PaymentTableProps {
  data: PaymentItem[];
}

const PaymentTable: React.FC<PaymentTableProps> = ({ data }) => {
  return (
    <div className="w-full">
      <table className="w-full table-fixed">
        <thead className="mb-4">
          <tr>
            <th className="py-2 px-2 border-b-2 border-orange-500 text-orange text-start">ID</th>
            <th className="py-2 px-2 w-1/5 border-b-2 border-orange-500 text-orange text-start">Payment Date</th>
            <th className="py-2 px-2 border-b-2 border-orange-500 text-orange text-start">Payment Plan</th>
            <th className="py-2 px-2 border-b-2 border-orange-500 text-orange text-start">Payment Thru</th>
            <th className="py-2 px-2 border-b-2 border-orange-500 text-orange text-start">Payment Amount</th>
            <th className="py-2 px-2 border-b-2 border-orange-500 text-orange text-start">                <button className="text-black bg-orange rounded-xl p-2">Download All</button>
</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 ">{item.id}</td>
              <td className="py-2 px-4 ">{item.paymentDate}</td>
              <td className="py-2 px-4 ">{item.paymentPlan}</td>
              <td className="py-2 px-4 ">{item.paymentThru}</td>
              <td className="py-2 px-4 ">{item.paymentAmount}</td>
              <td className="py-2 px-4 ">
                <button className="text-orange flex gap-1 items-center">View <BiChevronDownCircle/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
