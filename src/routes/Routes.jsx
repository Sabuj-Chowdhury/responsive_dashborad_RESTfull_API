import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UsersList from "../pages/UsersList";
import UserDetails from "../pages/UserDetails";
import ProductsList from "../pages/ProductsList";
import MyProduct from "../pages/MyProduct";
import Login from "../pages/Login";
// import AddProduct from "../components/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <UsersList />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
      {
        path: "/products",
        element: <ProductsList />,
      },
      // for adding products
      // {
      //   path: "/add-products",
      //   element: <AddProduct />,
      // },
      {
        path: "/my-product",
        element: <MyProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
