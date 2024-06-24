/* eslint-disable */
import veg from "./../../assets/vegIcon.png";
import nonveg from "./../../assets/nonVegIcon.png";
import bestseller from "./../../assets/BestSellerImg.png";

const AccordionCard = ({ cardItems }) => {
  const imgLink = `https://media-assets.swiggy.com/swiggy/image/upload/${cardItems.card.info.imageId}`;
  const rating = cardItems?.card?.info?.ratings?.aggregatedRating?.rating;
  const isVeg = cardItems?.card?.info?.isVeg;
  const isBestSeller = cardItems?.card?.info?.ribbon?.text;
  const color = rating > 3 ? "green" : "yellow";
  const price = cardItems?.card?.info?.price;

  const handleAddCartButton = () => {
    console.log(imgLink);
    console.log(price);
  };

  return (
    <div className="bg-white pl-4 pt-8">
      <div className="flex justify-between">
        <div className="mb-8 w-[600px]">
          <div>
            <div className="flex">
              <img
                src={isVeg === undefined ? nonveg : veg}
                className="w-5 h-5"
                alt=""
              />
              {isBestSeller !== undefined && (
                <img src={bestseller} className="h-6 pb-1 ml-2" />
              )}
            </div>
          </div>
          <h1 className="font-semibold text-xl text-gray-700">
            {cardItems?.card?.info?.name}
          </h1>
          {price !== undefined && (
            <h3 className="text-lg font-medium text-gray-80">
              ₹{cardItems?.card?.info?.price / 100}
            </h3>
          )}

          {rating !== undefined && (
            <h3 className="mt-4">
              <h2
                className={
                  rating > 3
                    ? `font-bold text-[15px] ml-[6px] mb-1 text-green-500`
                    : `font-bold text-[15px] ml-[6px] mb-1 text-yellow-500`
                }
              >
                <span className={`fa fa-star checked-${color} mr-1`}></span>
                {`${rating}`}
                <span className="text-gray-600 font-normal ml-2">{`(${cardItems?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})`}</span>
              </h2>
            </h3>
          )}

          <div className="overflow-hidden h-[90px]">
            <h3 className="text-gray-500 mt-4 text-balance">
              {cardItems?.card?.info?.itemAttribute?.portionSize}
            </h3>
            <h3 className="text-gray-500 ">
              {cardItems?.card?.info?.description}
            </h3>
          </div>
        </div>

        <div className=" cursor-pointer">
          <img
            src={imgLink}
            className="object-cover w-[156px] h-[144px] rounded-lg"
            alt=""
          />

          <button
            onClick={handleAddCartButton}
            className="text-green-700 font-bold text-xl  relative bottom-6 left-2 bg-white border border-gray-200 px-12 py-2 rounded-xl shadow-lg hover:bg-gray-300"
          >
            ADD
          </button>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default AccordionCard;
