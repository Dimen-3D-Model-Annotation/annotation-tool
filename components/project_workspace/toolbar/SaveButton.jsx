"use client";

import Image from "next/image";

import saveButton from "@public/assets/icons/save.svg";

const SaveButton = () => {
  return (
    <div
    //   onClick={handleButtonClick}
      className="flex w-[28px] h-[28px] cursor-pointer bg-zinc-900 rounded-full p-1"
    >
      <Image src={saveButton} alt="" />
    </div>
  );
};

export default SaveButton;
