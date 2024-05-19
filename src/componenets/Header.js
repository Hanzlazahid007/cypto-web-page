import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Model from "./Model";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    !isModalOpen ? setIsModalOpen(true):setIsModalOpen(false)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <div className="flex p-4 justify-between bg-white bg-[ 0px 4px 21px 0px #0000000D] ">
        <div>
          <h1 className="text-2xl">Bitcoin Wallet</h1>
        </div>
        <div>
          <BiDotsVerticalRounded onClick={openModal} className="text-2xl cursor-pointer" />
        </div>
      </div>
      <Model
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Header;
