/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";

const CategoryTab = ({ category }) => {
  const [categoryData, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://carid-project-server.vercel.app/api/v1/category-list?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        setLoading(false);
      });
  }, [category]);

  // console.log(categoryData);

  if (loading) return <Loading />;

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-12 px-3">
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

export default CategoryTab;
