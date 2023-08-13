import React,{useContext} from 'react'
import { Context } from "../layout";
import Orders from './components/Orders';


const TestData = [
  {
    id:1,
    title:'Laying tiles: 25m2; Floor in bathroom, kitchen, hall, 25km, Berlin',
    paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text',
    price:'$250',
    postedOn:{
      date:'23/05/2023',
      time:'9:45 AM'
    }
  },
  {
    id:2,
    title:'Laying tiles: 25m2; Floor in bathroom, kitchen, hall, 25km, Berlin',
    paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text',
    price:'$250',
    postedOn:{
      date:'23/05/2023',
      time:'9:45 AM'
    }
  }
]
export default function Index() {
  const { toggleSideBar } = useContext(Context);
  
  return (
    <div className={`sm:w-[80%]  mx-auto my-12`}>
       <div className="bg-white rounded-md shadow-md overflow-y-scroll h-[14rem]">
        {TestData.map((item)=>(
          <Orders key={item.id} title={item.title} paragraph={item.paragraph} price={item.price} postedOn={item.postedOn}/>
        ))}
       </div>
    </div>
  )
}
