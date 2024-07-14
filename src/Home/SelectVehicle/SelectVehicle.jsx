import { useEffect, useState } from "react";

const SelectVehicle = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [carYear, setCarYear] = useState("")

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

  const year = [
    {"year": 1913},
    {"year": 1914},
    {"year": 1915},
    {"year": 1916},
    {"year": 1917},
    {"year": 1918},
    {"year": 1919},
    {"year": 1920},
    {"year": 1921},
    {"year": 1922},
    {"year": 1923},
    {"year": 1924},
    {"year": 1925},
    {"year": 1926},
    {"year": 1927},
    {"year": 1928},
    {"year": 1929},
    {"year": 1930},
    {"year": 1931},
    {"year": 1932},
    {"year": 1933},
    {"year": 1934},
    {"year": 1935},
    {"year": 1936},
    {"year": 1937},
    {"year": 1938},
    {"year": 1939},
    {"year": 1940},
    {"year": 1941},
    {"year": 1942},
    {"year": 1943},
    {"year": 1944},
    {"year": 1945},
    {"year": 1946},
    {"year": 1947},
    {"year": 1948},
    {"year": 1949},
    {"year": 1950},
    {"year": 1951},
    {"year": 1952},
    {"year": 1953},
    {"year": 1954},
    {"year": 1955},
    {"year": 1956},
    {"year": 1957},
    {"year": 1958},
    {"year": 1959},
    {"year": 1960},
    {"year": 1961},
    {"year": 1962},
    {"year": 1963},
    {"year": 1964},
    {"year": 1965},
    {"year": 1966},
    {"year": 1967},
    {"year": 1968},
    {"year": 1969},
    {"year": 1970},
    {"year": 1971},
    {"year": 1972},
    {"year": 1973},
    {"year": 1974},
    {"year": 1975},
    {"year": 1976},
    {"year": 1977},
    {"year": 1978},
    {"year": 1979},
    {"year": 1980},
    {"year": 1981},
    {"year": 1982},
    {"year": 1983},
    {"year": 1984},
    {"year": 1985},
    {"year": 1986},
    {"year": 1987},
    {"year": 1988},
    {"year": 1989},
    {"year": 1990},
    {"year": 1991},
    {"year": 1992},
    {"year": 1993},
    {"year": 1994},
    {"year": 1995},
    {"year": 1996},
    {"year": 1997},
    {"year": 1998},
    {"year": 1999},
    {"year": 2000},
    {"year": 2001},
    {"year": 2002},
    {"year": 2003},
    {"year": 2004},
    {"year": 2005},
    {"year": 2006},
    {"year": 2007},
    {"year": 2008},
    {"year": 2009},
    {"year": 2010},
    {"year": 2011},
    {"year": 2012},
    {"year": 2013},
    {"year": 2014},
    {"year": 2015},
    {"year": 2016},
    {"year": 2017},
    {"year": 2018},
    {"year": 2019},
    {"year": 2020},
    {"year": 2021},
    {"year": 2022},
    {"year": 2023},
    {"year": 2024}
  ]
  

  const handleGoBtn = () => {
    
  }

  return (
    <div className="max-w-screen-xl mx-auto border bg-[#e8eeff] dark:text-white text-black mt-12 rounded-lg p-10">
      <h1 className="text-2xl font-semibold">Select Your Vehicle</h1>
      <p className="font-medium mt-1">
        Provide vehicle details to confirm fitment
      </p>
      <div
        className={`overflow-hidden flex p-3 rounded-lg flex-col lg:flex-row ${
          isSticky
            ? "lg:fixed lg:top-[-20px] z-10 bg-[#E8EEFF]  lg:left-12 px-16 lg:-ml-12  w-full "
            : ""
        } items-center gap-6 mt-5`}
      >
        <div className="w-full">
          <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
            <h1 className="font-bold text-xl flex items-center gap-3">
              1 <span>|</span>
            </h1>
            <select className="w-full border-none rounded-md" name="" id="1">
              <option defaultValue="Year" value="">
                Year
              </option>
              {year.map((item, idx) => (
                <option key={idx} value={item.year}>
                  {item.year}
                </option>
              ))}
              {/* <option value="2024">2029</option>
              <option value="2024">2029</option>
              <option value="2024">2022</option> */}
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
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
          <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
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
        <div onClick={handleGoBtn} className="w-[40%] cursor-pointer text-center  border rounded-lg bg-[#3761bf] hover:bg-[#15306b]">
          <button className="text-white py-4 font-bold">GO</button>
        </div>
      </div>
    </div>
  );
};

export default SelectVehicle;
