/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import down from "../../assets/down-arrow.png";
import up from "../../assets/up-arrow.png";

const Accordian = ({ ques, ans }) => {
  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="text-[#5F6270] mb-5">
      <div
        onClick={toggleHandler}
        className="hover:cursor-pointer hover:text-[#fb923c] flex justify-between w-[45rem]"
      >
        <h1 className="text-lg">{ques}</h1>
        <img
          src={show === false ? down : up}
          className={
            show === false ? "w-6 h-6 -mt-1 ml-6" : "w-4 h-4 mt-1 ml-6"
          }
          alt=""
        />
      </div>

      <div>
        {show && <div className="w-[43rem] mt-3 text-sm ml-1">{ans}</div>}
      </div>

      <div className="mt-4">
        <hr />
      </div>
    </div>
  );
};

export default Accordian;
