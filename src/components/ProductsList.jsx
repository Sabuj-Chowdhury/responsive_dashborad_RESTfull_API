import { useQuery } from "@tanstack/react-query";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
// import Swal from "sweetalert2";
const ProductsList = () => {
  const [search, setSearch] = useState("");
  const [sortData, setSortData] = useState("");

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://api.restful-api.dev/objects");
      return data;
    },
  });

  // search result using filter method
  let searchResult = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // sorting applicable only when clicked on sorting options
  if (sortData === "name") {
    searchResult = searchResult.sort((productA, productB) =>
      productA.name.localeCompare(productB.name)
    );
  }

  // resets every inputs
  const handleReset = () => {
    setSearch("");
    setSortData("");
  };

  // Delete product
  const handleDelete = async (id) => {
    console.log(id);
    try {
      // api call to delete
      await axios.delete(`https://api.restful-api.dev/objects/${id}`);

      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  // const handleCustomDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       handleDelete(id);
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Product has successfully been deleted.",
  //         icon: "success",
  //       });
  //     }
  //   });
  // };

  // console.log(products);

  if (isLoading) {
    return <div className="text-center font-bold h-screen">Loading ...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <SectionTitle heading="All Products"></SectionTitle>

      {/* search & sort  */}
      <div className="flex justify-center items-center my-5">
        <div className="flex items-center justify-center gap-2 w-full md:w-7/12 sm:w-auto">
          <select
            onChange={(e) => setSortData(e.target.value)}
            className="bg-white border focus:outline-none border-gray-300  rounded-lg px-4 py-2 md:w-2/12 w-full sm:w-max"
          >
            <option value="">SortBy</option>
            <option value="name">Name</option>
          </select>
          {/* search */}
          <input
            onBlur={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search by name..."
            className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
          />
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

      {searchResult.length === 0 ? (
        <div className="text-center font-bold text-xl mt-5">
          No product found!
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg">
          {/* table */}
          <table className="table-auto w-max md:min-w-5xl mx-auto border border-gray-300 text-center">
            <thead className="bg-teal-600 text-white border-b border-gray-300">
              <tr>
                <th className="px-4 py-2 border border-gray-200">#</th>
                <th className="px-4 py-2 border border-gray-200">Name</th>
                <th className="px-4 py-2 border border-gray-200">
                  Specifications
                </th>
                <th className="px-4 py-2 border border-gray-200">Price</th>
                <th className="px-4 py-2 border border-gray-200">Action</th>
              </tr>
            </thead>
            {searchResult.map((product, idx) => (
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

                    {(product?.data?.Generation ||
                      product?.data?.generation) && (
                      <span>
                        Gen:{" "}
                        {product?.data?.Generation || product?.data?.generation}
                        ,
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
                      <span>
                        Strap Colour:{product?.data?.["Strap Colour"]},
                      </span>
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
                <th className="border border-gray-200 px-4 py-2">
                  <button
                    onClick={() => handleDelete(product?.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded cursor-pointer w-max"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </th>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
