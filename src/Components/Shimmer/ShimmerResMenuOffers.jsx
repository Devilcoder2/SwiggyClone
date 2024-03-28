import ShimmerOffersCard from "./ShimmerOffersCard";

const ShimmerResMenuOffers = () => {
  const cardArray = new Array(9).fill(null);
  return (
    <div
      className="flex ml-[350px] no-scrollbar mt-6 "
      style={{ marginRight: "380px", overflowX: "auto" }}
    >
      <div className="flex space-x-4">
        {cardArray.map((t, index) => {
          return <ShimmerOffersCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default ShimmerResMenuOffers;
