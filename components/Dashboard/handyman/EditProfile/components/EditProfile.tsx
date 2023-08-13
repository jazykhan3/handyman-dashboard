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
    <div className="w-full space-y-3">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mb-6 relative w-24">
        <div className="flex items-center">
            {imageDataPageData.length !== 0 ? imageDataPageData.map((dataUrl: string, index: number) => {
              if (imageDataPageData[0] !== "") {
                return (
                  <div className="bg-white  shadow rounded-full p-1" key={index}>
                    <Image src={dataUrl} alt={`Uploaded Image ${index}`} width={110} height={110} className="object-cover m-1 w-28 h-auto"/>
                  </div>
                );
              } 
            }):(
              <div className="bg-white  shadow rounded-full p-1">
                 <FaRegUserCircle className="cursor-pointer text-7xl" title="Click on image" />
              </div>
            )}
          </div>
          <label htmlFor="dropzone-file">
            <div className="flex flex-col items-center justify-center">
              <MdAddAPhoto className="absolute right-4 bottom-2 text-xl cursor-pointer" />
            </div>
            <input type="file" onChange={handleImageUpload} id="dropzone-file" name="myFile" title="upload images" aria-label="upload images" accept="image/*" className="hidden"/>
          </label>
        </div>
        <div className="bg-white rounded-md shadow-md ">
          <div className="flex justify-between items-center">
            <div className="border-l border-t border-b w-full border-gray-300 rounded-tl-md py-3 px-2 ">
              <input type="text" placeholder="Company Name" className="outline-none w-full" title="Company name" name="company_name" id="company_name" onChange={(e) =>setInputData((pre) => ({...pre,compnay_name: e.target.value,}))} value={inputData.compnay_name}/>
            </div>
            <div className="border  w-full border-gray-300  py-3 px-2 ">
              <input type="text" placeholder="Surname" className=" outline-none w-full" title="Surname" name="surname" id="surname" onChange={(e)=>setInputData((pre) => ({ ...pre,surname: e.target.value }))} value={inputData.surname}/>
            </div>
            <div className=" w-full border-r border-t border-b border-gray-300 rounded-tr-md py-3 px-2">
              <input type="text" placeholder="Last name" className="outline-none w-full" title="Last name" name="lastname" id="lastname" onChange={(e) => setInputData((pre) => ({ ...pre,last_name: e.target.value }))} value={inputData.last_name}/>
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="border-l border-r border-b w-[66.7%] border-gray-300 py-3 px-2 ">
              <input type="text" placeholder="Address" className="outline-none w-full" title="Address" name="address" id="address" onChange={(e) =>setInputData((pre) => ({ ...pre, address: e.target.value }))} value={inputData.address}/>
            </div>
            <div className="border-r  border-b w-[33.3%] border-gray-300  py-3 px-2 relative">
              <input type="text" placeholder="Zip code" className="outline-none w-full" title="Zip code" name="zip_code" id="zip_code" onChange={(e) =>setInputData((pre) => ({ ...pre, zip_code: e.target.value }))} value={inputData.zip_code} maxLength={6}/>
              {zip_codeError && (
                <p className="absolute text-sm text-red-500 mt-3 left-0">
                  {zip_codeError}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end items-center py-5">
            <button className="bg-orange px-7 py-2 mx-3 hover:text-white  rounded-lg text-black font-semibold " type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
