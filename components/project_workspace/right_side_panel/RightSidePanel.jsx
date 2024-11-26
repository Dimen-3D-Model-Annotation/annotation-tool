const RightSidePanel = () => {
  return (
      <div className="flex fixed top-[60px] right-[10px] bottom-[10px] flex-col justify-between items-center w-[180px] bg-black rounded-2xl p-4 min-h-52">
        <div className="flex justify-center items-center text-white w-full py-2">
          <div className="p-2 text-sm">
            <h3>Properties</h3>
          </div>
          <div className="p-2 text-sm">
            <h3>Objects</h3>
          </div>
        </div>
        <div className="bg-gray-600 h-[1px] w-full mb-4"></div>

        <div className="flex text-white text-sm w-10/12 h-[300px] overflow-y-auto">
          <div>
            <ul>
              <li className="p-2">Image1</li>
              <li className="p-2">Image2</li>
              <li className="p-2">Image2</li>
              <li className="p-2">Image2</li>
              <li className="p-2">Image2</li>
              <li className="p-2">Image2</li>
              {/* <li className="p-2">Image2</li>
              <li className="p-2">Image2</li>
              <li className="p-2">Image2</li>
              <li className="p-2">Image2</li> */}
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
