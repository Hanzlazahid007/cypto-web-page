import React from 'react'

import { FaDollarSign } from "react-icons/fa";

const BuySell = () => {
    const items = [
        { name: "Buy BTC", flag: false },
        { name: "Sell BTC", flag: true },
      ];
  return (
    <div className="w-[90%] justify-between  flex relative m-auto h-[10rem] mt-6 ">
        {items.map((item, index) => {
          return (
              <div key={index} className="w-[47%]  rounded-xl h-32 bg-white">
                <div className={item.flag===true?"w-10 m-auto mt-10  h-10  rounded-full bg-pink-600":"w-10 m-auto mt-10  h-10  rounded-full bg-blue-500"} >
                  <FaDollarSign className="mt-3 absolute text-white ml-[0.7rem]" />
                </div>
                <div className="mt-2 ">
                  <h1 className="flex  justify-center">{item.name}</h1>
                </div>
              </div>
            
          );
        })}
      </div>
  )
}

export default BuySell
