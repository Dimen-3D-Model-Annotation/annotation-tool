import Image from "next/image";
import add from "@public/assets/icons/add.svg"

const LeftSidePanel = () => {
  return (
    <div className="flex fixed top-[65px] left-[10px] flex-col justify-center items-center w-[200px] h-5/6 bg-black rounded-md p-4 overflow-y-auto">
      <div className="flex justify-center items-center text-white w-full py-4">
        <div className="p-2 text-sm">
          <h3>Pages</h3>
        </div>
        <div className="p-2 text-sm">
          <h3>Assets</h3>
        </div>
      </div>
      <div className="bg-gray-600 h-[1px] w-full mb-4"></div>

      <div className="flex justify-between items-center text-white text-sm mb-4 w-5/6">
        <h6>Pages</h6>
        <Image src={add} className="w-[24px] cursor-pointer"/>
      </div>

      <div className="flex text-white text-sm w-10/12 h-[300px] overflow-y-auto">
        <div>
          <ul>
            <li className="p-2">Page1</li>
          </ul>
        </div>

        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-600 h-[1px] w-full mb-4"></div>

      <div className="flex flex-col justify-center items-start w-5/6 text-white text-sm">
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
