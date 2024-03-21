import { useEffect, useState } from "react";

import Card from "./Card";
import OnMind from "./OnMind";

const ResturantMenu = () => {
  const [resList, setResList] = useState([]);
  const [apidata, setapidata] = useState(null);

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

    setapidata(data);
    setResList(restaurantData);
  };

  return (
    <>
      <div className="mx-24 px-8">
        {apidata !== null && <OnMind data={apidata} />}
      </div>

      <div className="flex flex-wrap justify-center mx-8">
        {resList.map((t) => (
          <Card
            key={t.info.id}
            image={t.info.cloudinaryImageId}
            title={t.info.name}
            rating={t.info.avgRating}
            deliverytime={t.info.sla.slaString}
            cusinis={t.info.cuisines}
            location={t.info.areaName}
            imageHeader={t.info.aggregatedDiscountInfoV3?.header}
            imageSubHeader={t.info.aggregatedDiscountInfoV3?.subHeader}
          />
        ))}
        {/* <div>first : What is on your mind</div>
      <div>second: Top resturant chains</div>
      <div>third: resturants with online food delivery.... with filters</div> */}
      </div>
    </>
  );
};

export default ResturantMenu;
