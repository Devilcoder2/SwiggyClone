/* eslint-disable */
import { Link } from "react-router-dom";
import Card from "./Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopResturantChains = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const resList =
    data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  return (
    <>
      <div className=" ml-36">
        <h1 className="font-bold text-2xl mb-1 mt-2">
          Top Resturant Chains in Kanpur
        </h1>

        <div className="ml-[-25px] mr-28 overscroll-contain ">
          <Slider {...settings}>
            {resList.map((t) => (
              <Link key={t.info.id} to={"/resmenu/" + t.info.id}>
                <Card
                  image={t.info.cloudinaryImageId}
                  title={t.info.name}
                  rating={t.info.avgRating}
                  deliverytime={t.info.sla.slaString}
                  cusinis={t.info.cuisines}
                  location={t.info.areaName}
                  imageHeader={t.info.aggregatedDiscountInfoV3?.header}
                  imageSubHeader={t.info.aggregatedDiscountInfoV3?.subHeader}
                />
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TopResturantChains;
