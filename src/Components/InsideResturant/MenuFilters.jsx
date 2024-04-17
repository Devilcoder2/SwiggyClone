/* eslint-disable */

import { useState } from "react";

function MenuFilters({ setIsVegOn }) {
  const [vegOn, setVegOn] = useState(false);
  const [nonVegOn, setNonVegOn] = useState(false);

  const toggleVeg = () => {
    if (vegOn) {
      setVegOn(false);
      setIsVegOn(null);
    } else {
      setVegOn(true);
      setIsVegOn(true);
      setNonVegOn(false);
    }
  };

  const toggleNonVeg = () => {
    if (nonVegOn) {
      setNonVegOn(false);
      setIsVegOn(null);
    } else {
      setNonVegOn(true);
      setIsVegOn(false);
      setVegOn(false);
    }
  };

  return (
    <div className="flex justify-start mt-8">
      <div
        className={`w-20 h-8 mr-4 px-6 py-4 rounded-lg flex items-center justify-center cursor-pointer ${
          vegOn ? "bg-green-500 text-white " : "bg-gray-200 text-gray-600"
        }`}
        onClick={toggleVeg}
      >
        Veg
      </div>
      <div
        className={`w-20 h-8 mr-4 py-4 rounded-lg  flex items-center justify-center cursor-pointer ${
          nonVegOn ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"
        }`}
        onClick={toggleNonVeg}
      >
        Non Veg
      </div>
    </div>
  );
}

export default MenuFilters;
