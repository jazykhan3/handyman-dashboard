
import React, { useState } from "react";
import { BiChevronDown, BiChevronRight, BiDotsHorizontalRounded, BiEditAlt } from "react-icons/bi";
import { BsChatDots, BsEnvelope, BsTrash } from "react-icons/bs";
import { FaEnvelope, FaTrash } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";

export default function ReviewSection({
}: {
  name: string;
  time: string;
  message: string;
}) {

  return (
    <div className="px-10 py-5 bg-white w-full border border-gray-300 rounded-lg">
 <div className="flex justify-between "><span className="font-bold">Review</span> <span className="flex items-center gap-2"><BiDotsHorizontalRounded/> <BiEditAlt/></span></div>
<div className="my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
the industry&apos;s standard dummy text.</div>
<div className="flex justify-end"><button className="bg-orange p-3 rounded font-bold text-white">Submit</button></div>
    </div>
  );
}
