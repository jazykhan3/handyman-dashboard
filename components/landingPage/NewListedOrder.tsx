import React from 'react'
import NewJobs from './components/NewJobs';
export default function NewListedOrder() {
  return (
    <div className='w-full'>
        <div className='my-10'>
            <section className='text-center flex justify-center items-center'>
                <h1 className='font-bold text-3xl sm:text-4xl text-Heading'>New Listed <span className='text-orange'>Orders</span></h1>
            </section>
            <NewJobs/>
        </div>
    </div>
  )
}
