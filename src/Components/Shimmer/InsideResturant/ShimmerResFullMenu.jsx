/* eslint-disable */
import ShimmerSearchBar from "./ShimmerSearchBar";
import ShimmerMenuFilters from "./ShimmerMenuFilters";
import ShimmerMyAccordion from "./ShimmerMyAccordion";

const ShimmerResFullMenu = ({ data }) => {
  const newList = new Array(9).fill(null);
  return (
    <div>
      <div className="ml-[785px] mt-16 bg-gray-300 font-medium rounded-lg tracking-[0.5em] w-[100px] h-4"></div>

      <ShimmerSearchBar />

      <div className="ml-[410px]">
        <ShimmerMenuFilters />
      </div>

      <div className="mt-16 mr-[380px] ml-[350px] bg-gray-100">
        <div className="">
          {newList.map((t) => (
            <ShimmerMyAccordion />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerResFullMenu;
