import { Link } from "react-router-dom";

const SubCategoryBanner = () => {
    return (
        <div>
        <div
          className="hero h-[300px] place-items-stretch"
          style={{
            backgroundImage: `url(https://i.ibb.co/J7mCFDZ/caliper-covers-big-0.jpg)`,
          }}
        >
          <div className="hero-overlay bg-opacity-30 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 "></div>
          <div className=" text-neutral-content">
            <div className="mt-[120px] ml-16">
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-80 mx-auto -mt-12 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="296"
              height="50"
              viewBox="0 0 296 50"
              fill="none"
            >
              <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
            </svg>
            <h1 className="absolute font-bold left-20  bottom-4 text-white">
              <Link to="/">Home</Link>/ <Link>Back</Link>
            </h1>
          </div>
        </div>
      </div>
    );
};

export default SubCategoryBanner;