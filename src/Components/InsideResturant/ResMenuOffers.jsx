/* eslint-disable */

import OffersCard from "./OffersCard";

const ResMenuOffers = ({ data }) => {
  const newdata =
    data.data.cards[3].card.card.gridElements.infoWithStyle.offers;

  console.log(newdata);
  return (
    <>
      <div
        className="flex ml-[350px] no-scrollbar mt-6"
        style={{ marginRight: "380px", overflowX: "auto" }}
      >
        <div className="flex space-x-4">
          {newdata.map((t, index) => {
            if (t.info.couponCode !== undefined) {
              return (
                <OffersCard
                  key={index}
                  offerLogo={t.info.offerLogo}
                  header={t.info.header}
                  couponCode={t.info.couponCode}
                  description={t.info.description}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ResMenuOffers;
