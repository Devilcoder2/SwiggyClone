/* eslint-disable */
const ShimmerAccordionCard = () => {
  return (
    <div className="bg-white pl-4 pt-8">
      <div className="flex justify-between">
        <div className="mb-8 w-[600px]">
          <div>
            <div className="flex w-7 h-6 rounded-md mb-2 bg-gray-300"></div>
          </div>
          <h1 className="font-semibold text-xl text-gray-700 h-4 w-36 rounded-md bg-gray-300 mb-2"></h1>
          {
            <h3 className="text-lg font-medium text-gray-80 h-4 w-12 rounded-md bg-gray-300 "></h3>
          }

          {
            <h3 className="mt-4">
              <h2 className={"bg-gray-300 rounded-lg w-[400px] h-4"}></h2>
            </h3>
          }

          <div className="overflow-hidden h-[90px]">
            <h3 className="text-gray-500 mt-4 text-balance"></h3>
            <h3 className="text-gray-500 "></h3>
          </div>
        </div>

        <div className=" cursor-pointer">
          <div className=" w-[156px] h-[144px] bg-gray-300 rounded-sm"></div>

          <button className="relative bottom-5 left-8 bg-white h-8 w-12 border border-gray-300 px-12 py-2 rounded-xl shadow-lg hover:bg-gray-300"></button>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default ShimmerAccordionCard;
