/* eslint-disable */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../Card";
import Footer from "../Footer";
import ShimmerCard from "../Shimmer/ShimmerCard";

const Offers = () => {
  const [offersResList, setOffersResList] = useState([]);

  const cardArray = new Array(9).fill(null);

  const fetchapi = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.490642&lng=80.3093933&is-seo-homepage-enabled=true"
    );

    const data = await res.json();

    const restaurantData =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setOffersResList(restaurantData);
  };

  useEffect(() => {
    fetchapi();
  }, []);

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
          <ul className="flex mt-3">
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Filter</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Sort By</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Fast Delivery</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>New on Swiggy</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Ratings 4.0+</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Pure Veg</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Offers</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Rs.300-Rs.600</button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button>Less than Rs.300</button>
            </li>
          </ul>
        </div>

        {offersResList.length === 0 && (
          <div className="flex flex-wrap justify-center ml-[-90px]">
            {cardArray.map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-center ml-[-90px]">
          {offersResList.map((t) => {
            const imageHeader = t.info.aggregatedDiscountInfoV3?.header;

            if (imageHeader) {
              return (
                <Link key={t.info.id} to={"/resmenu/" + t.info.id}>
                  <Card
                    image={t.info.cloudinaryImageId}
                    title={t.info.name}
                    rating={t.info.avgRating}
                    deliverytime={t.info.sla.slaString}
                    cusinis={t.info.cuisines}
                    location={t.info.areaName}
                    imageHeader={imageHeader}
                    imageSubHeader={t.info.aggregatedDiscountInfoV3?.subHeader}
                  />
                </Link>
              );
            }
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Offers;
