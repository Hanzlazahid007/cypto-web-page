import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  
  ResponsiveContainer,
} from "recharts";
import Day from "./Day";
import BuySell from "./BuySell";

const Chart = () => {
 
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
   
  ];

 
  return (
    <div className="lg:mt-5">
    <Day/>
      <div className="w-[90%]  rounded-xl mt-4 bg-white m-auto">
        <div className="flex justify-between mb-5 ">
          <div className="flex  gap-3 mt-6 ml-6">
            <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
            <h1 className="-mt-1 text-[#D2D5D9] text-sm">Lower :$4.895</h1>
          </div>
          <div className="flex gap-3 mt-6 ml-6">
            <div className="w-3 h-3 bg-[green] rounded-full"></div>
            <h1 className="-mt-1 mr-6 text-[#D2D5D9] text-sm">
              Higher :$6.857
            </h1>
          </div>
        </div>
        <div className="">
          
          <ResponsiveContainer width="100%"  aspect={1.93}>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 50,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="1" horizontal="" vertical="" />

              <Area type="basis" dataKey="uv" stroke="#FFA621" fill="#FFF6ED" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex ml-6">
          <div className="w-3 -mt-10 rounded-full  h-3 bg-[#FFA621]"></div>
          <h1 className="-mt-11 text-sm ml-2">1 BTC = $5.483</h1>
        </div>
      </div>
      <div className="lg:hidden" >
      <BuySell/>

      </div>
    </div>
  );
};

export default Chart;
