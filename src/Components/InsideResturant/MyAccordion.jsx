/* eslint-disable */

import { useState } from "react";
import AccordionCard from "./AccordionCard";
import down from "./../../assets/down-arrow.png";
import up from "./../../assets/up-arrow.png";

const MyAccordion = ({ items, isVegOn, isBestSellerOn, searchedValue }) => {
  const [show, setShow] = useState(true);

  const clickHandler = () => {
    setShow((prev) => !prev);
  };

  if (items === undefined) return;
  if (items.itemCards === undefined) return;

  const newList = items.itemCards.filter((t) => {
    if (t.card.info.name.toLowerCase().includes(searchedValue)) {
      if (isBestSellerOn === false) {
        if (isVegOn === null) {
          return true;
        } else if (isVegOn === true) {
          if (t.card.info.itemAttribute.vegClassifier === "VEG") {
            return true;
          }
        } else if (isVegOn === false) {
          if (t.card.info.itemAttribute.vegClassifier === "NONVEG") {
            return true;
          }
        }
      } else {
        if (t.card.info.ribbon?.text === "Bestseller") {
          if (isVegOn === null) {
            return true;
          } else if (isVegOn === true) {
            if (t.card.info.itemAttribute.vegClassifier === "VEG") {
              return true;
            }
          } else if (isVegOn === false) {
            if (t.card.info.itemAttribute.vegClassifier === "NONVEG") {
              return true;
            }
          }
        }
      }
    }
  });

  return (
    <>
      {newList.length !== 0 && (
        <div className="my-5 cursor-pointer">
          <div
            className="bg-white flex justify-between pr-4 "
            onClick={clickHandler}
          >
            <h1 className="font-bold text-xl p-4 ">
              {`${items.title} (${newList.length})`}
            </h1>
            <img
              src={show === false ? down : up}
              className={show === false ? "w-8 h-8 mt-3" : "w-6 h-6 mt-3"}
              alt=""
            />
          </div>

          {/* <div className="bg-white">
            {show &&
              items.itemCards.map((t) => {
                if (t.card.info.name.toLowerCase().includes(searchedValue)) {
                  if (isBestSellerOn === false) {
                    if (isVegOn === null) {
                      return <AccordionCard cardItems={t} />;
                    } else if (isVegOn === true) {
                      if (t.card.info.itemAttribute.vegClassifier === "VEG") {
                        return <AccordionCard cardItems={t} />;
                      }
                    } else if (isVegOn === false) {
                      if (
                        t.card.info.itemAttribute.vegClassifier === "NONVEG"
                      ) {
                        return <AccordionCard cardItems={t} />;
                      }
                    }
                  } else {
                    if (t.card.info.ribbon?.text === "Bestseller") {
                      if (isVegOn === null) {
                        return <AccordionCard cardItems={t} />;
                      } else if (isVegOn === true) {
                        if (t.card.info.itemAttribute.vegClassifier === "VEG") {
                          return <AccordionCard cardItems={t} />;
                        }
                      } else if (isVegOn === false) {
                        if (
                          t.card.info.itemAttribute.vegClassifier === "NONVEG"
                        ) {
                          return <AccordionCard cardItems={t} />;
                        }
                      }
                    }
                  }
                }
              })}
          </div> */}

          {show && newList.map((t) => <AccordionCard cardItems={t} />)}
        </div>
      )}
    </>
  );
};

export default MyAccordion;
