import React, { createContext, useState } from "react";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [commentMode, setCommentMode] = useState(false);
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <CommentContext.Provider
      value={{ commentMode, setCommentMode, comments, addComment }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export { CommentContext, CommentProvider };
