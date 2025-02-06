import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UsersList from "../components/UsersList";
import ProductsList from "../components/ProductsList";
import UserDetails from "../components/UserDetails";
import Login from "../pages/Login";
// import AddProduct from "../components/AddProduct";
import MyProduct from "../pages/MyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
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
