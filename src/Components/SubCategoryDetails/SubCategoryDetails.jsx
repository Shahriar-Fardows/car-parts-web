import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { FaCartArrowDown, FaRegStar } from "react-icons/fa";
import { GiBowTieRibbon } from "react-icons/gi";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const SubCategoryDetails = () => {
  const [category, setCategory] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/sub-categories/${id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [id]);

  console.log(category);
  const { name, price, features, description, warranty, warning } =
    category || {};

  return (
    <section>
      <div className="max-w-screen-xl mx-auto mt-8">
        <div className="md:flex gap-8 px-4">
          <div className="flex-1 text-center">
            <Carousel showArrows={true}>
              {category.image?.map((item, idx) => (
                <div key={idx}>
                  <img className="inline" src={item} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex-1 space-y-3">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="text-xl text-[#ef6f18] ">
              <span className="line-through ">{price + 50} $ USD</span>
              <span className="ml-4">{price} $ USD</span>
            </p>
            <div className="flex items-center gap-3">
              <div className="flex text-[#ef6f18]">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              No reviews
            </div>
            <hr className="mt-3 border-[#ef6f18]" />
            <p className="text-sm text ">{}...</p>
            <div>
              <p className="flex items-center gap-4 hover:text-[#ef6f18]">
                <GiBowTieRibbon className="text-2xl " />
                <span className="underline">Size guide</span>
              </p>
              <div className="mt-8 flex gap-12 items-center">
                <p className="underline text-xl ">size : </p>
                <div className="flex  items-center justify-center">
                  <div
                    className={`border w-12 size-12 flex items-center justify-center  text-white font-bold bg-black`}
                  >
                    S
                  </div>
                  <div className="border w-12 size-12 flex items-center justify-center">
                    M
                  </div>
                  <div className="border w-12 size-12 flex items-center justify-center">
                    L
                  </div>
                </div>
              </div>
              <div className="flex mt-8 gap-12 cursor-pointer">
                <div className="flex">
                  <div className=" border-black border-2">
                    <div className="border w-14 text-center h-full text-2xl flex items-center justify-center">
                      {}
                    </div>
                  </div>
                  <div className=" w-12 text-center ">
                    <p className="border-black border-2 hover:text-[#ef6f18] font-bold text-xl cursor-pointer">
                      -
                    </p>
                    <p className="cursor-pointer border-black border-2 hover:text-[#ef6f18] font-bold text-xl">
                      +
                    </p>
                  </div>
                </div>
                <div className="hover:bg-black border bg-[#ef6f18] flex gap-2 items-center justify-center p-4 text-1xl text-white">
                  <FaCartArrowDown className="text-2xl " /> Add To CArt{" "}
                </div>
              </div>
              <div className="mt-6 border bg-black flex items-center justify-center p-4 text-1xl font-semibold text-white cursor-pointer">
                Buy Now{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-screen-lg mx-auto px-4 mt-5">
        <Tabs>
          <TabList>
            <Tab>Product Details</Tab>
            <Tab>Features</Tab>
            <Tab>Warranty</Tab>
          </TabList>

          <TabPanel>
            <div className="text-start space-y-3 mt-5">
              <h1 className="text-2xl font-semibold">Description : </h1>
              <p>{description}</p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="text-start space-y-3">
              <h1 className="text-2xl font-semibold">Features : </h1>
              <p>{features}</p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-2xl font-semibold">Features : </h1>
                <p className="mt-3">{warranty}</p>
                <p className="mt-3">{warning}</p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default SubCategoryDetails;
