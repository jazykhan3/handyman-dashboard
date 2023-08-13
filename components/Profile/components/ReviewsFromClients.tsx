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
]
const ReviewsSection = ({paragraph,star}:{paragraph:string;star:Number[]}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow my-4 ">
      <div className="flex md:justify-around md:items-center gap-16 px-7 pt-10 pb-20 flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center space-y-3">
          <span>{star.length}.0 stars</span>
          <div className="flex">
            {star.map((item,index) => (
              <AiFillStar key={index} className="bg-red-500 mx-1 text-white rounded text-lg p-0.5"/>
            ))}
          </div>    
        </div>
        <p className="font-medium text-gray-600 md:w-2/3 w-full">
         {paragraph}
        </p>
      </div>
    </div>
  );
};
export default function ReviewsFromClients() {
  return (
    <div className="my-2 w-full">
      <h1 className="text-3xl font-bold">
        <span className="text-orange">Reviews</span> from Clients
      </h1>
      <div className="my-7 mx-5">
        {TestReviewsData.map(({id,paragraph,star})=>(
            <ReviewsSection key={id} paragraph={paragraph} star={star}/>
        ))}
      </div>
    </div>
  );
}
