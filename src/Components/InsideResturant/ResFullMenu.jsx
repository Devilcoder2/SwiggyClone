/* eslint-disable */

import { useState } from "react";
import MenuFilters from "./MenuFilters";
import MyAccordion from "./MyAccordion";
import SearchBar from "./SearchBar";

const ResFullMenu = ({ data }) => {
  const [isVegOn, setIsVegOn] = useState(null);
  const [isBestSellerOn, setIsBestSellerOn] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");

  const menuDetailCards =
    data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

  let withnonzeroitems = 0;

  return (
    <div>
      <div className="ml-[785px] mt-16 text-gray-600 font-medium tracking-[0.5em] ">
        MENU
      </div>

      <SearchBar setSearchedValue={setSearchedValue} />

      <div className="ml-[410px]">
        <MenuFilters
          setIsVegOn={setIsVegOn}
          setIsBestSellerOn={setIsBestSellerOn}
        />
      </div>

      <div className="mt-16 mr-[380px] ml-[350px] bg-gray-100">
        <div className="">
          {menuDetailCards.map((t, i) => {
            if (i !== 0) {
              const items = t.card.card;
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
                      if (
                        t.card.info.itemAttribute.vegClassifier === "NONVEG"
                      ) {
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
                        if (
                          t.card.info.itemAttribute.vegClassifier === "NONVEG"
                        ) {
                          return true;
                        }
                      }
                    }
                  }
                }
              });

              if (newList.length === 0) {
                return;
              }

              withnonzeroitems = withnonzeroitems + 1;

              return (
                <MyAccordion key={i} items={newList} name={t.card.card.title} />
              );
            }
          })}
        </div>
      </div>

      {withnonzeroitems === 0 && (
        <div className="mt-16 ml-[750px] text-xl text-gray-600 bg-gray-100">
          No item with this name !!
        </div>
      )}
    </div>
  );
};

export default ResFullMenu;
