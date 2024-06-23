const SetLocation = () => {
  return (
    <div>
      <div className="mt-16 text-center">
        <input
          placeholder="Set Your Location"
          className="border-gray-400 border p-3 rounded-sm text-gray-600 font-semibold w-[800px] focus:outline-none"
        />
      </div>

      <div className="ml-[23rem] mt-4">
        <button className="border-[#fb923c] border-2 px-5 py-2 font-semibold text-[#fb923c] text-sm hover:text-white hover:bg-[#fb923c]">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default SetLocation;
