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
  const length = menuDetailCards.length;

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
            if (i !== 0 && i < length - 3) {
              const items = t.card.card;
              return (
                <MyAccordion
                  key={i}
                  isVegOn={isVegOn}
                  isBestSellerOn={isBestSellerOn}
                  items={items}
                  searchedValue={searchedValue}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ResFullMenu;
