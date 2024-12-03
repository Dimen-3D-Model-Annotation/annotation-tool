"use client";

import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import DashboardWrapper from "@components/layout/DashboardWrapper";

const Folder = () => {
  const [files, setFiles] = useState([]);

  // Fetch files from the backend when the component mounts
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("http://localhost:3501/files");
        if (response.ok) {
          const data = await response.json();
          setFiles(data); // Set the fetched files in state
        } else {
          console.error("Error fetching files");
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  const onDrop = (acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    // Send the file to the server for saving in the database
    acceptedFiles.forEach((file) => uploadFile(file));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const downloadFile = (file) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:3501/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("File uploaded successfully");
      } else {
        console.error("Error uploading file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <DashboardWrapper>
      <div
        {...getRootProps()}
        className={`p-6 border-2 border-dashed rounded-md text-white mt-16 ${
          isDragActive
            ? "border-green-500 bg-green-700"
            : "border-gray-500 bg-gray-800"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-center">Drop the files here...</p>
        ) : (
          <p className="text-center">
            Drag and drop some files here, or click to select files
          </p>
        )}
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-white">Uploaded Files:</h2>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 text-white bg-gray-700 rounded-lg shadow-md"
            >
              <span>{file.name}</span>
              <div className="flex space-x-2">
                {/* Download Button */}
                <button
                  onClick={() => downloadFile(file)}
                  className="text-blue-400 hover:text-blue-600"
                >
                  Download
                </button>
                {/* Remove Button */}
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-400 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Folder;
