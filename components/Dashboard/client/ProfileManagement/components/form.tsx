import React from "react";

export default function ProfileManagementForm() {
 
  return (
    <div className="w-4/5 space-y-3">
      <form method="POST" onSubmit={()=>{}}>
      <div className=" mx-auto  p-8 ">
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block mb-2 font-bold text-gray-700">First Name</label>
          <input type="text" className="w-full border rounded px-3 py-2 " placeholder="Enter your first name" />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block mb-2 font-bold text-gray-700">Last Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter your last name" />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block mb-2 font-bold text-gray-700">Email Adress</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter your email adress" />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block mb-2 font-bold text-gray-700">Zip Code</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter your zip code" />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block mb-2 font-bold text-gray-700">Phone Number</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="Enter your phone number" />
        </div>
        <div className="w-1/2 pl-2 flex items-end justify-center">
        <label className="block mb-2 font-bold text-gray-700"></label>

        <button className="bg-orange text-white lg:px-5 lg:py-2 px-3 py-1.5 rounded-xl font-medium focus:outline-none float-right " >
        Save
      </button>
        </div>
      </div>

     
    </div>
   


      </form>
    </div>
  );
}
