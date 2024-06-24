import { useEffect, useState } from "react";
import CardDetail from "./CardDetail";

const cardData = [
  {
    id: 1,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/10013434ea9b7d71eb95f0276e192b7d",
    price: 8900,
    quant: 1,
    name: "Maggie",
  },
  {
    id: 2,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/5710d6bef81a980510a7d0545fbfb3d2",
    price: 5900,
    quant: 5,
    name: "Pasta",
  },
  {
    id: 3,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/10013434ea9b7d71eb95f0276e192b7d",
    price: 8900,
    quant: 1,
    name: "Samosa",
  },
  {
    id: 4,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/5710d6bef81a980510a7d0545fbfb3d2",
    price: 5900,
    quant: 5,
    name: "Samosa",
  },
  {
    id: 5,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/10013434ea9b7d71eb95f0276e192b7d",
    price: 8900,
    quant: 1,
    name: "Samosa",
  },
  {
    id: 6,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/5710d6bef81a980510a7d0545fbfb3d2",
    price: 5900,
    quant: 5,
    name: "Samosa",
  },
  {
    id: 7,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/10013434ea9b7d71eb95f0276e192b7d",
    price: 8900,
    quant: 1,
    name: "Samosa",
  },
  {
    id: 8,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/5710d6bef81a980510a7d0545fbfb3d2",
    price: 5900,
    quant: 5,
    name: "Samosa",
  },
];

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cardData);
  }, []);

  return (
    <div className="bg-[#E5E8ED] z-2 w-3/4 mx-auto h-[85vh] flex rounded-lg">
      <div className="w-[80%] -mr-40 ">
        {" "}
        <div className="text-lg  font-semibold bg-[#A1B3C1] w-2/3 ml-16 h-[80vh] rounded-lg  text-white pt-10 mt-4 px-4">
          <h1 className="text-2xl ml-2">CART</h1>
          <div className="mt-6 overflow-y-auto h-[65vh]   mb-1 w-full rounded-lg hide-scrollbar">
            {items.map((t) => (
              <div
                key={t.id}
                className="border font-normal border-[#A1B3C1] mb-3 py-4 px-6 rounded-2xl bg-[#6d879c]"
              >
                <div className="flex mt-4 items-center justify-between">
                  <div>
                    <img
                      src={t.img}
                      alt="Food item"
                      className="w-[100px] h-[100px] rounded-full"
                    />
                  </div>
                  <div className="text-white mr-6">
                    <h1>{t.name}</h1>
                  </div>

                  <div className="flex space-x-4 border text-white border-white py rounded-full">
                    <button className="-mt-1 px-3">-</button>
                    <p>2</p>
                    <button className="-mt-1 px-3">+</button>
                  </div>

                  <div className="text-[white] text-lg">₹ {t.price / 100}</div>

                  <div className="text-white text-2xl font-normal hover:cursor-pointer">
                    ⨯
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col text-white mt-4 w-[40rem] mr-10 ">
        <div className="h-[40vh] pl-4 bg-[#A1B3C1] rounded-lg">
          <div className="pt-4  text-xl font-semibold">
            <h1>Bill Details</h1>
          </div>

          <div className="flex justify-between mt-4 text-lg">
            <h1>Item Total: </h1>
            <h1 className="mr-40">₹600</h1>
          </div>

          <div className="flex justify-between mt-2 text-lg">
            <h1>Delivery Charges: </h1>
            <h1 className="mr-40">₹10</h1>
          </div>

          <div className="flex justify-between mt-2 text-lg">
            <h1>Add Tip: </h1>
            <h1 className="mr-40">
              ₹{" "}
              <input
                className="text-white w-14 outline-none border border-white rounded-lg px-2 text-sm py-1 bg-[#A1B3C1]"
                type="number"
              />
            </h1>
          </div>

          <div>
            <hr className="w-[70%] h-[1px] mt-4 bg-white mr-10" />
          </div>

          <div className="flex justify-between mt-2 text-lg">
            <h1>Total: </h1>
            <h1 className="mr-40">₹610</h1>
          </div>

          <div className="w-full">
            <button className="bg-[#6d879c] w-[70%] mt-5 py-2 rounded-lg">
              MAKE PAYMENT
            </button>
          </div>
        </div>
        <div className="mt-6">
          <CardDetail />
        </div>
      </div>
    </div>
  );
};

export default Cart;
