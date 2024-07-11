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

  useEffect(() => {
    axios
      .get(`/sub-category?subCategory=${category}`)
      .then((res) => {
        setSubCat(res?.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios, category]);

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-3">
        <h1 className="font-bold text-2xl uppercase mt-4">
          {subCat[0]?.category} Parts
        </h1>
        <SelectVehicle />
      </div>
      <div className="mt-8">
        <SubCategoryBanner />
      </div>
      {/* Show display Data */}
      <section className="max-w-screen-xl mx-auto px-3 mt-12">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative md:w-[30%]">
            <input
              id="id-s03"
              type="search"
              name="id-s03"
              placeholder="Search here"
              aria-label="Search content"
              className="peer relative  w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              aria-label="Search icon"
              role="graphics-symbol"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <div className="mt-5">
              <div className="relative my-6 ">
                <select
                  id="id-04"
                  name="id-04"
                  required
                  className="peer relative w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                >
                  <option value="" disabled selected></option>
                  <option value="1">Low To High</option>
                  <option value="2">High To Low</option>
                </select>
                <label className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                  Select an option
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
          <div className="md:w-[70%]">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
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
