import { Link, Navigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
    const axios = useAxios();
  const { user, createUser } = useAuthProvider();

  if (user?.email) {
    return <Navigate to="/profile" />;
  }

  const showPassword = () => {
    setVisible(!visible);
  };

  const signUpData = (e) => {
    e.preventDefault();
    // console.log(e);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const date = e.target.date.value
    createUser(email, password)
      .then(() => {
        const user = {
          email: email,
          password: password,
          role: "user",
          name: name,
          date: date,
        };
          // post email or password save  on data base
          axios.post("save-user", user)
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                text: "Sign up successfully!",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
        // fetch("http://localhost:5000/api/v1/save-user", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.acknowledged) {
        //       Swal.fire({
        //         text: "Sign up successfully!",
        //         icon: "success",
        //         confirmButtonText: "Cool",
        //       });
        //     }
        //   });
      })
      .catch(() => {
        Swal.fire({
          title: "Password has to be between 6 and 32 characters!",
          text: "",
          icon: "error",
          confirmButtonText: "Try again",
        });
        // ..
      });
  };

  return (
    <div className="container px-4 mx-auto my-10">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Sign up</h2>
        </div>
        <form action="" onSubmit={signUpData}>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="">
              Name
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#1F2937] bg-white shadow border-2 border-[#1F2937] rounded"
              type="text"
              name="name"
              placeholder="name"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="">
              Date Of Birth
            </label>
            <input
              className="inline-block  p-4 w-full leading-6 text-lg font-extrabold placeholder-[#1F2937] bg-white shadow border-2 border-[#1F2937] rounded"
              type="date"
              name="date"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="">
              Email
            </label>
            <input
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#1F2937] bg-white shadow border-2 border-[#1F2937] rounded"
              type="email"
              name="email"
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="">
              Password
            </label>
            <div className=" flex   leading-6 border-2 border-[#1F2937] rounded ">
              <input
                className="text-lg p-4 w-full border-0	 font-extrabold placeholder-[#1F2937]"
                type={visible ? "text" : "password"}
                name="password"
                id=""
                placeholder="**********"
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
          <div className="flex flex-wrap -mx-4 mb-6 items-center text-center justify-between">
            <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
              <p>
                By creating an account, you are agreeing to our privacy policy
                and terms
              </p>
            </div>
            <div className="w-full lg:w-auto px-4"></div>
          </div>
          <div>
            <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#1F2937] hover:bg-[#1F2937] border-3 border-[#1F2937] shadow rounded transition duration-200">
              Sign up
            </button>
          </div>
          <p className="text-center font-extrabold">
            Don&rsquo;t have an account?{" "}
            <Link to="/login" className="text-red-500 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
