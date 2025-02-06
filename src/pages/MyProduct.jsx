import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
import SectionTitle from "../components/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const MyProduct = () => {
  const {
    data: myProduct,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProduct"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.restful-api.dev/objects/ff808181932badb60194da54113b585f`
      );
      return data;
    },
  });

  // Delete product
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://api.restful-api.dev/objects/ff808181932badb60194da54113b585f`
      );
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCustomDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
        Swal.fire({
          title: "Deleted!",
          text: "Product has successfully been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (isLoading) {
    return <div className="text-center font-bold h-screen">Loading ...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-5">
      <SectionTitle heading="My Product" />
      {myProduct && myProduct.name ? (
        <div className="mt-5 md:mt-10 flex justify-center">
          <div className="bg-gray-900 shadow-xl rounded-lg max-w-4xl w-full border p-6 text-white">
            <div className="text-lg text-center p-10">
              <p>
                <span className="font-semibold">Product Name:</span>{" "}
                {myProduct.name}
              </p>
              <p>
                <span className="font-semibold">Color:</span>{" "}
                {myProduct?.data?.color}
              </p>
              <p>
                <span className="font-semibold">Price: $</span>{" "}
                {myProduct?.data?.price}
              </p>
              <p>
                <span className="font-semibold">Capacity:</span>{" "}
                {myProduct?.data?.capacity}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={handleCustomDelete}
                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded cursor-pointer w-max"
              >
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg font-semibold mt-10">
          No product to show at the moment
        </div>
      )}
    </div>
  );
};

export default MyProduct;
