import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubCategoryBanner from "../../Shared/SubCategoryBanner/SubCategoryBanner";
import SelectVehicle from "../../Home/SelectVehicle/SelectVehicle";
import SubCategoryCard from "./SubCategoryCard";

const SubCategory = () => {
  const [subCat, setSubCat] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch(`https://carid-project-server.vercel.app/api/v1/sub-category?subCategory=${category}`)
      .then((res) => res.json())
      .then((data) => setSubCat(data));
  }, [category]);

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
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
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
