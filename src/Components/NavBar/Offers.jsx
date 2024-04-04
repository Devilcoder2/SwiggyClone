/* eslint-disable */

const Offers = ({ data }) => {
  return (
    <>
      <div className="ml-[200px] mt-16">
        <div className="mb-4">
          <h1 className="text-md ">
            Home/<span className="text-gray-500">Offers</span>
          </h1>
        </div>

        <div>
          <h1 className="text-gray-900 text-2xl font-bold ">
            Restaurants With Great Offers Near Me
          </h1>
        </div>

        <div>
          <ul className="flex mt-3">
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Filter</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Sort By</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Fast Delivery</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>New on Swiggy</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Ratings 4.0+</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Pure Veg</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Offers</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Rs.300-Rs.600</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Less than Rs.300</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Offers;
