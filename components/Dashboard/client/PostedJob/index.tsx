import React,{useContext,useState} from 'react'
import { Context } from "../layout/index";
import PostJOB from './components/PostJob';
export interface TableTestDataType {
  id: string;
  job_title: string;
  listingID: string;
  date_of_post: string;
}
const TableTestData: TableTestDataType[] = [
  {
    id: "1",
    job_title:
      "Laying tiles 1: 25m2; Floor in bathroom,kitchen, hall 25km, Berlin",
    listingID: "32918467",
    date_of_post: "23/05/2023",
  },
  {
    id: "2",
    job_title:
      "Laying tiles 2: 25m2; Floor in bathroom,kitchen, hall 25km, Berlin",
    listingID: "32918468",
    date_of_post: "23/05/2023",
  },
  {
    id: "3",
    job_title:
      "Laying tiles 3: 25m2; Floor in bathroom,kitchen, hall 25km, Berlin",
    listingID: "32918469",
    date_of_post: "23/05/2023",
  },
];
export default function Index() {
 const { toggleSideBar } = useContext(Context);
 const [tabelData, setTableData] = useState<TableTestDataType[]>(TableTestData);
  return (
    <div className={`w-full ${toggleSideBar ? 'md:mx-auto' : 'md:mx-12'} my-12`}>
        <PostJOB tabelData={tabelData} setTableData={setTableData}/>
    </div>
  )
}