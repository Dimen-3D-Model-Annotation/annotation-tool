"use client";

import Image from "next/image";
import { useContext, useRef, useState } from "react";
import { FileContext } from "@contexts/FileContext";

import importButton from "@public/assets/icons/import.svg";

const ImportButton = () => {

  const fileInputRef = useRef(null);
  const { setFilePreview } = useContext(FileContext);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    if (!selectedFile.name.endsWith(".glb")) {
      alert("Please upload a valid .glb file.");
      return;
    }

    const url = URL.createObjectURL(selectedFile);
    setFilePreview(url);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      onClick={handleButtonClick}
      className="flex w-[28px] h-[28px] cursor-pointer bg-zinc-900 rounded-full p-1"
    >
      <Image src={importButton} alt="" />
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default ImportButton;
