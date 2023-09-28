import React  from "react";
import { AiFillStar } from "react-icons/ai";
const TestReviewsData = [
  {
    id:1,
    paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    star:[1,2,3,4,5]
  },
  {
    id:2,
    paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    star:[1,2,3,4]
  },
  {
    id:2,
    paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    star:[1,2,3,4]
  },
]
const ReviewsSection = ({paragraph,star}:{paragraph:string;star:Number[]}) => {
  return (
    
    <div className="w-full  bg-white rounded-lg shadow my-4 ">
           <section className="flex items-center justify-between p-1"><div className="flex items-center gap-3">
                <span className="" style={{borderRadius:'50%'}}><img
                        height={50}
                        width={50}
                        src="/Dashboard/admin/admin.png"
                      /></span>
                <span className="flex flex-col"><span className="font-bold">Jon Smith</span> <span className="font-bold">Berlin</span></span>
                </div>
                <div className="text-normal">Done electrical wiring of building</div><div className="font-bold">listing ID: 1232342</div><div className="font-bold">Dated : 12/May/24</div>
                </section>

      <div className="flex md:justify-around md:items-center gap-16 px-7  pb-5 flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center space-y-3">

          <span>{star.length}.0 stars</span>
          <div className="flex">
            {star.map((item,index) => (
              <AiFillStar key={index} className="bg-red-500 mx-1 text-white rounded text-lg p-0.5"/>
            ))}
          </div>    
        </div>
        <p className="flex items-end justify-start flex-col font-medium text-gray-600 md:w-2/3 w-full">
        

         {paragraph}
        </p>
      </div>
      <div className="mb-4 flex justify-end p-2 gap-2">  <button  className=" bg-orange  text-white font-bold py-2.5 px-4 rounded-md focus:outline-none mt-4" >
          Edit Review
        </button>  <button className=" bg-orange  text-white font-bold py-2.5 px-4 rounded-md focus:outline-none mt-4" >
          Deactivate Review
        </button></div>
    </div>
  );
};
export default function ReviewsFromClients() {
  return (
    <div className="my-2 w-full md:mx-32">
      <h1 className="text-3xl font-bold">
        <span className="text-orange">Voices of experience</span> Reviews and Feedback
      </h1>
      <div className="my-7 mx-5">
        {TestReviewsData.map(({id,paragraph,star})=>(
            <ReviewsSection key={id} paragraph={paragraph} star={star}/>
        ))}
      </div>
    </div>
  );
}
