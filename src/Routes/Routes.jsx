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
import Cart from "../Components/Cart/Cart";
import AdminDashboard from "../AdminPanel/AdminDashboard";
import UserList from "../AdminPanel/UserList";
import AdminCategory from "../AdminPanel/AdminCategory";
import AdminSubCategory from "../AdminPanel/AdminSubCategory";
import Product from "../AdminPanel/Product";
import CategoryAdded from "../AdminPanel/CategoryAdded";
import AddedProduct from "../AdminPanel/AddedProduct";
import ProductEdit from "../AdminPanel/ProductEdit";

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
        path: "/admin/user-list",
        element: <UserList/>
      },
      {
        path: "/admin/category",
        element: <AdminCategory/>
      },
      {
        path: "/admin/category-added",
        element: <CategoryAdded/>
      },
      {
        path: "/admin/sub-category",
        element: <AdminSubCategory/>
      },
      {
        path: "/admin/product",
        element: <Product/>
      },
      {
        path: "/admin/product-edit/:id",
        element: <ProductEdit/>
      },
      {
        path: "/admin/added-product",
        element: <AddedProduct/>
      },
      
    ]
  }
]);

export default Routes;
