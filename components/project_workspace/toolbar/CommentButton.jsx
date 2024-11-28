import Image from "next/image";
import comment from "@public/assets/icons/comment.svg";

import { useContext } from "react";
import { CommentContext } from "@contexts/CommentContext";

const CommentButton = () => {

  const { commentMode, setCommentMode, addComment, comments, setClickedPoint } =
    useContext(CommentContext);


  const toggleCommentMode = () => {
    setCommentMode(!commentMode);
    setClickedPoint(null);

  }

  return (
    <button
      onClick={toggleCommentMode}
      className="flex justify-center items-center mx-2 p-1 cursor-pointer 
              hover:bg-zinc-600 rounded-full h-[30px] w-[30px]"
    >
      <Image src={comment} alt="" className="w-[20px] h-[20px]" />
    </button>
  );
};

export default CommentButton;
