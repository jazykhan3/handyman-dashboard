import React,{useContext,useState} from 'react'
import EditProfile from './components/EditProfile';
import { Context } from "../layout";
export type InputdDataType = {
  compnay_name:string,
  surname:string,
  last_name:string,
  address:string,
  zip_code:string
}
export default function Index() {
  const { toggleSideBar } = useContext(Context);
  const [inputData,setInputData] = useState<InputdDataType>({
    compnay_name:'',
    surname:'',
    last_name:'',
    address:'',
    zip_code:''
  });
  const [zip_codeError,setZipCodeError] = useState<string>('');
  const [imageDataPageData, setImagePageData] = useState<string[]>([]);
  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault();
    if (!inputData.zip_code) {
      setZipCodeError("Zip code is required");
    } else if (isNaN(Number(inputData.zip_code))) {
      setZipCodeError("Zip code must be a number");
    }else setZipCodeError('');
    if(zip_codeError === ''){
      // console.log(inputData);
      // console.log(imageDataPageData);
    }

  }
  return (
    <div className={`sm:w-[80%] m-auto my-12 `}>
      <EditProfile inputData={inputData} setInputData={setInputData} handleSubmit={handleSubmit} zip_codeError={zip_codeError} imageDataPageData={imageDataPageData} setImagePageData={setImagePageData}/>
    </div>
  )
}
