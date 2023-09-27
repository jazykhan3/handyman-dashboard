import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { BsChatDots, BsEnvelope, BsTrash } from "react-icons/bs";
import { FaEnvelope, FaTrash } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";

export default function Messages({name,time,message}:{name: string;time: string;message: string}) {
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
        <p>
        {message.length > maxLength ? (
           message.slice(0, maxLength - 3) + "..."
        ) : (
          message
        )}
      </p>
      <span>{time}</span>
        <span
          className="text-gray-500 cursor-pointer"
          onClick={toggleAccordion}
        >
          {expanded ? <BiChevronDown fontSize={40}/> : <BiChevronRight fontSize={40}/>}
        </span>
      </div>

          {expanded && (
            <div className="accordion-content  ">
<div className="flex justify-between"><span className="font-bold text-2xl">25/june/2023</span> <span className="flex gap-2"><BsEnvelope/><BsTrash/> <BsChatDots/></span></div>
<div className="flex flex-col gap-10"><section className="w-1/2 p-8 text-black rounded-lg shadow-xl">
        {message}
      </section>
      <section className="w-full">
        <div className="w-1/2 p-8 bg-[#ff691880] text-[a0552c] rounded-lg shadow-xl float-right">        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, obcaecati dolor, placeat architecto hic laborum tenetur exercitationem quo dolore vel pariatur, provident tempora officiis! Velit dolores atque iusto quia explicabo! Obcaecati hic nostrum, libero odio voluptates numquam quisquam recusandae nihil! Laboriosam consectetur laborum aspernatur autem? Esse saepe cumque expedita fugit libero iusto asperiores, neque illum quod magnam. Quam, aspernatur tempore?
</div>
      </section></div>
      <div className="input-container flex justify-between border-2 p-2 my-5 rounded">
    <input className="input-field focus:outline-none w-full visited:outline-none" type="text" placeholder="Type your reply..." />
    <div className="send-icon cursor-pointer">&#10148;</div>
  </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}
