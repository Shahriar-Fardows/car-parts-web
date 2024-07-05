import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";

const Product = () => {
  const axios = useAxios();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("/sub-category")
      .then((res) => {
        setUser(res?.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios]);
  return (
    <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-36 lg:px-12 px-6">
      <section>
        <div className="flex justify-between items-center gap-3 px-7">
          <h1 className="text-3xl font-bold ">All Sub Category</h1>
          <div>
            <NavLink
              to={`/dashboard/update`}
              className="flex gap-2 justify-center items-center border bg-[#3761bf] hover:bg-[#10327c] rounded-lg p-2 text-white "
            >
              <FaEdit className="text-xl " />
              Add
            </NavLink>
          </div>
        </div>
        {/* table for shoe data */}
        <div className="mt-8">
          <div className="p-6 overflow-scroll px-0">
            <table className="mt-4 w-full table-auto text-left">
              <thead>
                <tr>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                      #
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                      Photo
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                      Name
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                      Price
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                      Action
                    </p>
                  </th>

                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                      Action
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {user.map((table, idx) => {
                  return (
                    <tr key={table._id}>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div>
                          <p>{idx + 1}</p>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div>
                          <img
                            src={
                              table.image ||
                              "https://i.ibb.co/k8h5CJg/user-2935527-1280.png"
                            }
                            alt="John Michael"
                            className="inline-block relative object-cover object-center !rounded-full w-9 h-9"
                          />
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p>{table.name}</p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p>{table.price}$</p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50 text-center">
                        <div>
                          <NavLink
                            to={`/dashboard/update/${table._id}`}
                            className="flex gap-2 justify-center items-center border bg-[#3761bf] hover:bg-[#10327c] rounded-lg p-2 text-white "
                          >
                            <FaEdit className="text-xl " />
                            Edit
                          </NavLink>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div>
                          <button className="p-2 border rounded-lg  bg-[#3761bf] hover:bg-[#10327c]">
                            <MdOutlineDeleteOutline className="text-2xl text-white" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
