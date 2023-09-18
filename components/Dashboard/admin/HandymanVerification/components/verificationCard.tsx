import React, { useState } from "react";
import { BiChevronDown, BiChevronRight, BiDotsHorizontalRounded, BiEditAlt } from "react-icons/bi";
import { BsChatDots, BsEnvelope, BsTrash } from "react-icons/bs";
import { FaEnvelope, FaTrash } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";

export default function VerificationCard({
  name,
  time,
  message,
}: {
  name: string;
  time: string;
  message: string;
}) {
  const maxLength = 30;
  const [expanded, setExpanded] = useState(false);
  const [replyVisible, setReplyVisible] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const toggleReplySection = () => {
    setReplyVisible(!replyVisible);
  };

  return (
    <div className="px-10 py-5 bg-white w-full border border-gray-300 rounded-lg">
      <div className="accordion">
        <div className="accordion-item">
          <div className=" accordion-header w-full  flex justify-between items-center gap-20">
            <h1 className="font-bold text-2xl text-orange font-bold">{name}</h1>
            <div className="flex items-center space-x-4">
              <button className="px-2 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm">
                Send
              </button>

              <button className="px-2 py-1 text-white bg-green-500 hover:bg-green-600 rounded-md text-sm">
                View
              </button>

              <button className="px-2 py-1 text-white bg-green-500 hover:bg-green-600 rounded-md text-sm">
                Accept
              </button>

              <button className="px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md text-sm">
                Decline
              </button>
            </div>
            <span>{time}</span>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
