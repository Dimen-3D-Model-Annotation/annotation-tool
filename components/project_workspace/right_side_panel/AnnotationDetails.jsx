import React, { useContext, useEffect, useState } from "react";
import { SceneContext } from "@contexts/SceneContext";
// import { EditorState } from "draft-js";
// import { stateFromHTML } from "draft-js-import-html";
// import DOMPurify from "dompurify";

const AnnotationDetails = () => {
  const { activeAnnotation } = useContext(SceneContext);
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // useEffect(() => {
  //   if (activeAnnotation.annotation_type === "text") {
  //     const contentState = stateFromHTML(activeAnnotation.annotation_text);
  //     const newEditorState = EditorState.createWithContent(contentState);
  //     setEditorState(newEditorState);
  //   }
  // }, [activeAnnotation]);

  const text = "Vishwanthie Herath";
  // const sanitizedHtml = DOMPurify.sanitize(activeAnnotation?.annotation_text);

  return (
    <div className="w-full flex-col p-2">
      <div className="mb-4 flex justify-around">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-700 text-white text-md font-semibold cursor-pointer">
          {text.charAt(0).toUpperCase()}
        </div>
        <div className="whitespace-nowrap flex justify-center items-center w-[120px] overflow-x-scroll scrollbar-none">
          {text}
        </div>
      </div>

      <div className="bg-gray-800 h-[1px] w-full mb-4"></div>

      <div className="mb-4 border-solid border-zinc-600 border-2 rounded-lg px-2 py-3 text-zinc-500 bg-zinc-800 min-h-[100px] break-words">
        {activeAnnotation.annotation_text}
      </div>

      <div className="w-full px-4 flex justify-between items-center mb-4">
        <button className="w-[60px] bg-zinc-800 h-[20px] rounded-md flex justify-center items-center hover:bg-zinc-700 ">
          Delete
        </button>
        <button className="w-[60px] bg-zinc-800 h-[20px] rounded-md flex justify-center items-center hover:bg-zinc-700 ">
          Edit
        </button>
      </div>
    </div>
  );
};

export default AnnotationDetails;
