const Banner = () => {
  return (
    <div className="z-10">
      <div className="relative bg-gradient-to-r h-[400px] from-purple-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/kBsvq9c/pawel-szvmanski-b-NTD6x-Gokxs-unsplash.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            CAR PARTS & ACCESSORIES
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Customize, Modify, Upgrade, Repair, Replace more
          </p>
          <p className="mt-12">
            <span className="hover:underline cursor-pointer">
              SHOP BY PRODUCT
            </span>{" "}
            <span className="ml-2 mr-2">|</span> (17,477,300){" "}
            <span className="hover:underline cursor-pointer">
              SHOP BY BRAND
            </span>{" "}
            (2,891)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
