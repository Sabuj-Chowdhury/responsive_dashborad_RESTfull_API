import { useContext, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaProductHunt, FaUsers } from "react-icons/fa";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
  IoMdAddCircle,
} from "react-icons/io";
import { MdLogin, MdOutlineMyLocation } from "react-icons/md";
import { NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const [isCollapse, setIsCollapse] = useState(false); //state for collapsing the side bar
  //   function for collapsing the side bar
  const toggleSidebar = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <aside
      className={`bg-black text-white h-screen sticky top-0 transition-width duration-300 
        ${isCollapse ? "w-16" : "w-72"}

        `}
    >
      {/* logo/name */}
      <div onClick={toggleSidebar} className="flex items-center justify-center">
        <div className="flex flex-col gap-2 text-center p-3">
          <h2 className={`  text-3xl text-center ${isCollapse && "hidden"}`}>
            Dashboard
          </h2>
          {user && (
            <div
              className={`flex justify-center items-center gap-2 ${
                isCollapse && "hidden"
              }`}
            >
              <img
                src={user?.photoURL}
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <span className={`${isCollapse && "hidden"} w-max`}>
                {user?.displayName}
              </span>
            </div>
          )}
        </div>
        {/* button(icons) for collapse the sidebar */}
        <button className="text-white p-2 rounded">
          {isCollapse ? (
            <IoIosArrowDroprightCircle size={28} />
          ) : (
            <IoIosArrowDropleftCircle size={28} />
          )}
        </button>
      </div>
      {/* navigation links */}
      <nav className="flex flex-col gap-2 p-4">
        {/* links */}
        <div className="space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded hover:bg-blue-300  ${
                isActive ? "bg-blue-400" : ""
              }`
            }
          >
            <FaUsers size={28} />
            <span className={`${isCollapse && "hidden"}`}>Users</span>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded hover:bg-blue-300 ${
                isActive ? "bg-blue-400" : ""
              }`
            }
          >
            <FaProductHunt size={28} />
            <span className={`${isCollapse && "hidden"}`}> Products</span>
          </NavLink>
          <NavLink
            to="/add-products"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded hover:bg-blue-300 ${
                isActive ? "bg-blue-400" : ""
              }`
            }
          >
            <IoMdAddCircle size={28} />

            <span className={`${isCollapse && "hidden"}`}> Add Product</span>
          </NavLink>

          <NavLink
            to="/my-product"
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded hover:bg-blue-300 ${
                isActive ? "bg-blue-400" : ""
              }`
            }
          >
            <MdOutlineMyLocation size={28} />

            <span className={`${isCollapse && "hidden"}`}> My Product</span>
          </NavLink>
        </div>

        {/* auth button */}

        {user ? (
          <button
            onClick={logOut}
            className="flex items-center gap-4 p-2 rounded hover:bg-blue-300"
          >
            <BiLogOut size={28} />
            <span className={`${isCollapse && "hidden"}`}>Logout</span>
          </button>
        ) : (
          <NavLink
            to="/login"
            className={`flex items-center gap-4 p-2 rounded hover:bg-blue-300 
              }`}
          >
            <MdLogin size={28} />
            <span className={`${isCollapse && "hidden"}`}> Login</span>
          </NavLink>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
