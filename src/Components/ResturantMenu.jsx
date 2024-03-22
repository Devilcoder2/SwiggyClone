import { useEffect } from "react";
import { useParams } from "react-router";

const ResturantMenu = () => {
  const { resid } = useParams();

  const fetchapi = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.490642&lng=80.3093933&restaurantId=85566"
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <>
      <h1>This is the menu of this resturant</h1>
    </>
  );
};

export default ResturantMenu;
