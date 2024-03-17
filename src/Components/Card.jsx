import PropTypes from "prop-types";

const Card = ({
  image,
  title,
  rating,
  deliverytime,
  cusinis,
  location,
  imageHeader,
  imageSubHeader,
}) => {
  const imageLink = `https://media-assets.swiggy.com/swiggy/image/upload/${image}`;
  const cusinisString = cusinis.join(", ");
  return (
    <div className="w-[273px] h-[284px] border border-gray-100 m-6 mb-10  rounded-xl hover:scale-[95%] transition-all hover:cursor-pointer">
      <img
        src={imageLink}
        className="w-[273px] h-[182px] rounded-xl  outline-none"
      />
      <div>
        {imageHeader && (
          <h1 className="mt-[-35px] text-white font-bold m-2 text-xl">{`${imageHeader} ${imageSubHeader}`}</h1>
        )}
      </div>

      <h1 className="font-bold text-gray-600 text-xl px-1 text-ellipsis whitespace-nowrap overflow-hidden">
        {title}
      </h1>

      <h3 className="px-1 text-gray-600 font-semibold">
        <span className="fa fa-star checked mr-1"></span>
        {rating} | {deliverytime}
      </h3>

      <div className="px-1 text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden gap-1 flex ">
        {cusinisString}
      </div>

      <p className="px-1 text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden">
        {location}
      </p>
    </div>
  );
};

Card.propTypes = {
  cusinis: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
