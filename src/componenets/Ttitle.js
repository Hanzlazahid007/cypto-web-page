import React, { useState } from "react";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsChevronCompactDown } from "react-icons/bs";
import BuySell from "./BuySell";

const Ttitle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div >
      <div className={toggle ? " lg:pt-10 lg:pl-5 lg:pr-6  bg-white lg:h-[340px] mt-5 shadow-[ 0px 4px 21px 0px #0000000D]  w-[90%] m-auto rounded-xl mt-2": "lg:pt-10 lg:pl-5 lg:pr-6                  bg-white lg:h-[280px]  mt-5 shadow-[ 0px 4px 21px 0px #0000000D]  w-[90%] m-auto rounded-xl mt-2"}>
        <div className="flex justify-between  ">
          <div className="flex gap-2 ">
            <div className="mt-4 ml-4 p-2 bg-[#FFA92C] rounded-full">
              <BsCurrencyBitcoin className="text-white" />
            </div>
            <h1 className="mt-5  "> Bitcoin</h1>
          </div>
          <div>
            <h1 className="mt-5 mr-4">BTC</h1>
          </div>
        </div>
        <h1 className="ml-4 mt-2 text-2xl font-semibold">3.529020 BTC</h1>
        <div className="flex justify-between">
          <h1 className="ml-4 mt-1 text-[#D2D5D9]  ">$19.153 USD</h1>
          <button className=" text-white mb-5 mr-4 bg-pink-600 rounded-full pr-2 pl-2">
            -2.32 %
          </button>
        </div>
        <div className="pb-3 lg:mt-[60px]">
          <BsChevronCompactDown
            onClick={(e) => setToggle(!toggle)}
            className="m-auto cursor-pointer text-[#7777]  text-4xl"
          />
        </div>
        <div className={toggle ? "flex justify-center " : "hidden"}>
          <div className="mb-6">
            <button className="pl-6 pr-6 text-white pb-1 rounded-full bg-pink-600">
              Buy
            </button>
            <button className="pl-6 ml-5 pr-6 text-white pb-1 rounded-full bg-pink-600">
              Sell
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden ">
      <BuySell/>
      </div>
    </div>
  );
};

export default Ttitle;
