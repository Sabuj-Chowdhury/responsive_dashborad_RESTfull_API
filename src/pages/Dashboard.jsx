import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar></Sidebar>
      {/* outlet */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
