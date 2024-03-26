/* eslint-disable */

import OffersCard from "./OffersCard";

const ResMenuOffers = ({ data }) => {
  const newdata =
    data.data.cards[3].card.card.gridElements.infoWithStyle.offers;

  console.log(newdata);
  return (
    <>
      <h2>These are resMenu offers</h2>
      <div className="flex ml-[350px]">
        {newdata.map((t) => {
          if (t.info.couponCode !== undefined) {
            return (
              <OffersCard
                key={t.info.offerIds}
                offerLogo={t.info.offerLogo}
                header={t.info.header}
                couponCode={t.info.couponCode}
                description={t.info.description}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default ResMenuOffers;

//offerLogo
//header
//couponCode
//description
