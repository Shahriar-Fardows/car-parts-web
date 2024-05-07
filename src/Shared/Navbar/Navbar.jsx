import logo from "../../../public/logo.png";
import { useEffect, useState } from "react";
import "./NavDrawer.css";
import NavDrawer from "./NavDrawer";
import { Link, NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Search from "../../Components/Search/Search";
import Vehicle from "../../Components/VehicleSelect/Vehicle";
// import Loading from "../Loading/Loading";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [loading , setLoading] = useState(false)
  // const [categoryData, setCategory] = useState([]);

  // useEffect(() => {
  //   setLoading(true)
  //   fetch(`https://carid-project-server.vercel.app/api/v1/category`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCategory(data)
  //       setLoading(false)
  //     });
  // }, []);

  // if (loading) return <Loading />;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navLink = (
    <>
      <li>
        <NavLink
          className="text-gray-900  dark:text-white hover:underline"
          aria-current="page"
        >
          Parts
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-900  dark:text-white hover:underline"
          aria-current="page"
        >
          Wheels & Tires
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-900  dark:text-white hover:underline"
          aria-current="page"
        >
          Exterior
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-900  dark:text-white hover:underline"
          aria-current="page"
        >
          Lighting
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-900  dark:text-white hover:underline"
          aria-current="page"
        >
          Interior
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-900  dark:text-white hover:underline"
          aria-current="page"
        >
          Audio & Electronics
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-900  dark:text-white hover:underline"
          aria-current="page"
        >
          Specialty
        </NavLink>
      </li>
      {/* {categoryData?.map((item) => (
        <li key={item._id}>
          <NavLink
            to={`/category/${item.category}`}
            className="text-gray-900  dark:text-white hover:underline"
            aria-current="page"
          >
            {item.name}
          </NavLink>
        </li>
      ))} */}
    </>
  );

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          {/* menu and logo code  */}

          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="sm:block :hidden ">
              <button
                className="toggle-btn btn btn-square btn-ghost "
                onClick={toggleDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
              <NavDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            </div>
            <Link to="/">
              <img src={logo} className="h-8" alt="Logo" />
            </Link>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </div>

          {/* search bar code  */}

          <Search />

          {/* select your vehicale code  */}

          <div className="sm:hidden md:hidden lg:block">
            <Vehicle />
          </div>

          {/* login page and cart page code  */}
          <div className="flex justify-end items-center  space-x-6 rtl:space-x-reverse">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className=""
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <BsSearch className="text-[1.5rem] block md:hidden" />
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <Search />
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <NavLink to="/login">
              <VscAccount className="text-[1.5rem]" />
            </NavLink>
            <NavLink to="/cart">
              <BsCart3 className="text-[1.5rem]" />
            </NavLink>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700 hidden lg:block ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-around">
            <ul className="  lg:flex lg:flex-row lg:font-medium  lg:gap-[4.5rem] lg:mt-0 lg:space-x-8 lg:rtl:space-x-reverse lg:text-sm  ">
              {navLink}
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700   block lg:hidden   ">
        <Vehicle />
      </nav>
    </div>
  );
};

export default Navbar;
