import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";

const SelectVehicle = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedTrim, setSelectedTrim] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("");
  const axios = useAxios();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset >= 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 1913; year <= currentYear; year++) {
      years.push({ year });
    }
    return years;
  };

  const years = generateYears();

  const makes = [
    { make: "Toyota" },
    { make: "Ford" },
    { make: "Chevrolet" },
    // Add more makes as needed
  ];

  const models = [
    { model: "Corolla" },
    { model: "Camry" },
    { model: "Prius" },
    // Add more models as needed
  ];

  const trims = [
    { trim: "Base" },
    { trim: "Sport" },
    { trim: "Limited" },
    // Add more trims as needed
  ];

  const engines = [
    { engine: "1.5L" },
    { engine: "2.0L" },
    { engine: "2.5L" },
    // Add more engines as needed
  ];

  const getVehicle = (e) => {
    e.preventDefault();
    console.log(selectedYear, selectedMake, selectedModel, selectedTrim, selectedEngine);

    // Send vehicle details to the server

    // axios.post("/added-vehicle", {
    //   year: selectedYear,
    //   make: selectedMake,
    //   model: selectedModel,
    //   trim: selectedTrim,
    //   engine: selectedEngine,
    // });
  };

  const handleGoBtn = () => {
    
  }

  return (
    <div className="border bg-[#e8eeff] dark:text-white text-black mt-12 rounded-lg p-10">
      <h1 className="text-2xl font-semibold">Select Your Vehicle</h1>
      <p className="font-medium mt-1">
        Provide vehicle details to confirm fitment
      </p>
      <form
        onSubmit={getVehicle}
        className={`overflow-hidden flex p-3 rounded-lg flex-col lg:flex-row ${
          isSticky
            ? "lg:fixed lg:top-[-20px] z-10 bg-[#E8EEFF] lg:left-12 px-16 lg:-ml-12 w-full"
            : ""
        } items-center gap-6 mt-5`}
      >
        <div className="w-full">
          <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
            <h1 className="font-bold text-xl flex items-center gap-3">
              1 <span>|</span>
            </h1>
            <select
              className="w-full border-none rounded-md"
              name="year"
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option defaultValue="Year" value="">
                Year
              </option>
              {years.map((item, idx) => (
                <option key={idx} value={item.year}>
                  {item.year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
            <h1 className="font-bold text-xl flex items-center gap-3">
              2 <span>|</span>
            </h1>
            <select
              className="w-full border-none rounded-md"
              name="make"
              id="make"
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value)}
              disabled={!selectedYear}
            >
              <option defaultValue="Make" value="">
                Make
              </option>
              {makes.map((item, idx) => (
                <option key={idx} value={item.make}>
                  {item.make}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
            <h1 className="font-bold text-xl flex items-center gap-3">
              3 <span>|</span>
            </h1>
            <select
              className="w-full border-none rounded-md"
              name="model"
              id="model"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              disabled={!selectedMake}
            >
              <option defaultValue="Model" value="">
                Model
              </option>
              {models.map((item, idx) => (
                <option key={idx} value={item.model}>
                  {item.model}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
            <h1 className="font-bold text-xl flex items-center gap-3">
              4 <span>|</span>
            </h1>
            <select
              className="w-full border-none rounded-md"
              name="trim"
              id="trim"
              value={selectedTrim}
              onChange={(e) => setSelectedTrim(e.target.value)}
              disabled={!selectedModel}
            >
              <option defaultValue="Trim" value="">
                Trim
              </option>
              {trims.map((item, idx) => (
                <option key={idx} value={item.trim}>
                  {item.trim}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
            <h1 className="font-bold text-xl flex items-center gap-3">
              5 <span>|</span>
            </h1>
            <select
              className="w-full border-none rounded-md"
              name="engine"
              id="engine"
              value={selectedEngine}
              onChange={(e) => setSelectedEngine(e.target.value)}
              disabled={!selectedTrim}
            >
              <option defaultValue="Engine" value="">
                Engine
              </option>
              {engines.map((item, idx) => (
                <option key={idx} value={item.engine}>
                  {item.engine}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-[40%] cursor-pointer text-center border rounded-lg bg-[#3761bf] hover:bg-[#15306b]">
          <button className="text-white py-4 font-bold" type="submit">GO</button>
        </div>
      </form>
    </div>
  );
};

export default SelectVehicle;
