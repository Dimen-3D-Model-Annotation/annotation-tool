"use client";

import Image from "next/image";
import { useContext, useRef, useState } from "react";
import { FileContext } from "@contexts/FileContext";
import upload from "@api/ModelUpload";

import importButton from "@public/assets/icons/import.svg";

const ImportButton = () => {

  const fileInputRef = useRef(null);
  const { setFile } = useContext(FileContext);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    if (!selectedFile.name.endsWith(".glb")) {
      alert("Please upload a valid .glb file.");
      return;
    }

    try {
      const response = await upload(selectedFile);
      console.log("Response from API Gateway:", response);

      const fileUrl = response.data.file_path;

      // Assuming the response contains the R2 path
      localStorage.setItem("modelPath", fileUrl);
      setFile(fileUrl);

    } catch (error) {
      alert("Failed to upload the file. Please try again.");
      console.error("Error during file upload:", error);
    }
    
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
