import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UsersList from "../components/UsersList";
import ProductsList from "../components/ProductsList";
import UserDetails from "../components/UserDetails";
import Login from "../pages/Login";

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
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
