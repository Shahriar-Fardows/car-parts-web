import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { GiBowTieRibbon } from "react-icons/gi";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAxios from "../../Hooks/useAxios";
import useAuthProvider from "../../Hooks/useAuthProvider";
import Swal from "sweetalert2";
import { IoMdStar } from "react-icons/io";

const SubCategoryDetails = () => {
  const [category, setCategory] = useState({});
  const { id } = useParams();
  const axios = useAxios();
  const { user } = useAuthProvider();
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("S");

  useEffect(() => {
    axios
      .get(`sub-categories/${id}`)
      .then((res) => {
        setCategory(res?.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios, id]);

  const {
    name,
    price,
    features,
    description,
    warranty,
    warning,
    SKU,
    Part_number,
  } = category || {};

  const handleAddToCart = async (product) => {
    console.log(product);
    const addToCart = {
      name: product.name,
      email: user?.email,
      image: product.image[0],
      price: product.price,
      color: product.color,
      size: size,
      quantity: number 
      
    };
    console.log(addToCart);
    const res = await axios.post("/add-to-cart", addToCart);
    if (res.data.acknowledged) {
      Swal.fire({
        title: "added To Cart !!!",
        text: "Added To Cart successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This Product AllReady Added!",
      });
    }
  };
  // add-to-cart
  // console.log(category);

  const handleMinus = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const handleSize = (e) => {
    setSize(e.target.innerText);
  };

  console.log(category);
  console.log(number);

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
            <p className="text-xl text-[#3761bf] ">
              <span className="line-through ">{price + 50} $ USD</span>
              <span className="ml-4">{price} $ USD</span>
            </p>
            <div className="flex items-center gap-3">
              <div className="flex text-[#ef6f18]">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
              {4.9}
            </div>
            <hr className="mt-3 border-[#ef6f18]" />
            <p className="text-sm text ">{}...</p>
            <div>
              <p className="flex items-center gap-4 hover:text-[#3761bf]">
                <GiBowTieRibbon className="text-2xl " />
                <span className="underline">Size guide</span>
              </p>
              <div className="mt-8 flex gap-12 items-center">
                <p className="underline text-xl ">size : </p>
                <div
                  onClick={handleSize}
                  className="flex items-center justify-center"
                >
                  <div
                    className={`border ${
                      size == "S" ? "bg-black text-white" : ""
                    }  w-12 size-12 flex items-center justify-center  font-bold `}
                  >
                    S
                  </div>
                  <div
                    className={`border ${
                      size == "M" ? "bg-black text-white" : ""
                    }  w-12 size-12 flex items-center justify-center  font-bold `}
                  >
                    M
                  </div>
                  <div
                    className={`border ${
                      size == "L" ? "bg-black text-white" : ""
                    }  w-12 size-12 flex items-center justify-center  font-bold `}
                  >
                    L
                  </div>
                </div>
              </div>
              <div className="flex mt-8 gap-12 cursor-pointer">
                <div className="flex">
                  <div className=" border-black border-2">
                    <div className="border w-14 text-center h-full text-2xl flex items-center justify-center">
                      {number}
                    </div>
                  </div>
                  <div className=" w-12 text-center ">
                    <p
                      onClick={handleMinus}
                      className="border-black border-2 hover:text-[#3761bf] font-bold text-xl cursor-pointer"
                    >
                      -
                    </p>
                    <p
                      onClick={() => setNumber(number + 1)}
                      className="cursor-pointer border-black border-2 hover:text-[#3761bf] font-bold text-xl"
                    >
                      +
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => handleAddToCart(category)}
                  className="hover:bg-black border bg-[#3761bf] flex gap-2 items-center justify-center p-4 text-1xl text-white"
                >
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
              <h1 className="text-2xl font-semibold">Part Number : </h1>
              <p>Part Number : {Part_number}</p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="text-start space-y-3">
              <h1 className="text-2xl font-semibold underline">Features : </h1>
              <p className="whitespace-pre-wrap">{features}</p>
              <h1 className="text-xl font-bold underline">SKU :</h1>
              <p>SKU : {SKU}</p>
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
