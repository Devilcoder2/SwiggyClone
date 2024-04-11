/* eslint-disable */

import { useEffect, useState } from "react";

const normalStyle =
  "border border-gray-300 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2";
const clickedStyle =
  "border border-gray-700 bg-gray-200 text-gray-800 text-sm rounded-full mr-4 px-2 pt-1 pb-2";

const Filters = ({ offersResList, setFilteredOffersResList }) => {
  const [fastDeliveryClicked, setFastDeliveryClicked] = useState(false);
  const [ratingClicked, setRatingClicked] = useState(false);
  const [pureVegClicked, setPureVegClicked] = useState(false);
  const [firstPrice, setFirstPrice] = useState(false);
  const [secondPrice, setSecondPrice] = useState(false);
  const [offersClicked, setOffersClicked] = useState(true);

  useEffect(() => {
    const newList = offersResList.filter(
      (t) => t.info.aggregatedDiscountInfoV3?.header !== undefined
    );
    setFilteredOffersResList(newList);
  }, []);

  const clickHandler = (i) => {
    if (i == 1) {
      console.log("clicked on first");
    } else if (i == 2) {
      console.log("clicked on second");
    } else if (i == 3) {
      setFastDeliveryClicked(!fastDeliveryClicked);
      if (fastDeliveryClicked === false) {
        const newList = offersResList.filter(
          (t) => t.info.sla.deliveryTime <= 45
        );
        setFilteredOffersResList(newList);
      } else {
        setFilteredOffersResList(offersResList);
      }
    } else if (i == 5) {
      setRatingClicked(!ratingClicked);
      if (ratingClicked === false) {
        const newList = offersResList.filter((t) => t.info.avgRating > 4);
        setFilteredOffersResList(newList);
      } else {
        setFilteredOffersResList(offersResList);
      }
    } else if (i == 6) {
      setPureVegClicked(!pureVegClicked);
      if (pureVegClicked === false) {
        const newList = offersResList.filter((t) => t.info.veg === true);
        setFilteredOffersResList(newList);
      } else {
        setFilteredOffersResList(offersResList);
      }
    } else if (i == 7) {
      setOffersClicked(!offersClicked);
      if (offersClicked === true) {
        setFilteredOffersResList(offersResList);
      } else {
        const newList = offersResList.filter(
          (t) => t.info.aggregatedDiscountInfoV3?.header !== undefined
        );
        setFilteredOffersResList(newList);
      }
    } else if (i == 8) {
      setFirstPrice(!firstPrice);
      if (firstPrice === false) {
        const newList = offersResList.filter((t) => {
          const str = t.info.costForTwo;
          const match = str.match(/\d+/);
          const value = parseInt(match[0]);
          return value <= 600;
        });
        setFilteredOffersResList(newList);
      } else {
        setFilteredOffersResList(offersResList);
      }
    } else if (i == 9) {
      setSecondPrice(!secondPrice);
      if (secondPrice === false) {
        const newList = offersResList.filter((t) => {
          const str = t.info.costForTwo;
          const match = str.match(/\d+/);
          const value = parseInt(match[0]);
          return value <= 300;
        });
        setFilteredOffersResList(newList);
      } else {
        setFilteredOffersResList(offersResList);
      }
    }
  };

  return (
    <>
      <div>
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
              fastDeliveryClicked === false ? normalStyle : clickedStyle
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

          <li className={ratingClicked === false ? normalStyle : clickedStyle}>
            <button
              onClick={() => {
                clickHandler(5);
              }}
            >
              Ratings 4.0+
            </button>
          </li>
          <li className={pureVegClicked === false ? normalStyle : clickedStyle}>
            <button
              onClick={() => {
                clickHandler(6);
              }}
            >
              Pure Veg
            </button>
          </li>
          <li className={offersClicked === false ? normalStyle : clickedStyle}>
            <button
              onClick={() => {
                clickHandler(7);
              }}
            >
              Offers
            </button>
          </li>
          <li className={firstPrice === false ? normalStyle : clickedStyle}>
            <button
              onClick={() => {
                clickHandler(8);
              }}
            >
              Rs.300-Rs.600
            </button>
          </li>
          <li className={secondPrice === false ? normalStyle : clickedStyle}>
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
    </>
  );
};

export default Filters;
