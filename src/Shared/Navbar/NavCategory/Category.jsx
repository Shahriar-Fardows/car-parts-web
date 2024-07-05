import { Link, useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";

const Category = () => {
  const { category } = useParams();
  const axios = useAxios();
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategory] = useState([]);


  useEffect(() => {
    setLoading(true);
    axios
      .get(`category-list?category=${category}`)
      .then((res) => {
        setCategory(res?.data);
        setLoading(false);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios, category]);

  if (loading) return <Loading />;

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-12 max-w-screen-xl mx-auto px-4">
      {categoryData?.map((item) => (
        <Link
          to={`/sub/${item.category}`}
          className="cursor-pointer hover:border text-center hover:underline rounded-lg"
          key={item._id}
        >
          <img className="inline" src={item.image} alt="category.png" />
          <p className="text-center mt-4">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Category;
