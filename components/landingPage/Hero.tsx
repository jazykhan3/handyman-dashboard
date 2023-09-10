import React from "react";
import HeroSearchAndText from './components/HeroSearchAndText';
import HeroImage from '../../public/LandingPage/landingPage.png';

export default function Hero() {
  return (
    <div
    style={{height:750}}
      className="w-full lg:px-5 px-1 mt-5 heroSection flex justify-center"
    >
      <div className="container  flex items-center justify-center flex-col lg:flex-row gap-3 md:gap-0">
        <HeroSearchAndText homePageOrNOt={true} />
      </div>
    </div>
  );
}
