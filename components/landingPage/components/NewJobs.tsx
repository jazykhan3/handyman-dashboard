import React from "react";

import {testData} from './NewJob/FetchNewJob';
import Link from 'next/link';
import {JOB} from './NewJob/Job';
export default function NewJobs() {
  return (
    <div className="mt-11">
     {testData.map(({id,title,m2,image,posted,location,slug,category})=>(
        <JOB key={id} title={title} m2={m2} image={image} posted={posted} location={location} slug={slug} category={category}/>
     ))}
     <div className="mt-5 flex justify-center items-center mx-auto">
        <Link href={'/newjob'} title="See more Jobs">
          <button type="button" className="bg-orange sm:px-6 sm:py-3 px-3 py-2 text-white rounded-lg sm:text-lg text-sm" aria-label="See more Jobs">See more Jobs</button>
        </Link>
     </div>
    </div>
  );
}
