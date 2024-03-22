import PropTypes from "prop-types";
import "./Card.css";

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
      <div className="relative">
        <img
          src={imageLink}
          className="w-[273px] h-[182px] rounded-xl object-cover shadow-lg"
        />
        <div className="abcd rounded-xl ">
          <div>
            {imageHeader && (
              <h1 className="mt-[-25px] text-white font-bold  text-xl">{`${imageHeader} ${imageSubHeader}`}</h1>
            )}
          </div>
        </div>
      </div>

      <h1 className="font-bold text-gray-600 text-xl px-1 pt-2 text-ellipsis whitespace-nowrap overflow-hidden">
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
