import React,{useState} from "react";
import Page1 from "./page/Step1";
import Page2 from './page/Step2';
import Page3 from "./page/Step3";
import Page4 from "./page/Step4";
import Page5 from "./page/Step5";
import Page6 from "./page/Step6"; 
import Page7 from "./page/Step7"; 
import { useMultiStepForm } from "./useMultiStepForm";
export default function Service({setServicePopUP,serviceCardPopUPData,setSentData,serviceTitle}:{setServicePopUP: React.Dispatch<React.SetStateAction<boolean>>;serviceCardPopUPData:serviceCardPopUPDataType;setSentData:React.Dispatch<React.SetStateAction<boolean>>;serviceTitle: string[]}) {
  const [page1Data,setPage1Data] = useState<Page1DataType>({ //Page1 data
    service_title:'',
    other_title:'',
    square_meters:''
  });
  const [titleError,handleTitleError] = useState<string>('');
  const [textAreaPageData,setTextAreaPageData] = useState<string>(''); //page3 data
  const [imageDataPageData, setImagePageData] = useState<string[]>([]); //page4 data
  const [locationDataPage,setLocationDataPage] = useState<string>(''); //page5 data
  const [location_namePage,setLocationNamePage] = React.useState<string>('');
  const [locationDataPageError,setlocationDataPageError] = useState<string>('');
  const [working_SchedulePage, setWorking_SchedulePage] = useState<'DEFAULT' | 'Quickly' | 'In a week' | 'In a 3 month' | 'Flexible'>('DEFAULT'); //page6 data
  const [working_SchedulePageError,setWorking_SchedulePageError] = useState<string>('');
  const [contactDetailsPage,setContactDetailsPage] = useState<ContactDetailsPageDataType>({ //page7 data
    name:'',
    email:'',
    phone:''
  });
  const [contactDetailsPageError,setContactDetailsPageError] = useState<ContactDetailsPageDataTypeError>({
    nameError:'',
    emailError:'',
    phoneError:''
  })
  const [numberOfElement,setNumberOfElement] = useState<NumberOfElementType>({
    square_meters:'',
    how_many_rooms:'',
    how_many_floors:''
  });
  const { currentStepIndex, step, back, next, isFirstStep, isLastStep } = useMultiStepForm([
    <Page1 key={1} {...{ setPage1Data, page1Data, titleError, handleTitleError,serviceTitle }} />,
    <Page2 key={2} numberOfElement={numberOfElement} setNumberOfElement={setNumberOfElement}/>,
    <Page3 key={3} {...{ setTextAreaPageData, textAreaPageData }} />,
    <Page4 key={4} {...{ setImagePageData, imageDataPageData }} />,
    <Page5 key={5} {...{ setLocationDataPage, locationDataPage, locationDataPageError, setlocationDataPageError,setLocationNamePage,location_namePage }} />,
    <Page6 key={6} {...{ setWorking_SchedulePage, working_SchedulePage, working_SchedulePageError, setWorking_SchedulePageError }} />,
    <Page7 key={7} {...{ setContactDetailsPage, contactDetailsPageError, contactDetailsPage }} />
    ]);
    function handleNext(){
      if(page1Data.service_title !== '' || page1Data.other_title !== ''){
        if(currentStepIndex === 0){
          next();
        }
      }else handleTitleError('Can you please answer this question ?');
      if(currentStepIndex === 1 || currentStepIndex=== 2 || currentStepIndex ===3){
        next();
      }
      if(locationDataPage !== '' && currentStepIndex === 4){
        if(isNaN(Number(locationDataPage))){
          setlocationDataPageError('Zip code must be a number');
        }else if(locationDataPage.trim().length !== 5){
            setlocationDataPageError('Zip code must have 4 character')
        }else if(location_namePage === ''){
          setlocationDataPageError('Location not found')
        }else{
          next();
        }
      }else if(currentStepIndex === 4) setlocationDataPageError('Zip code is required'); 
      if(working_SchedulePage !== 'DEFAULT' && currentStepIndex === 5){
        next();
      }else if(currentStepIndex === 5) setWorking_SchedulePageError('Working Schedule is required'); 
    }
    function handleBack(){
      back();
      switch(currentStepIndex){
        case 4:
          setlocationDataPageError('');
          break;
        case 5:
          setWorking_SchedulePageError('');
          break;
        case 6:
          setContactDetailsPageError({nameError:'',emailError:'',phoneError:''});
          break;
        default:
          break;
      }
    }
    
    function handleSendJOB(){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(contactDetailsPage.name === ''){
        setContactDetailsPageError(e=>({...e,nameError:'Name is required'}))
      }
      if(contactDetailsPage.email === ''){
        setContactDetailsPageError(e=>({...e,emailError:'Email is required'}));
      }else if(!emailRegex.test(contactDetailsPage.email)){
        setContactDetailsPageError(e=>({...e,emailError:'Email is invalid'}));
      }
      if(contactDetailsPage.phone === ''){
        setContactDetailsPageError(e=>({...e,phoneError:'Phone number is required'}))
      }else if(isNaN(Number(contactDetailsPage.phone))){
        setContactDetailsPageError(e=>({...e,phoneError:'Must be a number'}))
      }
      if(contactDetailsPage.name !== '' && contactDetailsPage.email !== '' && contactDetailsPage.phone !== '' && emailRegex.test(contactDetailsPage.email) && !isNaN(Number(contactDetailsPage.phone)) && locationDataPageError !== 'Location not found'){
        serviceCardPopUPData.serviceTitle = page1Data;
        serviceCardPopUPData.additional_details.square_meters = numberOfElement.square_meters;
        serviceCardPopUPData.additional_details.how_many_floors = numberOfElement.how_many_floors;
        serviceCardPopUPData.additional_details.how_many_rooms = numberOfElement.how_many_rooms;
        serviceCardPopUPData.additional_job_description = textAreaPageData;
        serviceCardPopUPData.images = imageDataPageData;
        serviceCardPopUPData.location_of_job.location = location_namePage;
        serviceCardPopUPData.location_of_job.zip_code = locationDataPage
        serviceCardPopUPData.working_schedule = working_SchedulePage;
        serviceCardPopUPData.contactDetails = contactDetailsPage;
        setSentData(true);
        setContactDetailsPage({name:'',email:'',phone:''});
      }
    }
    return (
    <div>
      {step}
      <div className="pb-5">
        
          <div className="space-x-8">
            {isFirstStep ? (
              <button onClick={()=>setServicePopUP(false)} className="border border-orange md:px-7 px-5 md:py-2 py-1 rounded-lg shadow ml-5 ">
                Back
              </button>
            ) : (
              <button onClick={handleBack} className="border border-orange md:px-7 px-5 md:py-2 py-1 rounded-lg shadow bg-white md:ml-9 lg:ml-[5rem] ml-5">
                Back
              </button>
            )}
            {!isLastStep ? (
              <button onClick={handleNext} className="border border-orange md:px-8 px-6 md:py-2 py-1 rounded-lg shadow bg-orange text-white ">
                Next
              </button>
            ) : (
              <button onClick={handleSendJOB} className="border border-orange md:px-8 px-6 md:py-2 py-1 rounded-lg shadow bg-orange text-white">
                Find Handyman
              </button>
            )}
          </div>
      </div>
    </div>
  );
}
