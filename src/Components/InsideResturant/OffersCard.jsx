/* eslint-disable */

const OffersCard = ({ offerLogo, header, description, couponCode }) => {
  console.log(offerLogo, header, description, couponCode);
  const imageLink = `https://media-assets.swiggy.com/swiggy/image/upload/${offerLogo}`;
  return (
    <>
      <div className="w-[200px] h-[70px] mr-4 rounded-lg  border border-gray-300">
        <div className="flex mt-4 ml-2">
          <img src={imageLink} alt="offer-logo" className="w-6 h-6 mr-2" />
          <h1 className="text-sm font-bold text-gray-500">{header}</h1>
        </div>
      </div>
    </>
  );
};

export default OffersCard;
