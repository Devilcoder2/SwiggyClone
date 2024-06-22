/* eslint-disable react/prop-types */
import { useState } from "react";

const Sidebar = ({ setCurrSelected }) => {
  const [selected, setSelected] = useState(0);

  const handleClick = (curr) => {
    setSelected(curr);
    setCurrSelected(curr);
  };

  return (
    <div className="bg-[#EDF1F7] w-60 h-[41rem]">
      <div className="pl-10 pt-10 space-y-6">
        <div
          onClick={() => handleClick(0)}
          className={` ${
            selected === 0 ? "text-[#282C3F]" : "text-[#5F6270]"
          } font-semibold ${
            selected === 0 && "bg-white "
          } w-60 pl-2 py-3 rounded-lg hover:cursor-pointer hover:text-black`}
        >
          <h1>Patner Onboarding</h1>
        </div>
        <div
          onClick={() => handleClick(1)}
          className={`${selected === 1 ? "text-[#282C3F]" : "text-[#5F6270]"} ${
            selected === 1 && "bg-white "
          } font-semibold w-60 pl-2 py-3 rounded-lg hover:cursor-pointer hover:text-black `}
        >
          <h1>Legal</h1>
        </div>
        <div
          onClick={() => handleClick(2)}
          className={`${selected === 2 ? "text-[#282C3F]" : "text-[#5F6270]"} ${
            selected === 2 && "bg-white "
          } font-semibold w-60 pl-2 py-3 rounded-lg hover:cursor-pointer hover:text-black`}
        >
          <h1>FAQs</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
