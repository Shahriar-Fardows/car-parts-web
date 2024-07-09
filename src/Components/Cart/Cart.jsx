/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useAuthProvider from "../../Hooks/useAuthProvider";
import { FaArrowRightLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const Cart = () => {
  const axios = useAxios();
  const { user } = useAuthProvider();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get(`/all-cart?=${user?.email}`);
    setData(response.data);
  };

  const totalPrice = data?.reduce((pre, sum) => (pre +( sum.price * sum.quantity)), 0);
  const mainPrice = (totalPrice).toFixed(2);
  // console.log(data);

  // handleDelete
  const handleDelete = async (id) => { 
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
        const res = await axios.delete(`/delate-cart/${id}`);
        if (res.data.deletedCount > 0) {
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


  return (
    <div className="max-w-screen-xl mx-auto mt-6 px-4">
      <h1 className="text-center text-3xl font-bold ">All cart Products :</h1>
      <div
        className={`h-96 overflow-y-scroll mt-5`}
      >
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="text-sm text-blue-gray-900 font-bold leading-none opacity-70">
                  #
                </p>
              </th>
              <th className="cursor-pointer border-y  border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="text-sm text-blue-gray-900  leading-none opacity-70 font-bold">
                  Product Image
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                  Product Name
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                  Product Quantity
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                  Product Price
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                  Total Price
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                  Action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((table, idx) => {
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
                        className="size-32 border rounded-lg"
                        src={table.image}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p>{table.name}</p>
                  </td>
                  <td className="p-4 border-b font-bold border-blue-gray-50">
                    <p>{table.quantity}</p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-bold">{table.price} $</p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="font-bold">{table.price * table.quantity} $</p>
                  </td>
                  <td
                    onClick={() => handleDelete(table._id)}
                    className="p-4 border-b border-blue-gray-50"
                  >
                    <button className="flex w-12 items-center text-white justify-center bg-red-500 p-1 rounded-lg cursor-pointer hover:bg-red-700">
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-12 md:flex justify-between items-center text-center ">
        <div className="md:flex items-center">
          <input
            type="text"
            className="border border-black p-3 text-red-500 rounded-md"
            placeholder="Coupon Code"
          />
          <div className="mt-12 md:mt-0">
            <button
              // onClick={handleApply}
              className="border p-3 ml-2 rounded-md px-12 bg-[#ef6f18] text-white font-bold hover:bg-[#a35b2b]"
            >
              Apply
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold uppercase mt-12 md:mt-0">
            Total Price : <span className="text-[#ef6f18]">{mainPrice} $</span>
          </h1>
        </div>
        <div className="flex items-center justify-center mt-12 md:mt-0">
          <button
            // onClick={handleApply}
            className="border  p-3 ml-2 rounded-md px-12 bg-[#ef6f18] text-white font-bold hover:bg-[#a35b2b] flex items-center gap-4"
          >
            Purchase All <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
