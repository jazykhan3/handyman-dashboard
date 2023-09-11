export interface TestDataType {
   id?:number,
   title:string,
   slug:string,
   m2:number,
   image:string,
   posted:string,
   location:{
    region:string;
    distance:string
   },
   category:string 
}
export const testData:TestDataType[] = [ //It just a test(ex) data 
    {
        id:1,
        title:'Disposal and recycling of construction materials',
        m2:25,
        slug:'laying-tiles-25m2-floor-in-bathroom-kitchen-hall-berlin-30-uid-9981',
        image:'/NewJobPostTest/NewJobTestImg.png',
        posted:'5 hours ago',
        location:{
            region:'Genf',
            distance:'30 kilometer'
        },
        category:'Demolition & disposal'
    },
    {
        id:2,
        title:'Concrete drilling for installations (e.g., pipelines, cables)',
        m2:220,
        slug:'laying-tiles-220m2-paint-on-floor-in-kitchen-bathroom-hallway-hamburg-100-uid-9982',
        image:'/NewJobPostTest/NewJobTest2img.png',
        posted:'10 hours ago',
        location:{
            region:'Basel',
            distance:'100 kilometer'
        },
        category:' Concrete drillers'
    },
    {
        id:3,
        title:'Lighting installation (indoor and outdoor)',
        m2:100,
        slug:'Laying-tiles-Floor-kitchen-uid-9984',
        image:'/NewJobPostTest/NewJobTest3img.png',
        posted:'17 hours ago',
        location:{
            region:'Lausanne',
            distance:'50 kilometer'
        },
        category:'Electrician'
    },
]