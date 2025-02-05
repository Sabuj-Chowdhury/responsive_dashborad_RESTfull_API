import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UsersList from "../components/UsersList";
import ProductsList from "../components/ProductsList";
import UserDetails from "../components/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/users",
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
    ],
  },
]);

export default router;
