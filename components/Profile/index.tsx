import React,{useState} from 'react'
import Hero from './components/Hero';
import Services from './components/Services';
import AboutBusiness from './components/AboutBusiness';
import ReviewsFromClients from './components/ReviewsFromClients';
export default function Index() {
  return (
    <div className='pt-28 w-full'>
        <Hero/>
        <Services count={3} showArrows={false} />
        <AboutBusiness/>
        <ReviewsFromClients/>
    </div>
  )
}
