import { useState } from "react";
import { NavLink } from "react-router-dom";

const Vehicle = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div  className="flex justify-center ">
      <div
        onClick={() => setShowModal(!showModal)}
        className="btn  glass lg:w-[16vw] lg:mr-[-10rem] lg:bg-[#EEF1F9]"
      >
        <svg
          className="text-[1.5rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M240 114h-29.51l-43.9-43.9a13.94 13.94 0 0 0-9.9-4.1H44.28a14 14 0 0 0-11.65 6.23L3 116.67A6 6 0 0 0 2 120v48a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h69.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-40a14 14 0 0 0-14-14M42.62 78.89a2 2 0 0 1 1.66-.89h112.41a2 2 0 0 1 1.41.59L193.52 114H19.21ZM64 194a18 18 0 1 1 18-18a18 18 0 0 1-18 18m128 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m50-26a2 2 0 0 1-2 2h-18.6a30 30 0 0 0-58.8 0H93.4a30 30 0 0 0-58.8 0H16a2 2 0 0 1-2-2v-42h226a2 2 0 0 1 2 2Z"
          ></path>
        </svg>
        <h6>Select Your Vehicle</h6>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none ">
            <div className="relative w-full my-6 mx-auto ">
              {/*content*/}
              <div
                className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
              >
                {/*body*/}
                <div className=" border bg-[#e8eeff] dark:text-white text-black mt-12 rounded-lg p-10">
                  <h1 className="text-2xl font-semibold">
                    Select Your Vehicle
                  </h1>
                  <p className="font-medium mt-1">
                    Provide vehicle details to confirm fitment
                  </p>
                  <div
                    className={`overflow-hidden flex p-3 rounded-lg flex-col lg:flex-row items-center gap-6 mt-5`}
                  >
                    <div className="w-full">
                      <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
                        <h1 className="font-bold text-xl flex items-center gap-3">
                          1 <span>|</span>
                        </h1>
                        <select
                          className="w-full border-none rounded-md"
                          name=""
                          id="1"
                        >
                          <option defaultValue="Year" value="">
                            Year
                          </option>
                          <option value="2024">2029</option>
                          <option value="2024">2029</option>
                          <option value="2024">2022</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
                        <h1 className="font-bold text-xl flex items-center gap-3">
                          2 <span>|</span>
                        </h1>
                        <select className="w-full" name="" id="2">
                          <option value="2022">2024</option>
                          <option value="2020">2024</option>
                          <option value="2011">2024</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="border border-black px-3 py-2 flex items-center gap-3 rounded-lg">
                        <h1 className="font-bold text-xl flex items-center gap-3">
                          3 <span>|</span>
                        </h1>
                        <select className="w-full" name="" id="3">
                          <option value="202">2032</option>
                          <option value="2026">2023</option>
                          <option value="2024">2023</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-[40%] cursor-pointer text-center border rounded-lg bg-[#3761bf] hover:bg-[#15306b]">
                      <button className="text-white py-4 font-bold">GO</button>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="[#3761bf] hover:bg-[#15306b] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border rounded-lg hover:text-white"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Vehicle;
