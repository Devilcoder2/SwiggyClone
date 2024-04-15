/* eslint-disable */

import MenuFilters from "./MenuFilters";
import MyAccordion from "./MyAccordion";
import SearchBar from "./SearchBar";

const ResFullMenu = ({ data }) => {
  const menuDetailCards =
    data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const length = menuDetailCards.length;
  console.log(length - 3);
  return (
    <div>
      <div className="ml-[785px] mt-16 text-gray-600 font-medium tracking-[0.5em] ">
        MENU
      </div>

      <SearchBar />

      <MenuFilters />

      <div className="mt-16 mr-[380px] ml-[350px] bg-gray-100">
        <div className="">
          {menuDetailCards.map((t, i) => {
            if (i !== 0 && i < length - 3) {
              const items = t.card.card;
              return <MyAccordion items={items} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ResFullMenu;
