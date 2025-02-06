import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const UsersList = () => {
  const [search, setSearch] = useState("");
  const [sortData, setSortData] = useState("");

  // fetching the data
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    },
  });

  // search result using filter method
  let searchResult = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // console.log(searchResult);

  // sorting applicable only when clicked on sorting options
  if (sortData === "name") {
    searchResult = searchResult.sort((userA, userB) =>
      userA.name.localeCompare(userB.name)
    );
  } else if (sortData === "city") {
    searchResult = searchResult.sort((userA, userB) =>
      userA.address.city.localeCompare(userB.address.city)
    );
  }

  // resets every inputs
  const handleReset = () => {
    setSearch("");
    setSortData("");
  };

  if (isLoading) {
    return <div className="text-center font-bold h-screen">Loading ...</div>;
  }
  return (
    <div className="max-w-7xl mx-auto p-5">
      <SectionTitle heading="user list"></SectionTitle>
      {/* search & sort  */}
      <div className="flex justify-center items-center my-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full md:w-7/12 sm:w-auto">
          <select
            onChange={(e) => setSortData(e.target.value)}
            className="bg-white border focus:outline-none border-gray-300  rounded-lg px-4 py-2 md:w-2/12 w-full "
          >
            <option value="">SortBy</option>
            <option value="name">Name</option>
            <option value="city">City</option>
          </select>
          {/* search */}
          <input
            onBlur={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search by name..."
            className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
          />
          <div className="space-x-2">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition cursor-pointer">
              Search
            </button>
            <button
              onClick={handleReset}
              className="bg-black text-white px-4 py-2 rounded-r-lg cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {searchResult.length === 0 ? (
        <div className="text-center font-bold text-xl mt-5">No user found!</div>
      ) : (
        <div className="overflow-x-auto rounded-lg">
          {/* table */}
          <table className="table-auto w-full md:min-w-5xl mx-auto border border-gray-300 text-center">
            <thead className="bg-teal-600 text-white border-b border-gray-300">
              <tr>
                <th className="px-4 py-2 border border-gray-200">#</th>
                <th className="px-4 py-2 border border-gray-200">Name</th>
                <th className="px-4 py-2 border border-gray-200">Email</th>
                <th className="px-4 py-2 border border-gray-200">City Name</th>
                <th className="px-4 py-2 border border-gray-200">Action</th>
              </tr>
            </thead>
            {searchResult.map((user, idx) => (
              <tbody key={idx}>
                <th className="border border-gray-200 px-4 py-2">{idx + 1}</th>
                <th className="border border-gray-200 px-4 py-2">
                  {user?.name}
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  {user?.email}
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  {user?.address?.city}
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  <Link to={`/user/${user?.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-3 rounded cursor-pointer w-max">
                      View details
                    </button>
                  </Link>
                </th>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default UsersList;
