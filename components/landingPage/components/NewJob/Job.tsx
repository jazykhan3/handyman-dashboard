import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { TestDataType } from "./FetchNewJob";
import Link from "next/link";
export const JOB = ({title,m2,image,posted,location,slug,category,id}: TestDataType) => {
  const { region, distance } = location;
  return (
    <div className="bg-white  border-2 rounded-sm m-2 my-10 overflow-x-scroll scrollbar-hide" id={id?.toString()}>
      <div className="w-[50rem]  md:min-w-full">
        <div className="mb-1 border-b-2 pb-3 pt-2 text-xl flex flex-col lg:flex-row px-5">
          <h2 className="text-orange lg:ml-10">{category}</h2>
          <h2 className="lg:ml-[13.5rem] hover:text-orange hover:underline"><Link href={`/newjob/${slug}`}>{title}</Link></h2>
        </div>
        <div className="w-full my-4">
          <div className="flex w-full  justify-around items-start">
            <div className="space-y-5  w-[10rem]">
              <h3 className="text-xl font-semibold">m2</h3>
              <span className="inline-block md:text-xl text-gray-600">
                {m2}
              </span>
            </div>
            <div className="w-[10rem]">
              <Image src={image} alt="new listed job" width={170} height={170}/>
            </div>
            <div className="space-y-5 w-[10rem]">
              <h3 className="text-xl font-semibold">Posted</h3>
              <span className="inline-block md:text-xl text-gray-600">
                {posted}
              </span>
            </div>
            <div className="space-y-5 relative flex  flex-col justify-start items-start w-[10rem]">
              <div className="flex gap-2 items-center">
                <CiLocationOn className="text-xl" />
                <h3 className="text-xl font-semibold">{region}</h3>
              </div>
              <span className="md:text-xl inline-block text-gray-600">
                {distance}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
