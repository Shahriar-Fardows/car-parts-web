
import { useState, useEffect } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const AdminPanel = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const axios = useAxios();
  const [adminLogin, setAdminadminLogin] = useState({});

  // const {email, password} = admin;
  // console.log( admin.email, 'email', password, 'password' );


  console.log( adminLogin, 'admin' );

  useEffect(() => {
    axios.get("/admin-list")
      .then((res) => {
        setAdminadminLogin(res.data);
      })
      .catch((error) => {
        console.error("Error fetching admin list:", error);
      });
  }, [axios]);

  const showPassword = () => {
    setVisible(!visible);
  };

  const loginData = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Check if the email and password match any user in the array
    const matchedUser = adminLogin.find(user => user.email === email && user.password === password);

    if (matchedUser) {
      Swal.fire({
        text: 'Admin logged in successfully!',
        icon: 'success',
        confirmButtonText: 'Cool'
      });
      navigate("/admin/admin-dashboard");
    } else {
      // If no match, check against default admin credentials
      if (email === "admin@car.gmail.com" && password === "admin12345") {
        Swal.fire({
          text: 'Admin logged in successfully!',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        navigate("/admin/admin-dashboard");
      } else {
        Swal.fire({
          title: 'Invalid admin email or password!',
          icon: 'error',
          confirmButtonText: 'Try again'
        });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={loginData}>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="email">
            Admin Email
          </label>
          <input
            name="email"
            className="inline-block w-full p-4 leading-6 text-lg placeholder-[#1F2937] bg-white shadow border-2 border-[#1F2937] rounded"
            type="email"
            placeholder="admin email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="password">
            Admin Password
          </label>
          <div className="flex leading-6 border-2 border-[#1F2937] rounded">
            <input
              name="password"
              className="text-lg p-4 w-full border-0 placeholder-[#1F2937]"
              type={visible ? "text" : "password"}
              placeholder="Admin Password"
              required
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
        <button
          type="submit"
          className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#1F2937] hover:bg-[#1F2937] border-3 border-[#1F2937] shadow rounded transition duration-200"
        >
          Sign in to Admin
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;