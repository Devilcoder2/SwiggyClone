const CardDetail = () => {
  return (
    <div className="h-[36.5vh] bg-[#A1B3C1] rounded-lg pl-4">
      <div>
        <h1 className="pt-4  text-xl font-semibold">Delivery address</h1>
      </div>

      <div className="pr-4 mt-4">
        <h1>Home</h1>
        <p>
          Near Azad Nagar Park, Azad Nagar, Vishnu Puri, Kanpur, Uttar Pradesh
          208002, India
        </p>
      </div>

      <div className="w-full">
        <button className="bg-[#6d879c] w-[70%] mt-7 py-2 rounded-lg">
          DELIVER HERE
        </button>
      </div>

      <div className="w-full">
        <button className="border-[#6d879c] text-[#6d879c] bg-white w-[70%] mt-3 py-2 rounded-lg">
          ADD NEW ADDRESS
        </button>
      </div>
    </div>
  );
};

export default CardDetail;
