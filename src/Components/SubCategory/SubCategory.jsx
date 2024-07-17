import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCategoryBanner from "../../Shared/SubCategoryBanner/SubCategoryBanner";
import SelectVehicle from "../../Home/SelectVehicle/SelectVehicle";
import SubCategoryCard from "./SubCategoryCard";
import useAxios from "../../Hooks/useAxios";

const SubCategory = () => {
  const [subCat, setSubCat] = useState([]);
  const { category } = useParams();
  const axios = useAxios();
  const [search, setSearch] = useState("");
  const [highTOLow, setHighTOLow] = useState("desc");

  useEffect(() => {
    axios
      .get(
        `/sub-category?subCategory=${category}&&name=${search}&&order=${highTOLow}`
      )
      .then((res) => {
        setSubCat(res?.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios, category, search, highTOLow]);

  return (
    <section>
      <div className="mt-8">
        <SubCategoryBanner />
      </div>
      <div className="max-w-screen-xl mx-auto px-3">
        <h1 className="font-bold text-2xl uppercase mt-4">
          {subCat[0]?.category} Parts
        </h1>
        <SelectVehicle />
      </div>

      {/* Show display Data */}
      <section className="max-w-screen-xl mx-auto px-3 mt-10">
        <div>
          <div className="flex items-center justify-between">
            <form
              onChange={(e) => setSearch(e.target.value)}
              className="w-[30vw] "
            >
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
            <div>
              <div className="relative my-6 ">
                <select
                  onChange={(e) => setHighTOLow(e.target.value)}
                  id="id-04"
                  name="id-04"
                  required
                  className="peer relative w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                >
                  {/* <option value="" disabled selected></option>/ */}
                  <option value="desc">High To Low</option>
                  <option value="ace">Low To High</option>
                </select>
                <label className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                  Short by PRICE
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-labelledby="title-04 description-04"
                  role="graphics-symbol"
                >
                  <title id="title-04">Arrow Icon</title>
                  <desc id="description-04">
                    Arrow icon of the select list.
                  </desc>
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {subCat.map((categories) => (
                <SubCategoryCard
                  key={categories._id}
                  categories={categories}
                ></SubCategoryCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SubCategory;
