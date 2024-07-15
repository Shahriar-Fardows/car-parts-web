import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const imgageBBAPI = "957628e55aa3b5dfacc5f5a22107ba39";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgageBBAPI}`;

const AddedSubCategory = () => {
  const axios = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const info = {
    //   name: data.name,
    //   category: data.category,
    // };
    // const res = await axios.post(`/add-category-list`, info);
    // if (res.data.acknowledged) {
    //   Swal.fire({
    //     title: "Added category !!!",
    //     text: "Added category successfully",
    //     icon: "success",
    //   });
    //   reset();
    // }

    const imageFile = { image: data.photo[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res?.data?.success) {
      const url = res.data?.data?.display_url;
      const info = {
        name: data.name,
        image: url,
        category: data.category,
      };
      const result = await axios.post("/add-category-list", info);
      if (result.data.acknowledged) {
        reset();
        Swal.fire({
          title: "Sub Category added !!!",
          text: "Added Sub Category successfully",
          icon: "success",
        });
      }
    }
  };

  return (
    <section className="">
      <h1 className="text-center font-bold text-2xl mt-3 border-l-4 border-[#3761bf]">
        Added Sub category{" "}
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
          <div className="mt-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Car Photo
            </label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="file"
              {...register("photo", { required: true })}
              id="photo"
              name="photo"
            />
            {errors.photo && <p className="text-red-600">Photo is Required</p>}
          </div>
          <div className="mt-8 ">
            <button
              type="submit"
              className=" text-white bg-[#3761bf] hover:bg-[#10327c] rounded-lg font-bold py-2 px-4 w-full"
            >
              Add Sub Category
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddedSubCategory;
