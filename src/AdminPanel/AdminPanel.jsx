import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminPanel = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate()
  const showPassword = () => {
    setVisible(!visible);
  };
  const loginData = (e) => {
    e.preventDefault();
    console.log(e);
    const email = e.target.email.value;
      const password = e.target.password.value;
      if (email === "admin@car.gmail.com" && password === "admin12345") {
        Swal.fire({
            text: 'admin login successfully!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          navigate("/admin/admin-dashboard")
      } else {
        Swal.fire({
            title: 'Invalid admin email or Password!',
            icon: 'error',
            confirmButtonText: 'Try again'
          })
      }
  };

  return (
    <div className="max-w-md mx-auto">
      <form action="" onSubmit={loginData}>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Admin Email
          </label>
          <input
            name="email"
            className="inline-block w-full p-4 leading-6 text-lg  placeholder-[#1F2937] bg-white shadow border-2 border-[#1F2937] rounded"
            type="email"
            placeholder="admin email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Admin Password
          </label>
          <div className=" flex leading-6 border-2 border-[#1F2937] rounded ">
            <input
              name="password"
              className="text-lg p-4 w-full border-0 placeholder-[#1F2937]"
              type={visible ? "text" : "password"}
              id=""
              placeholder="Admin Password"
            />
            <div className="flex items-center px-4">
              {visible ? (
                <IoEye
                  style={{ cursor: "pointer" }}
                  className="text-xl"
                  onClick={showPassword}
                />
              ) : (
                <IoMdEyeOff
                  style={{ cursor: "pointer" }}
                  className="text-xl"
                  onClick={showPassword}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
        </div>
        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#1F2937] hover:bg-[#1F2937] border-3 border-[#1F2937] shadow rounded transition duration-200">
          Sign in to Admin
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
