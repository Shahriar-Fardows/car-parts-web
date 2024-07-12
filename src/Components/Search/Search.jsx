/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [subCat, setSubCat] = useState([]);

  const axios = useAxios();

  useEffect(() => {
    if (search !== "") {
      axios
        .get(`/sub-category?name=${search}`)
        .then((res) => {
          setSubCat(res?.data);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [search, axios]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="col-span-2 lg:mr-[8rem]  hidden md:block">
      <div className="max-w-md mx-auto">
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
            onChange={handleChange}
            type="search"
            id="default-search"
            name="search"
            className="block w-[100%] lg:w-[30vw] h-[6vh] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          {search == "" ? (
            ""
          ) : (
            <div className="absolute p-4 top-12 z-50 w-full shadow-xl bg-white rounded-xl overflow-y-scroll h-[300px]">
              {subCat.map((item) => (
                <div key={item._id}>
                  <Link
                    to={`/details/${item._id}`}
                    className="flex items-center font-semibold p-4 hover:border rounded-lg hover:bg-slate-200"
                  >
                    <img className="w-12" src={item.image} alt="" />
                    <p>{item.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
