import moment from "moment";
import React, { useState } from "react";
import StatusButton from "./StatusButton";
import { FaEdit, FaTrash } from "react-icons/fa";
import FeedbackPopup from "./feedback";

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


  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

 
  return (
    <>
      <div className="w-full py-5 px-3">
        <section className="w-full  flex justify-between items-start">
          <div className="ext-xl font-semibold flex flex-col">
            <h1 className="text-xl font-semibold flex flex-row gap-3 items-end">
            {isEditing ? (
          <input
            type="text"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            style={{width:'60%'}}
          />
        ) : (
          <section className="">
{moment(newDate, "DD-MM-YYYY").format("D/MMM")}
   {isNew && (
                <span className="ml-2 text-[#67B554] ">
                  new <span className="text-5xl">.</span>
                </span>
              )}
        </section>
        )}  
             
            </h1>
            {isEditing ? (
          <input
            type="text"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            style={{width:'60%'}}
          />
        ) : (
          <section className="my-3 font-normal">
            {newTime}
          </section>
        )}
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
        {isEditing ? (
          <textarea
            // type="text"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
            style={{width:'60%'}}
          />
        ) : (
          <section className="my-3">
            {title}
          </section>
        )}
        {isEditing ? (
          <textarea
            // type="text"
            value={paragraphText}
            onChange={(e) => setParagraphText(e.target.value)}
            style={{width:'60%'}}
          />
        ) : (
          <section className="my-3">
            {paragraph}
          </section>
        )}
        <span className="text-6xl font-normal inline-block my-3 float-right">
          {price}
        </span>
      </div>
      <FeedbackPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}
