import Image from "next/image";
import add from "@public/assets/icons/add.svg"

const LeftSidePanel = () => {
  return (
    <div className="flex fixed top-[60px] left-[10px] bottom-[10px] text-xs text-white flex-col justify-between items-center w-[200px] bg-black rounded-2xl p-3 min-h-52 z-50">
      <div className="flex justify-between items-center text-white w-full py-2 mb-2">
        <div className="w-1/2 h-8 cursor-pointer hover:border-gray-700 hover:border-2 flex justify-center items-center rounded-lg mx-1">
          <h6 className="w-full flex justify-center">Objects</h6>
        </div>
        <div className="w-1/2 h-8 cursor-pointer hover:border-gray-700 hover:border-2 flex justify-center items-center rounded-lg mx-1">
          <h6 className="w-full flex justify-center">Assets</h6>
        </div>
      </div>

      <div className="bg-gray-800 h-[1px] w-full mb-3"></div>

      <div className="w-full h-[100%]">
        {/* Scenes */}
        <div className="w-full px-1 text-xs mb-2">
          <div className="flex justify-between items-center text-white mb-2 w-full px-2">
            <h6>Scenes</h6>
            <Image src={add} className="w-[24px] cursor-pointer" alt="" />
          </div>

          <div className="flex ml-2 text-white w-10/12 overflow-y-auto">
            <ul>
              <li className="p-2">Scene 1</li>
              <li className="p-2">Scene 2</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 h-[1px] w-full mb-3"></div>

        {/* Objects */}
        <div className="w-full px-1 text-xs mb-2">
          {/* Models */}
          <div className="w-full px-1 text-xs mb-2">
            <h6 className="flex justify-between items-center text-white mb-2 w-full px-2">
              Models
            </h6>
            <div className="flex ml-2 text-white w-10/12 overflow-y-auto">
              <ul>
                <li className="p-2">Model 1</li>
                <li className="p-2">Model 2</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 h-[1px] w-full mb-3"></div>

          {/* Annotations */}
          <div className="w-full px-1 text-xs mb-2">
            <h6 className="flex justify-between items-center text-white mb-2 w-full px-2">
              Annotations
            </h6>
            <div className="flex ml-2 text-white w-10/12 overflow-y-auto">
              <ul>
                <li className="p-2">Annotation 1</li>
                <li className="p-2">Annotation 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 h-[1px] w-full mb-3"></div>

      <div className="w-full mb-2">
        <button className="bg-gray-700 w-full px-4 py-2 text-gray-100 text-xs rounded-lg cursor-pointer">
          Create New Project
        </button>
      </div>

      <div className="flex flex-col justify-center items-start w-5/6 text-white">
        <div className="p-2">
          <h3>Chat</h3>
        </div>
        <div className="p-2">
          <h3>Meet</h3>
        </div>
      </div>
    </div>
  );
}

export default LeftSidePanel;
