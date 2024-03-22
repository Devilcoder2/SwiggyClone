/* eslint-disable */

const ResMenuHeader = ({ data }) => {
  const realData = data.data.cards[0].card.card.info;

  const {
    city,
    name,
    cuisines,
    areaName,
    sla,
    avgRating,
    totalRatings,
    feeDetails,
    costForTwoMessage,
  } = realData;

  return <></>;
};

export default ResMenuHeader;

//city
//name
//cusinis
//areaName
//sla.lastMileTravelString
//avgRating
//totalRatings
//feeDetails.message
//sla.slaString
//costForTwoMessage
