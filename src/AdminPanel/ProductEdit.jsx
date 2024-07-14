import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const imgageBBAPI = "957628e55aa3b5dfacc5f5a22107ba39";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgageBBAPI}`;

const ProductEdit = () => {
  const axios = useAxios();
  const [user, setUser] = useState([]);
  const [user2, setUser2] = useState([]);
  const [user3, setUser3] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchItems();
    fetchItems2();
    fetchItems3();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("/category");
    setUser(response.data);
  };
  const fetchItems2 = async () => {
    const response = await axios.get("/category");
    setUser2(response.data);
  };
  const fetchItems3 = async () => {
    const response = await axios.get(`/sub-categories/${id}`);
    setUser3(response.data);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.photo[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res?.data?.success) {
      const url = res.data?.data?.display_url;
      const info = {
        name: data.name,
        image: [`${url},${url},${url},${url}`],
        category: data.category,
        subCategory: data.subCategory,
        features: data.features,
        brand: data.brand,
        Part_number: data.part_number,
        warranty: data.warranty,
        price: data.price,
        description: data.description,
        warning: data.warning,
        color: data.color,
        shortDescription: data.shortDescription,
        SKU: data.SKU,
      };
      const result = await axios.patch(`/update-subCategory/${user3._id}`,info);
      if (result.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          title: "Success",
          text: `${name} is updated successfully`,
          icon: "success",
        });
      }
      
    }
  };

  const {
    category,
    subCategory,
    name,
    image,
    features,
    brand,
    Part_number,
    warranty,
    price,
    description,
    warning,
    color,
    shortDescription,
    SKU,
  } = user3 || {};


  return (
    <div className="">
      <section className="p-3 pb-8">
        <h1 className="text-center font-bold text-2xl mt-3 border-l-4 border-[#3761bf]">
          Add Product{" "}
        </h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-12 p-2">
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Product Name
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  id="name" defaultValue={name}
                  autoComplete="text"
                />
                {errors.name && (
                  <p className="text-red-600">name is Required</p>
                )}
              </div>
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Brand Name
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  {...register("brand", { required: true })}
                  placeholder="Brand Name"
                  id="brand" defaultValue={brand}
                  autoComplete="text"
                />
                {errors.brand && (
                  <p className="text-red-600">Brand is Required</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 p-2">
              <div className="mt-4 md:flex-[50%] ">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category
                </label>
                <select 
                  className="w-full bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block appearance-none"
                  {...register("category")}
                >
                  <option selected={category} defaultValue={category}>Select category</option>
                  {user.map((item) => (
                    <option key={item._id} value={item.category}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-600">Name is Required</p>
                )}
              </div>
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Car Photo
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="file"
                  {...register("photo", { required: true })}
                  id="photo"
                  name="photo" defaultValue={image}
                />
                {errors.photo && (
                  <p className="text-red-600">Photo is Required</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 p-2">
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  warranty
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  {...register("warranty", { required: true })}
                  placeholder="warranty"
                  id="warranty" defaultValue={warranty}
                  autoComplete="text"
                />
                {errors.age && (
                  <p className="text-red-600">warranty is Required</p>
                )}
              </div>
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Part Number
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  {...register("part_number", { required: true })}
                  placeholder="Part Number"
                  id="part_number" defaultValue={Part_number}
                  autoComplete="text"
                />
                {errors.location && (
                  <p className="text-red-600">Part Number is Required</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 p-2">
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Features
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  {...register("features", { required: true })}
                  placeholder="features"
                  id="features" defaultValue={features}
                  autoComplete="text"
                />
                {errors.features && (
                  <p className="text-red-600">features is Required</p>
                )}
              </div>
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  subCategory
                </label>
                <select
                  className="w-full bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block appearance-none"
                  {...register("subCategory")}
                >
                  <option value="Select Category" defaultValue={subCategory} >
                    Select Category
                  </option>
                  {user2.map((item) => (
                    <option key={item._id} value={item.category}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {errors.subCategory && (
                  <p className="text-red-600">sub Category is Required</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 p-2">
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  {...register("description", { required: true })}
                  placeholder="description"
                  id="description" defaultValue={description}
                  autoComplete="text"
                />
                {errors.description && (
                  <p className="text-red-600">description is Required</p>
                )}
              </div>
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="price"
                  id="price" defaultValue={price}
                  autoComplete="number"
                />
                {errors.color && (
                  <p className="text-red-600">price is Required</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 p-2">
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Warning
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  {...register("warning", { required: true })}
                  placeholder="warning"
                  id="warning" defaultValue={warning}
                  autoComplete="text"
                />
                {errors.size && (
                  <p className="text-red-600">warning is Required</p>
                )}
              </div>
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Color
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  {...register("color", { required: true })}
                  placeholder="color"
                  id="color" defaultValue={color}
                  autoComplete="text"
                />
                {errors.size && (
                  <p className="text-red-600">color is Required</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 p-2">
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Short Description
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  {...register("shortDescription", { required: true })}
                  placeholder="Short Description"
                  id="shortDescription" defaultValue={shortDescription}
                  autoComplete="text"
                />
                {errors.size && (
                  <p className="text-red-600">short description is Required</p>
                )}
              </div>
              <div className="mt-4 md:flex-[50%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  SKU
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  {...register("SKU", { required: true })}
                  placeholder="SKU"
                  id="SKU" defaultValue={SKU}
                  autoComplete="text"
                />
                {errors.size && <p className="text-red-600">SKU is Required</p>}
              </div>
            </div>
            <div className="mt-8 ">
              <button
                type="submit"
                className=" text-white  bg-[#3761bf] hover:bg-[#10327c] rounded-lg font-bold py-2 px-4 w-full"
              >
                Added Product
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ProductEdit;
