import StatusButton from "@/components/Dashboard/handyman/Orders/components/StatusButton";
import FeedbackPopup from "@/components/Dashboard/handyman/Orders/components/feedback";
import moment from "moment";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditPopup from "./editPopup";
import Image from "next/image";

interface OrderItem {
  title: string;
  paragraph: string;
  price: string;
  postedOn: {
    date: string;
    time: string;
    day: string;
  };
  isNew: boolean;
  status: string;
}

export default function Orders({
  title,
  paragraph,
  price,
  postedOn,
  isNew,
  status,
}: OrderItem) {
  const { date, time } = postedOn;
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [isEditing, setEditing] = useState<boolean>(false); // Add an edit state
  const [titleText, setTitleText] = useState<string>(title); // Initialize title state
  const [paragraphText, setParagraphText] =useState<string>(paragraph);
  const [newDate, setNewDate] =useState<string>(date);
  const [newTime, setNewTime] =useState<string>(time);
  const TestImageData = [
    {
      id: 1,
      img: "/ProfileTest/crousel/img1.png",
    },
    {
      id: 2,
      img: "/ProfileTest/crousel/img2.png",
    },
    {
      id: 3,
      img: "/ProfileTest/crousel/img3.png",
    },
    {
      id: 4,
      img: "/ProfileTest/crousel/img4.png",
    },
    {
      id: 5,
      img: "/ProfileTest/crousel/img5.png",
    },
  ];

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const handleEditSave = (newTitle: string, newParagraph: string, newDate: string, newTime: string) => {
    // Handle the save action here with the updated values (newTitle, newParagraph, newDate, newTime)
    // You can update your state or perform any necessary actions
    setTitleText(newTitle);
    setParagraphText(newParagraph);
    setNewDate(newDate);
    setNewTime(newTime);
  };
 
  return (
    <>
      <div className="w-full py-5 px-3">
        <section className="w-full  flex justify-between items-start">
          <div className="ext-xl font-semibold flex flex-col">
            <div className="flex " >{TestImageData.map(({ id, img }) => (
          <div key={id} style={{height:80}}>
            <Image src={img} alt={`crousel ${id}`} width={60} height={60}  style={{maxHeight:60}} className="object-cover  p-2 rounded-2xl"/>
          </div>
        ))}</div>
            <h1 className="text-xl font-semibold flex flex-row gap-3 items-end">
        
          <section className="">
{moment(newDate, "DD-MM-YYYY").format("D/MMM")}
   {isNew && (
                <span className="ml-2 text-[#67B554] ">
                  new <span className="text-5xl">.</span>
                </span>
              )}
        </section>
             
            </h1>
           
          <section className="my-3 font-normal">
            {newTime}
          </section>
          </div>

          {(status == 'complete' && !isEditing) && (
            <button
              onClick={openPopup}
              className="rounded px-3 py-1 cursor-pointer text-white flex gap-2 items-center capitalize bg-orange"
            >
              Give feedback
            </button>
          )}
         {isEditing ? <button className="rounded px-3 py-1 cursor-pointer text-white flex gap-2 items-center capitalize bg-orange"  onClick={()=>setEditing(false)} >Submit</button>: <StatusButton
            status={status}
            // showIcons={!isEditing}
            onEditClick={()=>setEditing(true)} // Hide icons when editing is active
          />}
          {/* Add an edit button */}
        </section>
        {/* Render editable fields if in edit mode */}
      
          <section className="my-3">
            {title}
          </section>
        
       
          <section className="my-3">
            {paragraph}
          </section>
        
        <span className="text-6xl font-normal inline-block my-3 float-right">
          {price}
        </span>
      </div>
      <FeedbackPopup isOpen={isPopupOpen} onClose={closePopup} />
      <EditPopup
        imagesData={TestImageData}
        isOpen={isEditing}
        onClose={()=>setEditing(false)}
        onSave={handleEditSave}
        initialTitle={title}
        initialParagraph={paragraph}
        initialDate={newDate}
        initialTime={newTime}
      />
    </>
  );
}
