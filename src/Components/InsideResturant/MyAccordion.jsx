/* eslint-disable */

import AccordionCard from "./AccordionCard";

const MyAccordion = ({ items }) => {
  if (items === undefined) return;
  console.log(items);
  return (
    <>
      {items.itemCards !== undefined && (
        <div>
          <h1>{`${items.title} (${items.itemCards?.length})`}</h1>
          {items.itemCards.map((t) => (
            <AccordionCard cardItems={t} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyAccordion;
