import React from "react";
import Image from "next/image";
import { MdAddAPhoto } from "react-icons/md";
import { InputdDataType } from "../index";
import {FaRegUserCircle} from 'react-icons/fa';

interface EditProfilePropsType {
  inputData: InputdDataType;
  setInputData: React.Dispatch<React.SetStateAction<InputdDataType>>;
  handleSubmit: (e: React.FormEvent) => void;
  zip_codeError: string;
  setImagePageData: React.Dispatch<React.SetStateAction<string[]>>;
  imageDataPageData: string[]
}
export default function EditProfile({inputData,setInputData,handleSubmit,zip_codeError,setImagePageData,imageDataPageData}: EditProfilePropsType) {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files: FileList = event.target.files!;
    const images: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const render: FileReader = new FileReader();
      render.onload = (event: ProgressEvent<FileReader>) => {
        images.push(event.target!.result as string);
        if (images.length === files.length) {
          setImagePageData(images);
        }
      };
      render.readAsDataURL(files[i]);
    }
  };
  return (
    <div className="w-4/5 space-y-3">
      <form method="POST" onSubmit={handleSubmit}>
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
          <label className="block mb-2 font-bold text-gray-700">Company Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter your company name" />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block mb-2 font-bold text-gray-700">Zip Code</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter your zip code" />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block mb-2 font-bold text-gray-700">New Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="Enter your new email" />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block mb-2 font-bold text-gray-700">Confirm Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="Confirm your email" />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block mb-2 font-bold text-gray-700">New Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" placeholder="Enter your new password" />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block mb-2 font-bold text-gray-700">Confirm Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" placeholder="Confirm your password" />
        </div>
      </div>

     
    </div>
    <button className="bg-orange text-white lg:px-5 lg:py-2 px-3 py-1.5 rounded-xl font-medium focus:outline-none float-right " >
        Save
      </button>


      </form>
    </div>
  );
}
