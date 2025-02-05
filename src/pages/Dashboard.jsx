import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div>
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
