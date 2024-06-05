import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import OnMind from "./OnMind";
import ShimmerCard from "./Shimmer/ShimmerCard";
import ShimmerOnMind from "./Shimmer/ShimmerOnMind";
import Footer from "./Footer";
import TopResturantChains from "./TopResturantChains";
import Filters from "./NavBar/Filters";

const ResturantMenu = () => {
  const [resList, setResList] = useState([]);
  const [filteredOffersResList, setFilteredOffersResList] = useState([]);
  const [apidata, setapidata] = useState(null);

  const cardArray = new Array(9).fill(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.490642&lng=80.3093933&is-seo-homepage-enabled=true"
    );
    const data = await res.json();

    const restaurantData =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    console.log(restaurantData);

    setapidata(data);
    setResList(restaurantData);
    setFilteredOffersResList(restaurantData);
  };

  return (
    <>
      <div className="mx-24 px-8">
        {apidata !== null ? (
          <OnMind data={apidata} />
        ) : (
          <div className="mx-24 px-8">
            <ShimmerOnMind />
          </div>
        )}
      </div>

      <div className=" mb-16">
        {apidata !== null && <TopResturantChains data={apidata} />}
      </div>

      <hr className="mx-28" />

      <div className="ml-36 mt-12">
        <h1 className="font-bold text-2xl mb-1 mt-2">
          Restaurants with online food delivery in Kanpur
        </h1>
      </div>

      {resList.length !== 0 && (
        <div className="my-4 ml-36">
          <Filters
            offersResList={resList}
            setFilteredOffersResList={setFilteredOffersResList}
          />
        </div>
      )}

      {filteredOffersResList.length === 0 && (
        <div className="flex flex-wrap justify-center mx-8">
          {cardArray.map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-start ml-36 mr-8">
        {filteredOffersResList.map((t) => (
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

      <Footer />
    </>
  );
};

export default ResturantMenu;
