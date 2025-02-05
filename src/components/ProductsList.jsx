import { useQuery } from "@tanstack/react-query";
import SectionTitle from "./SectionTitle";
import axios from "axios";

const ProductsList = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://api.restful-api.dev/objects");
      return data;
    },
  });

  // console.log(products);

  if (isLoading) {
    return <div className="text-center font-bold h-screen">Loading ...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <SectionTitle heading="All Products"></SectionTitle>
      {/* table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="table-auto w-max md:min-w-5xl mx-auto border border-gray-300 text-center">
          <thead className="bg-teal-600 text-white border-b border-gray-300">
            <tr>
              <th className="px-4 py-2 border border-gray-200">#</th>
              <th className="px-4 py-2 border border-gray-200">Name</th>
              <th className="px-4 py-2 border border-gray-200">
                Specifications
              </th>
              <th className="px-4 py-2 border border-gray-200">Price</th>
            </tr>
          </thead>
          {products.map((product, idx) => (
            <tbody key={idx}>
              <th className="border border-gray-200 px-4 py-2">{idx + 1}</th>
              <th className="border border-gray-200 px-4 py-2">
                {product?.name}
              </th>
              {product?.data ? (
                <th className="border border-gray-200 px-4 py-2">
                  {(product?.data?.color || product?.data?.Color) && (
                    <span>
                      Color: {product?.data?.color || product?.data?.Color},
                    </span>
                  )}

                  {(product?.data?.Generation || product?.data?.generation) && (
                    <span>
                      Gen:{" "}
                      {product?.data?.Generation || product?.data?.generation},
                    </span>
                  )}

                  {(product?.data?.capacity || product?.data?.Capacity) && (
                    <span>
                      capacity:{" "}
                      {product?.data?.capacity || product?.data?.Capacity},
                    </span>
                  )}

                  {product?.data?.year && (
                    <span>Year:{product?.data?.year},</span>
                  )}
                  {product?.data?.["CPU model"] && (
                    <span>CPU model:{product?.data?.["CPU model"]},</span>
                  )}
                  {/* Hard disk size */}
                  {product?.data?.["Hard disk size"] && (
                    <span>
                      Hard disk size:{product?.data?.["Hard disk size"]},
                    </span>
                  )}
                  {/* Strap Colour */}
                  {product?.data?.["Strap Colour"] && (
                    <span>Strap Colour:{product?.data?.["Strap Colour"]},</span>
                  )}
                  {/* Case Size */}
                  {product?.data?.["Case Size"] && (
                    <span>Case Size:{product?.data?.["Case Size"]},</span>
                  )}
                  {/* Description */}
                  {product?.data?.Description && (
                    <span>Description:{product?.data?.Description},</span>
                  )}
                  {/* Screen size */}
                  {product?.data?.["Screen size"] && (
                    <span>Screen size:{product?.data?.["Screen size"]},</span>
                  )}
                </th>
              ) : (
                <th className="border border-gray-200 px-4 py-2">
                  Not available
                </th>
              )}

              <th className="border border-gray-200 px-4 py-2">
                {product?.data?.price || product?.data?.Price ? (
                  <span>${product?.data?.price || product?.data?.Price}</span>
                ) : (
                  "Not Available"
                )}
              </th>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
