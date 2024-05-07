import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { useEffect, useState } from "react";

const Category = () => {
  const { category } = useParams();

  const [loading , setLoading] = useState(false)
  const [categoryData, setCategory] = useState([]);

  useEffect(() => {
    setLoading(true)
    const url = `https://carid-project-server.vercel.app/api/v1/category-list?category=${category}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data)
        setLoading(false)
      });
  }, [category]);

  if (loading) return <Loading />;

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-12 max-w-screen-xl mx-auto px-4">
      {categoryData?.map((item) => (
        <div
          className="cursor-pointer hover:border text-center hover:underline rounded-lg"
          key={item._id}
        >
          <img className="inline" src={item.image} alt="category.png" />
          <p className="text-center mt-4">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
