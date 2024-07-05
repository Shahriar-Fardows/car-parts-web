import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../Components/Log/Login/Login";
import SignUp from "../Components/Log/SignUp/SignUp";
import Category from "../Shared/Navbar/NavCategory/Category";
import Profile from "../Layout/Profile/Profile";
import PrivateRoute from "./PrivetRoutes";
import SubCategory from "../Components/SubCategory/SubCategory";
import SubCategoryDetails from "../Components/SubCategoryDetails/SubCategoryDetails";
import AdminPanel from "../AdminPanel/AdminPanel";
import Admin from "../AdminPanel/Admin";
import AdminDashboard from "../AdminPanel/AdminDashboard";
import Cart from "../Components/Cart/Cart";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:category",
        element: <Category />,
      },
      {
        path: "/sub/:category",
        element: <SubCategory />,
      },
      {
        path: "/details/:id",
        element: <SubCategoryDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/admin",
        element: <AdminPanel/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/admin-dashboard",
        element: <AdminDashboard/>
      },
      {
        path: "/admin/admin-home",
        element: <div className="md:max-w-sm lg:max-w-screen-md mx-auto mt-36 px-6">hi this is admin </div>
      },
      
    ]
  }
]);

export default Routes;
