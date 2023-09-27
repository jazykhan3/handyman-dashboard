import React, { useContext } from "react";
import { Context } from "../layout";
import Messages from "../../components/Messages";
import EChartsCommon from "./components/chart";
import EChartsPieChart from "./components/pieChart";

export default function Index() {
  const { toggleSideBar } = useContext(Context);
  const chartOption = {
  
    xAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E'],
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [1250000000, 1250000000, 1250000000, 1250000000, 1250000000,250000000, 1250000000, 1250000000, 1250000000, 1250000000],
        type: 'bar',
      },
    ],
  };
  const pieChartOption = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center',
      show: false
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: 'right',
      top: 'center'
    },
    grid: {  // Add grid configuration to adjust the position of the chart
      left: '0%',  // You can adjust this value to control the chart's left position
      top: '10%',
      bottom: '10%',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        label: {
            show: false,
        },
      },
    ]
  };
  
  return (
    <div className={`lg:w-[80%]  ${toggleSideBar ? "mx-auto" : "md:mx-32"}  my-12`}>
           <section className="  my-8">
        <h1 className="font-bold text-4xl text-Heading">
        Data insights:
          <span className="text-orange font-bold">
          Explore statistics and analytics         </span>
        </h1>
      </section>
      <div className=" rounded-md  h-[18rem]  flex flex-col gap-5 ">
        <div className="font-bold mx-4" >Growth graph</div>
      <EChartsCommon  option={chartOption} />
      <div className="font-bold mx-4" >Pi chart graph</div>

      <EChartsPieChart  option={pieChartOption}/>

      </div>
    </div>
  );
}
