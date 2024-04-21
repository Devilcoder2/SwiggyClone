/* eslint-disable */

import ShimmerAccordionCard from "./ShimmerAccordionCard";

const ShimmerMyAccordion = () => {
  const newList = new Array(9).fill(null);
  return (
    <>
      {
        <div className="my-5 cursor-pointer">
          <div className="bg-white flex justify-between pr-4 ">
            <h1 className="font-bold text-xl p-4 w-[150px] h-4 bg-gray-300 rounded-lg "></h1>
          </div>

          {newList.map((t) => (
            <ShimmerAccordionCard />
          ))}
        </div>
      }
    </>
  );
};

export default ShimmerMyAccordion;
