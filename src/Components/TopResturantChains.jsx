/* eslint-disable */
import { Link } from "react-router-dom";
import Card from "./Card";
const TopResturantChains = ({ data }) => {
  console.log(
    data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  );

  const resList =
    data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  return (
    <>
      <div className=" ml-36">
        <h1 className="font-bold text-2xl mb-1 mt-2">
          Top Resturant Chains in Kanpur
        </h1>

        <div className="flex flex-wrap ">
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
        </div>
      </div>
    </>
  );
};

export default TopResturantChains;
