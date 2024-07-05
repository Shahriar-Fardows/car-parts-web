import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAuthProvider from "../Hooks/useAuthProvider";
// import { NavLink } from "react-router-dom";
// import { FaEdit } from "react-icons/fa";

const UserList = () => {
  const axios = useAxios();
  //   const [user, setUser] = useState([]);
  const [items, setItems] = useState([]);
  const { deleted } = useAuthProvider();

  //   useEffect(() => {
  //     axios
  //       .get("/user-list")
  //       .then((res) => {
  //         setUser(res?.data);
  //         // console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [axios]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("/user-list");
    setItems(response.data);
  };

  const handleDelete = (table) => {
    console.log(table);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`/user-deleted/${table._id}`);
        // console.log(res);
        if (res.data.deletedCount > 0) {
          deleted();
          fetchItems();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  // console.log(user);

  return (
    <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-36 lg:px-12 px-6">
      <section>
        <h1 className="text-3xl font-bold ">All User</h1>
        {/* table for shoe data */}
        <div>
          <div className="p-6 overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
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
                      Email
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                      Role
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
                {items.map((table, idx) => {
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
                        <p>{table.email}</p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p>{table.role}</p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div onClick={() => handleDelete(table)}>
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

export default UserList;
