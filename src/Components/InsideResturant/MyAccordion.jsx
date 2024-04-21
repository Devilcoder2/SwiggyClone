/* eslint-disable */

import { useState } from "react";
import AccordionCard from "./AccordionCard";
import down from "./../../assets/down-arrow.png";
import up from "./../../assets/up-arrow.png";

const MyAccordion = ({ items, name }) => {
  const [show, setShow] = useState(true);

  const clickHandler = () => {
    setShow((prev) => !prev);
  };

  if (items === undefined) return;

  return (
    <>
      {items.length !== 0 && (
        <div className="my-5 cursor-pointer">
          <div
            className="bg-white flex justify-between pr-4 "
            onClick={clickHandler}
          >
            <h1 className="font-bold text-xl p-4 ">
              {`${name} (${items.length})`}
            </h1>
            <img
              src={show === false ? down : up}
              className={show === false ? "w-8 h-8 mt-3" : "w-6 h-6 mt-3"}
              alt=""
            />
          </div>

          {show && items.map((t) => <AccordionCard cardItems={t} />)}
        </div>
      )}
    </>
  );
};

export default MyAccordion;
