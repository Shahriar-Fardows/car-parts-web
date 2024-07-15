import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const CategoryAdded = () => {
  const axios = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const info = {
      name: data.name,
      category: data.category,
    };
    const res = await axios.post(`/add-category`, info);
    if (res.data.acknowledged) {
      Swal.fire({
        title: "Added category !!!",
        text: "Added category successfully",
        icon: "success",
      });
      reset();
    }
  };
  return (
    <section className="">
      <h1 className="text-center font-bold text-2xl mt-3 border-l-4 border-[#3761bf]">
        Added category{" "}
      </h1>
      <div className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row  gap-8 p-2">
            <div className="mt-4 md:flex-[50%]">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                id="name"
                autoComplete="text"
              />
              {errors.name && <p className="text-red-600">name is Required</p>}
            </div>
            <div className="mt-4 md:flex-[50%]">
              <label className="block text-sm font-bold mb-2">Category</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("category", { required: true })}
                placeholder="category"
                id="category"
                autoComplete="text"
              />
              {errors.category && (
                <p className="text-red-600">Category is Required</p>
              )}
            </div>
          </div>
          <div className="mt-8 ">
            <button
              type="submit"
              className=" text-white bg-[#3761bf] hover:bg-[#10327c] rounded-lg font-bold py-2 px-4 w-full"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CategoryAdded;
