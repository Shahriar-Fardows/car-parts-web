import { useEffect, useState } from "react";

const SelectVehicle = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 700) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto border bg-[#e8eeff] dark:text-white text-black mt-12 rounded-lg p-10">
      <h1 className="text-2xl font-semibold">Select Your Vehicle</h1>
      <p className="font-medium mt-1">
        Provide vehicle details to confirm fitment
      </p>
      <div
     
        className={`overflow-hidden flex p-3 rounded-lg flex-col lg:flex-row ${
          isSticky ? "lg:fixed lg:top-[-20px] z-50 bg-[#E8EEFF]  lg:left-12 px-16 lg:-ml-12  w-full " : ""
        } items-center gap-6 mt-5`}
      >
        <div className="w-full">
          <div className="border border-black p-3 flex items-center gap-3 rounded-lg">
            <h1 className="font-bold text-xl flex items-center gap-3">
              1 <span>|</span>
            </h1>
            <select className="w-full border-none rounded-md" name="" id="1">
              <option defaultValue="Year" value="">
                Year
              </option>
              <option value="2024">2029</option>
              <option value="2024">2029</option>
              <option value="2024">2022</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="border border-black p-3 flex items-center gap-3 rounded-lg">
            <h1 className="font-bold text-xl flex items-center gap-3">
              2 <span>|</span>
            </h1>
            <select className="w-full" name="" id="2">
              <option value="2022">2024</option>
              <option value="2020">2024</option>
              <option value="2011">2024</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="border border-black p-3 flex items-center gap-3 rounded-lg">
            <h1 className="font-bold text-xl flex items-center gap-3">
              3 <span>|</span>
            </h1>
            <select className="w-full" name="" id="3">
              <option value="202">2032</option>
              <option value="2026">2023</option>
              <option value="2024">2023</option>
            </select>
          </div>
        </div>
        <div className="w-full cursor-pointer text-center  border rounded-lg bg-[#3761bf] hover:bg-[#15306b]">
          <button className="text-white py-4 font-bold">GO</button>
        </div>
      </div>
    </div>
  );
};

export default SelectVehicle;
