"use client";

import Image from "next/image";
import { useContext, useRef, useState } from "react";
import { FileContext } from '@contexts/FileContext';

import add from "@public/assets/icons/add.svg";

const Popup = () => {

    // const [file, setFile] = useState(null);
    // const [filePreview, setFilePreview] = useState(null);
    const fileInputRef = useRef(null);
    const { setFilePreview } = useContext(FileContext);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        // setFile(selectedFile);
        previewFile(selectedFile);
    };

    const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
      <div className="absolute top-[60px] flex flex-col justify-center items-start bg-black text-white text-sm p-4 rounded-md">
        <button className="p-2">
          <h6>New Project</h6>
        </button>
        <button onClick={handleButtonClick} className="p-2">
          <h6>Import File</h6>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {/* {filePreview && (
          <div>
            <h6>Uploaded File:</h6>
            {file && file.type.startsWith("image/") ? (
              <img
                src={filePreview}
                alt="Uploaded File"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ) : (
              <a href={filePreview} target="_blank" rel="noopener noreferrer">
                Open Uploaded File
              </a>
            )}
          </div>
        )} */}
      </div>
    );
};

const AddFileButton = () => {

    const [show, setShow] = useState(false);

    function toggle () {
        setShow((show) => !show);
    }

    return (
        <div>
            <div onClick={toggle} className="flex w-[40px] h-[40px] cursor-pointer bg-zinc-900 rounded-md">
                <Image src={add} />
            </div>
            {show && <Popup />}
        
        </div>
    );
};

export default AddFileButton;
