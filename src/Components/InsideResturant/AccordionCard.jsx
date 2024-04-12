/* eslint-disable */

const AccordionCard = ({ cardItems }) => {
  console.log(cardItems);
  return (
    <>
      <h1>{cardItems?.card?.info?.name}</h1>
      <h3>₹{cardItems?.card?.info?.price / 100}</h3>
      <h3>{`${cardItems?.card?.info?.ratings?.aggregatedRating?.rating} (${cardItems?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})`}</h3>
      <h3>{cardItems?.card?.info?.itemAttribute?.portionSize}</h3>
      <h3>{cardItems?.card?.info?.description}</h3>
    </>
  );
};

export default AccordionCard;
