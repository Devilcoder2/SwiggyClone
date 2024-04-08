/* eslint-disable */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../Card";
import Footer from "../Footer";
import ShimmerCard from "../Shimmer/ShimmerCard";

const Offers = () => {
  const [offersResList, setOffersResList] = useState([]);
  const [filteredOffersResList, setFilteredOffersResList] = useState([]);
  const [color, setColor] = useState(true);

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

  const clickHandler = (i) => {
    if (i == 1) {
      console.log("clicked on first");
    } else if (i == 2) {
      console.log("clicked on second");
    } else if (i == 3) {
      const newList = offersResList.filter(
        (t) => t.info.sla.deliveryTime <= 30
      );
      setFilteredOffersResList(newList);
      setColor(!color);
    } else if (i == 5) {
      const newList = offersResList.filter((t) => t.info.avgRating > 4);
      setFilteredOffersResList(newList);
    } else if (i == 6) {
      const newList = offersResList.filter((t) => t.info.veg === true);
      setFilteredOffersResList(newList);
    } else if (i == 7) {
      setFilteredOffersResList(offersResList);
    } else if (i == 8) {
      const newList = offersResList.filter((t) => {
        const str = t.info.costForTwo;
        const match = str.match(/\d+/);
        const value = parseInt(match[0]);
        return value <= 600;
      });
      setFilteredOffersResList(newList);
    } else if (i == 9) {
      const newList = offersResList.filter((t) => {
        const str = t.info.costForTwo;
        const match = str.match(/\d+/);
        const value = parseInt(match[0]);
        return value <= 300;
      });
      setFilteredOffersResList(newList);
    }
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
          <ul className="flex mt-3">
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button
                onClick={() => {
                  clickHandler(1);
                }}
              >
                Filter
              </button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button
                onClick={() => {
                  clickHandler(2);
                }}
              >
                Sort By
              </button>
            </li>
            <li
              className={
                color === true
                  ? "border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2"
                  : "border border-gray-700 bg-gray-200 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2"
              }
            >
              <button
                onClick={() => {
                  clickHandler(3);
                }}
              >
                Fast Delivery
              </button>
            </li>

            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button
                onClick={() => {
                  clickHandler(5);
                }}
              >
                Ratings 4.0+
              </button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button
                onClick={() => {
                  clickHandler(6);
                }}
              >
                Pure Veg
              </button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button
                onClick={() => {
                  clickHandler(7);
                }}
              >
                Offers
              </button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button
                onClick={() => {
                  clickHandler(8);
                }}
              >
                Rs.300-Rs.600
              </button>
            </li>
            <li className="border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2">
              <button
                onClick={() => {
                  clickHandler(9);
                }}
              >
                Less than Rs.300
              </button>
            </li>
          </ul>
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
