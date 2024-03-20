import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "./Card";

const FoodTypeRes = () => {
  const [allRes, setAllRes] = useState([]);
  const [heading, setHeading] = useState(null);
  const [description, setDescription] = useState(null);
  const { id } = useParams();

  const fetchapi = async () => {
    const URL_COLLECTION = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.490642&lng=80.3093933&collection=${id}&tags=layout_PavBhaji_Contextual&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

    const response = await fetch(URL_COLLECTION);
    const res = await response.json();
    setHeading(res.data.cards[0].card.card.title);
    setDescription(res.data.cards[0].card.card.description);
    setAllRes(res.data.cards);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <>
      {heading !== null && (
        <div className="mx-36 mt-12">
          <h1 className="font-bold text-4xl text-gray-700">{heading}</h1>
          <p className="mt-4 text-lg mb-2 text-gray-600">{description}</p>
          <h1 className="text-xl mt-12 font-semibold">
            Restaurants to explore
          </h1>
        </div>
      )}

      <div className="flex flex-wrap justify-center mx-8">
        {allRes.map((t, i) => {
          if (i >= 3 && i <= 10) {
            return (
              <Card
                key={i}
                image={t.card.card.info.cloudinaryImageId}
                title={t.card.card.info.name}
                rating={t.card.card.info.avgRating}
                deliverytime={t.card.card.info.sla.slaString}
                cusinis={t.card.card.info.cuisines}
                location={t.card.card.info.areaName}
                imageHeader={t.card.card.info.aggregatedDiscountInfoV3?.header}
                imageSubHeader={
                  t.card.card.info.aggregatedDiscountInfoV3?.subHeader
                }
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default FoodTypeRes;
