/* eslint-disable */

import { useState } from "react";
import AccordionCard from "./AccordionCard";
import down from "./../../assets/down-arrow.png";
import up from "./../../assets/up-arrow.png";

const MyAccordion = ({ items }) => {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow((prev) => !prev);
  };

  if (items === undefined) return;
  return (
    <>
      {items.itemCards !== undefined && (
        <div className="my-5" onClick={clickHandler}>
          <div className="bg-white flex justify-between pr-4">
            <h1 className="font-bold text-xl p-4 ">
              {`${items.title} (${items.itemCards?.length})`}
            </h1>
            <img
              src={show === false ? down : up}
              className={show === false ? "w-8 h-8 mt-3" : "w-6 h-6 mt-3"}
              alt=""
            />
          </div>

          <div>
            {show &&
              items.itemCards.map((t) => <AccordionCard cardItems={t} />)}
          </div>
        </div>
      )}
    </>
  );
};

export default MyAccordion;
