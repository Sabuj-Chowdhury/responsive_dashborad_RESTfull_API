import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UsersList from "../components/UsersList";
import ProductsList from "../components/ProductsList";

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
        path: "/products",
        element: <ProductsList />,
      },
    ],
  },
]);

export default router;
