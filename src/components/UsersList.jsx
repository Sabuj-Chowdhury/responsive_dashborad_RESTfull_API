import axios from "axios";
import SectionTitle from "./SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const UsersList = () => {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    },
  });

  console.log(users);

  if (isLoading) {
    return <div className="text-center font-bold h-screen">Loading ...</div>;
  }
  return (
    <div className="max-w-7xl mx-auto p-5">
      <SectionTitle heading="user list"></SectionTitle>
      {/* table */}
      <div className="overflow-x-auto rounded-lg">
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
          {users.map((user, idx) => (
            <tbody key={idx}>
              <th className="border border-gray-200 px-4 py-2">{idx + 1}</th>
              <th className="border border-gray-200 px-4 py-2">{user?.name}</th>
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
    </div>
  );
};

export default UsersList;
