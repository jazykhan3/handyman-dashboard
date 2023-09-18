import React, { useRef} from "react";
import { CiClock2 } from "react-icons/ci";
const WorkingSchedule = ({working_SchedulePage,setWorking_SchedulePage,working_SchedulePageError,setWorking_SchedulePageError}: WorkingSchedulePropsType) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const handleValueOf_select_button = (arg: string) => {
    setWorking_SchedulePage(arg);
    setWorking_SchedulePageError('');
  };
  const setSelectValueOnChnage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWorking_SchedulePage(e.target.value);
    setWorking_SchedulePageError('');
  };
  return (
    <div>
      <div className="flex items-center rounded-lg  border-2 bg-white py-3 px-2 relative ">
        <CiClock2 className="text-2xl mr-2 text-gray-500" />
        <div className="flex justify-between items-center w-full">
          <select id="working_schedule" name="workingSchedule" className="block w-full cursor-pointer bg-white text-gray-500" onChange={setSelectValueOnChnage} value={working_SchedulePage} ref={selectRef}>
            <option value="DEFAULT">Default</option>
            <option value="Quickly">Quickly</option>
            <option value="In a week">In a week</option>
            <option value="In a 3 month">In a 3 month</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
        {working_SchedulePageError !== '' && (
          <p className="absolute -bottom-6 left-0 text-sm text-red-500">
            {working_SchedulePageError}
          </p>
        )}
      </div>
      <div className="mt-7 space-x-3">
        <button type="button" onClick={() => handleValueOf_select_button("Quickly")} aria-label="Quickly" className="bg-gray-500 px-5 py-2 rounded-full text-white outline-none hover:bg-gray-600 m-2 sm:m-0">
          Quickly
        </button>
        <button type="button" onClick={() => handleValueOf_select_button("In a week")} aria-label="In a week" className="bg-gray-500 px-5 py-2 rounded-full text-white outline-none hover:bg-gray-600 m-2 sm:m-0">
          In a week
        </button>
        <button type="button" onClick={() => handleValueOf_select_button("In a 3 month")} aria-label="In a 3 month" className="bg-gray-500 px-5 py-2 rounded-full text-white outline-none hover:bg-gray-600 m-2 sm:m-0">
          In a 3 month
        </button>
        <button type="button" onClick={() => handleValueOf_select_button("Flexible")} aria-label="In a 3 month" className="bg-gray-500 px-5 py-2 rounded-full text-white outline-none hover:bg-gray-600 m-2 sm:m-0">
          Flexible
        </button>
      </div>
    </div>
  );
};

export default function Page6({working_SchedulePage,setWorking_SchedulePage,working_SchedulePageError,setWorking_SchedulePageError}:WorkingSchedulePropsType) {
  return (
    <section className="m-2 mx-5 py-1 mb-16 mt-5 md:mx-10 lg:mx-20">
      <h2 className="text-2xl font-bold">Working Schedule</h2>
      <p className="text-gray-500 mb-3 mt-1">when order should start.</p>
      <WorkingSchedule working_SchedulePage={working_SchedulePage} setWorking_SchedulePage={setWorking_SchedulePage} working_SchedulePageError={working_SchedulePageError} setWorking_SchedulePageError={setWorking_SchedulePageError}/>
    </section>
  );
}
