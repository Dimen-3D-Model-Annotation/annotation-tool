const RightSidePanel = () => {
  return (
    <div className="flex fixed top-[60px] right-[10px] bottom-[10px] text-xs text-white flex-col justify-between items-center w-[200px] bg-black rounded-2xl p-3 min-h-52 z-50">
      <div className="flex justify-between items-center text-white w-full py-2 mb-2">
        <div className="w-1/2 h-8 cursor-pointer hover:border-gray-700 hover:border-2 flex justify-center items-center rounded-lg mx-1">
          <h6 className="w-full flex justify-center">Properties</h6>
        </div>
        <div className="w-1/2 h-8 cursor-pointer hover:border-gray-700 hover:border-2 flex justify-center items-center rounded-lg mx-1">
          <h6 className="w-full flex justify-center">Layers</h6>
        </div>
      </div>

      <div className="bg-gray-800 h-[1px] w-full mb-3"></div>

      <div className="w-full h-[100%]"></div>

      <div className="bg-gray-800 h-[1px] w-full mb-3"></div>

      <div className="w-full mb-2">
        <button className="bg-gray-700 w-full px-4 py-2 text-gray-100 text-xs rounded-lg cursor-pointer">
          Share
        </button>
      </div>

      <div className="flex flex-col justify-center items-start w-5/6 text-white">
        <div className="p-2">
          <h3>Export</h3>
        </div>
        <div className="p-2">
          <h3>Print</h3>
        </div>
      </div>
    </div>
  );
};

export default RightSidePanel;
