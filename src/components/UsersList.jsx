import axios from "axios";
import SectionTitle from "./SectionTitle";
import { useQuery } from "@tanstack/react-query";

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
    </div>
  );
};

export default UsersList;
