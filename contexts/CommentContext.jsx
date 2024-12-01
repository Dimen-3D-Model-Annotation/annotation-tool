import React, { createContext, useState } from "react";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [commentMode, setCommentMode] = useState(false);
  const [comments, setComments] = useState([]);

  const [clickedPoint, setClickedPoint] = useState(null);

  const addComment = (newComment) => {
    if (Array.isArray(newComment)) {
      // Replace all comments if the input is an array
      setComments(newComment);
    } else {
      // Add a single comment
      setComments((prevComments) => [...prevComments, newComment]);
    }
  };

  return (
    <CommentContext.Provider
      value={{ commentMode, setCommentMode, comments, addComment, clickedPoint, setClickedPoint }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export { CommentContext, CommentProvider };
