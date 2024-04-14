/* eslint-disable */

const AccordionCard = ({ cardItems }) => {
  console.log(cardItems);
  return (
    <div className="bg-white">
      <h1 className="font-semibold text-lg text-gray-800">
        {cardItems?.card?.info?.name}
      </h1>
      <h3>₹{cardItems?.card?.info?.price / 100}</h3>
      <h3>{`${cardItems?.card?.info?.ratings?.aggregatedRating?.rating} (${cardItems?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})`}</h3>
      <h3>{cardItems?.card?.info?.itemAttribute?.portionSize}</h3>
      <h3>{cardItems?.card?.info?.description}</h3>
    </div>
  );
};

export default AccordionCard;
