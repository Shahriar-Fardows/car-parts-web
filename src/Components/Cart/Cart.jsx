import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useAuthProvider from "../../Hooks/useAuthProvider";

const Cart = () => {
  const axios = useAxios();
  const { user } = useAuthProvider();
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get(`/all-cart?=${user?.email}`);
    setData(response.data);
  };

  // console.log(data);

  const handleMinusBtn = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const handlePlusBtn = () => {
    setNumber(number + 1);
  };

  return (
    <div className="mt-8 max-w-screen-xl mx-auto px-4 bg-[#f9f9f9]">
      <div className="flex flex-col lg:flex-row gap-3 mt-12">
        <div className="lg:w-[70%] ">
          <div className=" overflow-x-auto">
            <table className=" w-full min-w-max table-auto text-left ">
              <thead>
                <tr>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900 font-bold leading-none opacity-70">
                      No
                    </p>
                  </th>
                  <th className="cursor-pointer border-y  border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  leading-none opacity-70 font-bold">
                      PRODUCT
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                      PRICE
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                      QUANTITY
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                      SUBTOTAL
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id}>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div>
                        <p>1</p>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex items-center gap-3">
                        <img
                          className="size-16 border rounded-lg"
                          src={item.image}
                          alt=""
                        />
                        <p className="font-semibold ">{item.name}</p>
                      </div>
                    </td>

                    <td className="p-4 border-b border-blue-gray-50">
                      {" "}
                      <p>{item.price} $</p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="font-bold flex items-center cursor-pointer">
                        <p
                          onClick={handleMinusBtn}
                          className="border text-xl p-1 rounded-s-full px-3"
                        >
                          -
                        </p>

                        <p className="border text-xl p-1  px-3">{number}</p>
                        <p
                          onClick={handlePlusBtn}
                          className="border text-xl py-1 rounded-r-full px-3"
                        >
                          +
                        </p>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="text-xl text-[#db3a87]">350৳ </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr className="mt-8" />
          <div className="mt-8 flex flex-col-reverse gap-6 lg:flex-row justify-between items-center">
            <div className="flex gap-4 items-center">
              <input
                className="border rounded-full py-2 px-4"
                type="text"
                name=""
                id=""
                placeholder="Coupon Code"
              />
              <button className="py-2 px-6 bg-red-500 hover:bg-red-800 font-bold text-white rounded-full text-sm">
                APPLY COUPON
              </button>
            </div>
            <div>
              <button className="py-2 px-6 bg-red-400 hover:bg-red-800 font-bold text-white rounded-full text-sm">
                UPDATE CART
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] bg-white border-2 rounded p-5">
          <h1 className="text-2xl font-semibold">CART TOTALS</h1>
          <div className="flex items-center justify-between mt-6">
            <p className="font-semibold text-xl">Subtotal </p>
            <p className="font-bold">350৳</p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="font-semibold text-xl">Shipping</p>
            <div className="flex flex-col gap-3">
              <p>Delivery Charge (Free)</p>
              <p className="text-[#77777]">
                Shipping to <span className="font-bold">Kishoreganj.</span>
              </p>
              <p className="text-[#db3a87] text-xl font-semibold">
                Change address
              </p>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="mt-5 flex items-center justify-between">
            <p className="font-semibold text-xl">Total</p>
            <p className="text-xl font-semibold text-[#db3a87]">350৳ </p>
          </div>
          <div className="bg-red-500 hover:bg-red-800 rounded-full text-center p-2 mt-6">
            <button className="text-white text-sm font-bold">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
