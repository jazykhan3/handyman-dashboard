import React, { useState } from "react";
import Image from "next/image";
import { GoPlus } from "react-icons/go";

const InputBoxes = ({setInputData,inputData,setInputDataError,inputDataError,imageDataPageData,setImagePageData}: SetInputDataTypeProps) => {

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputData({ ...inputData, [name]: value });
    if (inputData.password)
      setInputDataError((e) => ({ ...e, passwordError: "" }));
    if (inputData.zip_code)
      setInputDataError((e) => ({ ...e, zip_codeError: "" }));
    if (inputData.email_address)
      setInputDataError((e) => ({ ...e, email_addressError: "" }));
  };
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const files: FileList = event.target.files!;
    const images: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const render: FileReader = new FileReader();
      render.onload = (event: ProgressEvent<FileReader>) => {
        images.push(event.target!.result as string);
        if (images.length === files.length) {
          setImagePageData([...imageDataPageData, ...images]);
        }
      };
      render.readAsDataURL(files[i]);
    }
  };
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2 space-y-4">
        <div className="px-10">
          <label htmlFor="first_name" className="font-medium">
            First name
          </label>
          <div className="py-3 px-3 rounded-lg  border mt-2 border-orange">
            <input type="text" id="first_name" className="w-full outline-none  bg-transparent" name="first_name" placeholder="Enter you first name" value={inputData.first_name} onChange={handleChangeEvent}/>
          </div>
        </div>
    
        <div className="px-10">
          <label htmlFor="company_name" className="font-medium">
            Company Name
          </label>
          <div className="py-3 px-3 rounded-lg  border mt-2 border-orange">
            <input type="text" id="company_name" className="w-full outline-none  bg-transparent" name="company_name" placeholder="Enter you company name" value={inputData.company_name} onChange={handleChangeEvent}/>
          </div>
        </div>
        <div className="px-10 relative">
          <label htmlFor="email_address" className="font-medium">
            Email Address
          </label>
          <div className="py-3 px-3 rounded-lg  border mt-2 border-orange">
            <input type="email" id="email_address" className="w-full outline-none  bg-transparent" name="email_address" placeholder="xyz@gmail.com" value={inputData.email_address} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleChangeEvent}/>
          </div>
          {inputDataError.email_addressError && (
            <p className="absolute text-sm text-red-500">
              {inputDataError.email_addressError}
            </p>
          )}
        </div>
        <div className="px-10 relative">
          <label htmlFor="Password" className="font-medium">
            Password
          </label>
          <div className="py-3 px-3 rounded-lg  border mt-2 border-orange">
            <input type="password" id="Password" className="w-full outline-none  bg-transparent" name="password" placeholder="*****************" value={inputData.password} onChange={handleChangeEvent}/>
          </div>
          {inputDataError.passwordError && (
            <p className="absolute text-sm text-red-500">
              {inputDataError.passwordError}
            </p>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-4">
      <div className="px-10">
          <label htmlFor="last_name" className="font-medium">
            Last name
          </label>
          <div className="py-3 px-3 rounded-lg  border mt-2 border-orange">
            <input type="text" id="last_name" className="w-full outline-none  bg-transparent" name="last_name" placeholder="Enter you last name" value={inputData.last_name} onChange={handleChangeEvent}/>
          </div>
        </div>
        <div className="px-10 relative">
          <label htmlFor="zip_Code" className="font-medium">
            Zip Code
          </label>
          <div className="py-3 px-3 rounded-lg  border mt-2 border-orange">
            <input type="text" id="zip_Code" className="w-full outline-none  bg-transparent" name="zip_code" placeholder="e.g. 40210" value={inputData.zip_code} onChange={handleChangeEvent} maxLength={6}/>
          </div>
          {inputDataError.zip_codeError && (
            <p className="absolute text-sm text-red-500">
              {inputDataError.zip_codeError}
            </p>
          )}
        </div>
   
        <div className="px-10 relative">
          <label htmlFor="phone_number" className="font-medium">
            Phone Number
          </label>
          <div className="py-3 px-3 rounded-lg  border mt-2 border-orange">
            <input type="tel" id="phone_number" className="w-full outline-none  bg-transparent" name="phone_number" placeholder="Enter you phone number" value={inputData.phone_number} onChange={handleChangeEvent}/>
          </div>
          {inputDataError.phoneError && (
            <p className="absolute text-sm text-red-500">
              {inputDataError.phoneError}
            </p>
          )}
        </div>
        <div className="ml-10 space-y-4">
          <span className="font-medium">Upload Documents</span>
          <div className="flex flex-col sm:flex-row">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-28 h-28 border-2 border-green-500 border-dashed rounded-xl cursor-pointer">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <GoPlus className="font-bold text-green-500 text-2xl" />
            </div>
            <input type="file" onChange={handleImageUpload} id="dropzone-file" name="myFile" title="upload images" aria-label="upload images" accept="image/*" className="hidden" multiple/>
          </label>
          <div className="flex items-center sm:space-x-4 mt-3 sm:mt-0 flex-wrap">
            {imageDataPageData.map((dataUrl: string, index: number) => {
              if (imageDataPageData[0] !== "") {
                return (
                  <Image src={dataUrl} alt={`Uploaded Image ${index}`} width={110} height={110} key={index} className="object-cover m-1 w-28 h-auto"/>
                );
              }
            })}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function RegisterForms({selectCard,setSelectCardError,setSelectCard}: {selectCard: string[];setSelectCardError: React.Dispatch<React.SetStateAction<string>>;setSelectCard: React.Dispatch<React.SetStateAction<string[]>>;}) {
  const [imageDataPageData, setImagePageData] = useState<string[]>([]);
  const [inputData, setInputData] = useState<InputDataType>({
    first_name:'',
    last_name:'',
    company_name: "",
    password: "",
    zip_code: "",
    email_address: "",
    phone_number:''
  });
  const [inputDataError, setInputDataError] = useState<FormDataErrorType>({
    passwordError: "",
    zip_codeError: "",
    email_addressError: "",
    selectCardDataError: "",
    phoneError:''
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: FormDataErrorType = {};
    if (!inputData.password) {
      errors.passwordError = "Password is required";
    } else if (inputData.password.length <= 5) {
      errors.passwordError = "Password length must be at least 6 characters";
    }
    if (!inputData.zip_code) {
      errors.zip_codeError = "Zip code is required";
    } else if (isNaN(Number(inputData.zip_code))) {
      errors.zip_codeError = "Zip code must be a number";
    }
    if (!inputData.email_address) {
      errors.email_addressError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(inputData.email_address)) {
      errors.email_addressError = "Email is invalid";
    }
    if(!inputData.phone_number){
      errors.phoneError = 'Phone number is required';
    }
    if (selectCard.length === 0) {
      errors.selectCardDataError = "Please select any service from there";
      setSelectCardError(errors.selectCardDataError);
    }
    if (Object.keys(errors).length === 0) {
      console.log(inputData); //-> here all forms inputs data
      console.log(selectCard);
      console.log(imageDataPageData);
    } else {
      setInputDataError(errors);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <InputBoxes setInputData={setInputData} inputData={inputData} setInputDataError={setInputDataError} inputDataError={inputDataError} imageDataPageData={imageDataPageData} setImagePageData={setImagePageData}/>
        </div>
        <div className="py-5 px-2  gap-2">
          <div className="flex justify-end w-full  items-center gap-5">
            <button onClick={() => setSelectCard([])} className="border border-orange px-10 py-3  rounded-lg text-black font-semibold ">
              Back
            </button>
            <div className="flex flex-col  mt-[30px]">
              <input type="submit" value={"Register Now for Free"} className="bg-orange px-5 py-3 rounded-xl text-md font-semibold text-white cursor-pointer"/>
              <span className="inline-block mt-2 font-medium">Terms of Use and Privacy Policy</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
