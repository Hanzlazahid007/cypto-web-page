import React, { useState } from "react";

const Day = () => {
  const [items,setItems] = useState([
    {
      name: "day",
      flag: true,
    },
    {
      name: "week",
      flag: false,
    },
    {
      name: "month",
      flag: false,
    },
    {
      name: "Year",
      flag: false,
    },
  ])

  const handleFilter = (name)=>{ 
    const newData = items.map((item) =>
      item.name === name ? { ...item, flag: true } : { ...item, flag: false }
    );
    setItems(newData);
  }

  return (
    <>
      <div className="flex w-[88%] justify-between m-auto mt-2">
        {items.map((item, index) => {
          return (
            <div
            key={index}
            
              className={
                item.flag ? "bg-[#AEB8C4]  rounded-full pl-2 pr-2" : ""
              }
            >
              <button
                className={item.flag ? "text-white" : "text-sm text-[#C4C7CD]"}
                key={index}
                onClick={()=>{handleFilter(item.name)}}
              >
                {item.name}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Day;
