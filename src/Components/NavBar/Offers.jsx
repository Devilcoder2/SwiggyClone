/* eslint-disable */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../Card";
import Footer from "../Footer";
import ShimmerCard from "../Shimmer/ShimmerCard";
import Filters from "./Filters";

const Offers = () => {
  const [offersResList, setOffersResList] = useState([]);
  const [filteredOffersResList, setFilteredOffersResList] = useState([]);

  const cardArray = new Array(9).fill(null);

  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.490642&lng=80.3093933&is-seo-homepage-enabled=true"
    );

    const data = await res.json();

    const restaurantData =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setOffersResList(restaurantData);
    setFilteredOffersResList(restaurantData);
  };

  return (
    <>
      <div className="ml-[200px] mt-16">
        <div className="mb-4">
          <h1 className="text-md ">
            Home/<span className="text-gray-500">Offers</span>
          </h1>
        </div>

        <div>
          <h1 className="text-gray-900 text-2xl font-bold ">
            Restaurants With Great Offers Near Me
          </h1>
        </div>

        <div className="mb-4">
          <Filters
            offersResList={offersResList}
            setFilteredOffersResList={setFilteredOffersResList}
          />
        </div>

        {filteredOffersResList.length === 0 && (
          <div className="flex flex-wrap justify-center ml-[-90px]">
            {cardArray.map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-center ml-[-90px]">
          {filteredOffersResList.map((t) => {
            return (
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
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Offers;
