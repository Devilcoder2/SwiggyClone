import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import OnMind from "./OnMind";
import ShimmerCard from "./Shimmer/ShimmerCard";
import ShimmerOnMind from "./Shimmer/ShimmerOnMind";
import Footer from "./Footer";
import TopResturantChains from "./TopResturantChains";
import Filters from "./NavBar/Filters";
import Loader from "./Loader.jsx";

const apiEndPoint = "https://api.opencagedata.com/geocode/v1/json";
const apiKey = "6cd08314eaa54132aed706e8f94fa052";

const ResturantMenu = () => {
  const [resList, setResList] = useState([]);
  const [filteredOffersResList, setFilteredOffersResList] = useState([]);
  const [apidata, setapidata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState(null);

  const cardArray = new Array(9).fill(null);

  useEffect(() => {
    fetchApi();
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  });

  const handleInfiniteScroll = async () => {
    try {
      if (
        document.documentElement.scrollHeight - 15 <
        window.innerHeight + document.documentElement.scrollTop
      ) {
        setIsLoading(true);
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.490642&lng=80.3093933&is-seo-homepage-enabled=true"
        );
        const data = await res.json();

        const restaurantData =
          data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

        setResList((prev) => {
          const newList = [...prev, ...restaurantData];
          return newList;
        });

        setFilteredOffersResList((prev) => {
          return [...prev, ...restaurantData];
        });

        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchApi = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.490642&lng=80.3093933&is-seo-homepage-enabled=true"
    );
    const data = await res.json();

    const restaurantData =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setapidata(data);
    setResList(restaurantData);
    setFilteredOffersResList(restaurantData);
  };

  const onSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;
    getUserCurrentLocation(latitude, longitude);
  };

  const onError = (e) => {
    console.log(e.message);
  };

  const getUserCurrentLocation = async (lat, long) => {
    const query = `${lat},${long}`;
    const apiUrl = `${apiEndPoint}?key=${apiKey}&q=${query}&pretty=1`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const city = data.results[0].components.city;
    setCity(city);
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
          {`Restaurants with online food delivery ${city !== null && city}`}
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

        {isLoading && <Loader />}
      </div>

      <Footer />
    </>
  );
};

export default ResturantMenu;
