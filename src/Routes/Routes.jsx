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
            element: <SubCategory/>
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
            path: "/profile",
            element: <PrivateRoute><Profile /></PrivateRoute>,
          },
            
        ],
      },
]);

export default Routes;
