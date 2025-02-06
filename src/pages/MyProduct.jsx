import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../components/SectionTitle";
import axios from "axios";

const MyProduct = () => {
  const { data: myProduct = {}, isLoading } = useQuery({
    queryKey: ["myProduct"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.restful-api.dev/objects/ff808181932badb60194d9e730a35732`
      );
      return data;
    },
  });

  //   console.log(myProduct);

  if (isLoading) {
    return <div className="text-center font-bold h-screen">Loading ...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-5">
      <SectionTitle heading="My Product"></SectionTitle>

      <div className="mt-5 md:mt-10 flex justify-center">
        <div className="bg-gray-900 shadow-xl rounded-lg max-w-4xl w-full border  p-6 text-white">
          <div className="text-lg text-center p-10">
            <p>
              <span className="font-semibold">Product Name:</span>
              {myProduct.name}
            </p>
            <p>
              <span className="font-semibold">Color:</span>
              {myProduct?.data?.color}
            </p>
            <p>
              <span className="font-semibold">Price: $</span>
              {myProduct?.data?.price}
            </p>
            <p>
              <span className="font-semibold">Capacity:</span>
              {myProduct?.data?.capacity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
