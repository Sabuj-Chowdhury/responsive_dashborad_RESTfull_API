// import { useState } from "react";
import axios from "axios";
import SectionTitle from "./SectionTitle";
import toast from "react-hot-toast";

const AddProduct = () => {
  // const [loading,setLoading]= useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const color = form.color.value;
    const capacity = form.capacity.value;
    const price = form.price.value;

    const data = {};

    if (color) data.color = color;
    if (capacity) data.capacity = capacity;
    if (price) data.price = price;
    const productData = {
      id: 16,
      name,
      data: Object.keys(data).length > 0 ? data : null,
    };
    // console.log(productData);
    try {
      const { data } = await axios.post(
        `https://api.restful-api.dev/objects`,
        productData
      );
      console.log(data);
      toast.success("Product Added!");
      // form.reset();
    } catch (err) {
      console.log(err);
    }

    // POST To save the DATA
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <SectionTitle heading="add product"></SectionTitle>
      {/* form */}
      <div className="flex items-center justify-center mt-10">
        <div className="bg-teal-400 md:min-w-md w-max p-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="product name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Product name
              </label>
              {/* email */}
              <input
                name="name"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="Product name .."
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Color
              </label>
              {/* password */}
              <input
                name="color"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="colors"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="capacity"
                className="block text-gray-700 font-semibold mb-2"
              >
                Capacity
              </label>
              {/* password */}
              <input
                name="capacity"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="capacity"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="price"
                className="block text-gray-700 font-semibold mb-2"
              >
                Price
              </label>
              {/* password */}
              <input
                name="price"
                type="number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="price"
              />
            </div>

            <div>
              <button className="px-3 py-3 rounded bg-indigo-200 hover:bg-indigo-300 cursor-pointer w-full">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
