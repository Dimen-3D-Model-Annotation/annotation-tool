import Image from "next/image";
import zoom_in from "@public/assets/icons/zoom_in.svg";
import zoom_out from "@public/assets/icons/zoom_out.svg";
import rotate from "@public/assets/icons/rotate.svg";
import comment from "@public/assets/icons/comment.svg";
import dimension from "@public/assets/icons/dimension.svg";
import mention from "@public/assets/icons/mention.svg";
import text from "@public/assets/icons/text.svg";

import ImportButton from "./ImportButton";

import { useContext } from "react";
import { CommentContext } from "@contexts/CommentContext";
import SaveButton from "./SaveButton";

const Toolbar = () => {

  const { setCommentMode } = useContext(CommentContext);

  return (
    <div className="flex justify-center items-center w-full fixed top-[10px] z-50">
      <div className="flex justify-around items-center p-2 bg-black rounded-2xl w-[800px] h-[40px] mx-[10px]">
        <ImportButton />

        <div className="flex justify-center items-center p-2">
          <div className="flex justify-center items-center p-2 w-[36px] h-[36px] cursor-pointer">
            <Image src={zoom_in} alt="" />
          </div>

          <div className="flex justify-center items-center mx-2 p-2 w-[36px] h-[36px] cursor-pointer">
            <Image src={zoom_out} alt="" />
          </div>

          <div className="flex justify-center items-center mx-2 p-2 w-[36px] h-[36px] cursor-pointer">
            <Image src={rotate} alt="" />
          </div>

          <div
            onClick={() => setCommentMode(true)}
            className="flex justify-center items-center mx-2 p-2 w-[36px] h-[36px] cursor-pointer"
          >
            <Image src={comment} alt="" />
          </div>

          <div className="flex justify-center items-center mx-2 p-2 w-[36px] h-[36px] cursor-pointer">
            <Image src={dimension} alt="" />
          </div>

          <div className="flex justify-center items-center mx-2 p-2 w-[36px] h-[36px] cursor-pointer">
            <Image src={mention} alt="" />
          </div>

          <div className="flex justify-center items-center mx-2 p-2 w-[36px] h-[36px] cursor-pointer">
            <Image src={text} alt="" />
          </div>
        </div>

        <SaveButton />
      </div>
    </div>
  );
};

export default Toolbar;
