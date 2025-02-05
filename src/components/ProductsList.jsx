import { useQuery } from "@tanstack/react-query";
import SectionTitle from "./SectionTitle";
import axios from "axios";

const ProductsList = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://api.restful-api.dev/objects");
      return data;
    },
  });

  console.log(products);

  if (isLoading) {
    return <div className="text-center font-bold h-screen">Loading ...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <SectionTitle heading="All Products"></SectionTitle>
    </div>
  );
};

export default ProductsList;
