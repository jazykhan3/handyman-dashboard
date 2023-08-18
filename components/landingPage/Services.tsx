import React, { useState } from 'react';
import { AllServices } from './components';
import { GoChevronRight } from 'react-icons/go';

export default function Services() {
  const [orderNewOrOld, setOrderNewOrOld] = useState(false);
  const [orderTime, setOrderTime] = useState('All Services');

  const toggleOrderDropdown = () => {
    setOrderNewOrOld(!orderNewOrOld);
  };

  const handleSortOptionClick = (option:any) => {
    setOrderTime(option);
    toggleOrderDropdown();
  };

  return (
    <div className='w-full pt-20 pb-10'>
      <div className='pt-1 flex pr-6'>
        <div className='col-8 w-3/4'>
          <h1 className='ml-6 font-bold text-2xl md:text-3xl '>
            Service selection according to your wishes: Discover our craftsman categories and receive free craftsman offers
          </h1>
        </div>
        <div className='col-4 w-1/4 flex justify-end	'>
        <div className="relative">
         <div className={`shadow bg-white flex justify-center items-center rounded-md py-3 px-4 gap-4 ${orderNewOrOld && 'text-orange'}`}>
           <button onClick={()=>setOrderNewOrOld(!orderNewOrOld)}>{orderTime}</button>
           <GoChevronRight className="mt-1 text-xl" />
         </div>
         {orderNewOrOld && 
        <div className={`bg-white shadow  p-3 rounded cursor-pointer  mt-1   absolute flex flex-col space-y-5 z-40`}>
            <span className=" hover:text-orange  cursor-pointer" onClick={()=>{setOrderNewOrOld(false); setOrderTime('Sort by New order')}}>Sort by New order</span>
            <span className=" hover:text-orange  cursor-pointer" onClick={()=>{setOrderNewOrOld(false);setOrderTime('Sort by Older order')}}>Sort by Older order</span>
            <span className=" hover:text-orange  cursor-pointer" onClick={()=>{setOrderNewOrOld(false);setOrderTime('Sort by newest or older')}}>Sort by newest or older</span>
        </div>
        }
      </div>
        </div>
      </div>
      <AllServices />
    </div>
  );
}
