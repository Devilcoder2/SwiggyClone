/* eslint-disable */

import MyAccordion from "./MyAccordion";

const ResFullMenu = ({ data }) => {
  const menuDetailCards =
    data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const length = menuDetailCards.length;
  console.log(length - 3);
  return (
    <>
      <div>This is the menu</div>

      {menuDetailCards.map((t, i) => {
        if (i !== 0 && i < length - 3) {
          const items = t.card.card;
          return <MyAccordion items={items} />;
        }
      })}
    </>
  );
};

export default ResFullMenu;
