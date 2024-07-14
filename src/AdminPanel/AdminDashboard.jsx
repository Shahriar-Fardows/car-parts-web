/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";

const AdminDashboard = () => {
  const axios = useAxios();

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("/status");
    setUser(response.data);
  };

  return (
    <div className="">
      <div className=" mx-auto">
        <div className=" rounded-3xl p-8 mb-5">
          <h1 className="text-3xl font-bold mb-10">
            Welcome to Pet Match Adoption
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-stretch">
              <div className="text-gray-400 text-xs">Members</div>
              <div className=" border-l mx-4"></div>
              <div className="flex flex-nowrap -space-x-3">
                <div className="h-9 w-9">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://ui-avatars.com/api/?background=random"
                  />
                </div>
                <div className="h-9 w-9">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://ui-avatars.com/api/?background=random"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <button
                type="button"
                className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
              >
                Open
              </button>
            </div>
          </div>
          <div className="grid gap-x-20">
            <div className="">
              <h2 className="text-2xl font-bold mb-4">Stats</h2>

              <div className="gap-4 ">
                <div className="space-y-5 ">
                  <div className="p-4 bg-green-100 rounded-xl flex">
                    <div className="font-bold text-xl text-gray-800 leading-none">
                      Good day
                      <div className="mt-5">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                        >
                          Start tracking
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-pink-300 rounded-xl text-gray-800">
                    <div className="font-bold text-2xl leading-none">
                      {user.product}
                    </div>
                    <div className="mt-2 font-bold">All Products</div>
                  </div>
                  <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                    <div className="font-bold text-2xl leading-none">
                      {user.SubCategory}
                    </div>
                    <div className="mt-2 font-bold">All Sub Category</div>
                  </div>
                  <div className="p-4 bg-pink-100 rounded-xl text-gray-800">
                    <div className="font-bold text-2xl leading-none">
                      {user.category}
                    </div>
                    <div className="mt-2 font-bold">All Category</div>
                  </div>
                  <div className="p-4 bg-slate-400 rounded-xl text-gray-800">
                    <div className="font-bold text-2xl leading-none">
                      {user.user}
                    </div>
                    <div className="mt-2 font-bold">All User</div>
                  </div>
                  <div className="col-span-2">
                    <div className="p-4 bg-green-100 rounded-xl text-gray-800">
                      <div className="font-bold text-xl leading-none">
                        Your daily plan
                      </div>
                      <div className="mt-2 font-bold">Stay With US</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 mt-8">
                  Your tasks today
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                    <div className="flex justify-between">
                      <div className="text-gray-400 text-xs">Number 10</div>
                      <div className="text-gray-400 text-xs">4h</div>
                    </div>
                    <a className="font-bold hover:text-yellow-800 hover:underline">
                      Donation Campaigns
                    </a>
                    <div className="text-sm text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-gray-800 inline align-middle mr-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                      Deadline is today
                    </div>
                  </div>
                  <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                    <div className="flex justify-between">
                      <div className="text-gray-400 text-xs">Grace Aroma</div>
                      <div className="text-gray-400 text-xs">7d</div>
                    </div>
                    <a className="font-bold hover:text-yellow-800 hover:underline">
                      New campaign review
                    </a>
                    <div className="text-sm text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="text-gray-800 inline align-middle mr-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                      New feedback
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
