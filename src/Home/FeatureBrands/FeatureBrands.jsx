import useAxios from "../../Hooks/useAxios";
// import Loading from "../../Shared/Loading/Loading";
import { useEffect, useState } from "react";

const FeatureBrands = () => {
  const [imageData, setImage] = useState([]);
  // const [loading, setLoading] = useState(false);
  const axios = useAxios();

  useEffect(() => {
    axios
      .get("/image")
      .then((res) => {
        setImage(res?.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios]);

  // console.log(categoryData);

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-3">
      <div>
        <h1 className="text-2xl font-bold">Featured Brands</h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {imageData?.map((item) => (
            <div className="relative cursor-pointer" key={item._id}>
              <div className="lg:w-52 h-40 rounded-lg bg-slate-100"></div>
              <div className="absolute top-14 left-6 ">
                <img className="object-contain " src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBrands;
