import React from 'react'
import {AllServices} from './components';
export default function Services() {
  return (
    <div className='w-full pt-20 pb-10'>
        <div className='pt-1'>
            <h1 className='ml-6 font-bold text-2xl md:text-3xl'><span className='text-orange'>Select service</span> and find craftsmen</h1>
            <AllServices/>
        </div>
    </div>
  )
}
