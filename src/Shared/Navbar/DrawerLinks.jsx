import { NavLink } from "react-router-dom";
// import './NavDrawer.css'
import { SlArrowRight } from "react-icons/sl";
import logo from "../../../public/logo_image.jpg";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
const DrawerLinks = () => {
  // const [loading, setLoading] = useState(false);
  const [categoryData, setCategory] = useState([]);

  const axios = useAxios();

  useEffect(() => {
    axios
      .get("/category")
      .then((res) => {
        setCategory(res?.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios]);

  return (
    <ul
      role="list"
      className="divide-y z-50 overflow-x-auto divide-gray-200 dark:divide-gray-700"
    >
      {categoryData?.map((item) => {
        return (
          <li key={item._id} className="w-[100%]">
            <NavLink
              to={`/category/${item.category}`}
              className="text-gray-900 md:text-[12px] dark:text-white hover:underline"
            >
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={logo}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-gray-900 md:text-[12px] dark:text-white hover:underline">
                    {item.name}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <SlArrowRight />
                </div>
              </div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default DrawerLinks;
