/* eslint-disable */

import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ResFullMenu from "./InsideResturant/ResFullMenu";
import ResMenuHeader from "./InsideResturant/ResMenuHeader";
import ResMenuOffers from "./InsideResturant/ResMenuOffers";
import ShimmerResMenuHeader from "./Shimmer/ShimmerResMenuHeader";
import ShimmerResMenuOffers from "./Shimmer/ShimmerResMenuOffers";

const ResturantMenu = () => {
  const { resid } = useParams();
  const [data, setData] = useState(null);

  const fetchapi = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.490642&lng=80.3093933&restaurantId=${resid}`
    );
    const newdata = await response.json();
    setData(newdata);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <>
      {data !== null ? <ResMenuHeader data={data} /> : <ShimmerResMenuHeader />}
      {data !== null ? <ResMenuOffers data={data} /> : <ShimmerResMenuOffers />}
      {/* here veg only filter  */}
      <ResFullMenu />
    </>
  );
};

export default ResturantMenu;
