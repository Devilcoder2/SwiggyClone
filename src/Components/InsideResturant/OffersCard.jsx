/* eslint-disable */

const OffersCard = ({ offerLogo, header, description, couponCode }) => {
  console.log(offerLogo, header, description, couponCode);
  const imageLink = `https://media-assets.swiggy.com/swiggy/image/upload/${offerLogo}`;
  return (
    <>
      <div className="w-[200px] h-[70px] mr-4 rounded-lg  border border-black">
        <img src={imageLink} alt="offer-logo" className="w-6 h-6" />
      </div>
    </>
  );
};

export default OffersCard;
