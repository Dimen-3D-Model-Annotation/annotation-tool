import React, { createContext, useState } from "react";

export const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [filePreview, setFilePreview] = useState(null);

  return (
    <FileContext.Provider value={{ filePreview, setFilePreview }}>
      {children}
    </FileContext.Provider>
  );
};
