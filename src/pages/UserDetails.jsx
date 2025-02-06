import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const UserDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const { data: userDetails = {}, isLoading } = useQuery({
    queryKey: ["userDetails", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return data;
    },
  });

  if (isLoading) {
    return <div className="text-center font-bold h-screen">Loading ...</div>;
  }
  return (
    <div className="max-w-7xl mx-auto p-5">
      <SectionTitle heading="user details" />
      <div className="mt-5 md:mt-10 flex justify-center">
        <div className="bg-gray-900 shadow-xl rounded-lg max-w-4xl w-full border  p-6 text-white">
          <div className="text-lg">
            <p>
              <span className="font-semibold">Name:</span> {userDetails.name}
            </p>
            <p>
              <span className="font-semibold">Username:</span>{" "}
              {userDetails.username}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {userDetails.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {userDetails.phone}
            </p>
          </div>

          {/* address */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-amber-300">Address</h3>
            <p className="text-lg">
              {userDetails.address.street}, {userDetails.address.suite},{" "}
              {userDetails.address.city}, {userDetails.address.zipcode}
            </p>
            <p className="text-sm text-gray-400">
              Geo: {userDetails.address.geo.lat}, {userDetails.address.geo.lng}
            </p>
          </div>

          {/* company */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-amber-300">Company</h3>
            <p className="text-lg">{userDetails.company.name}</p>
            <p className="italic text-gray-300">
              {userDetails.company.catchPhrase}
            </p>
            <p className="text-sm text-gray-400">{userDetails.company.bs}</p>
          </div>

          {/* website */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-amber-300">Website</h3>
            <a href={userDetails.website} className="text-amber-400 underline">
              {userDetails.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
