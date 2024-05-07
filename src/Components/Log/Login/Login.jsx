import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
// import useAuthProvider from "../../../Hooks/useAuthProvider";



const Login = () => {

    const [visible, setVisible] = useState(false);
    // const {loginUser} = useAuthProvider();
 
    const showPassword = () => {
        setVisible(!visible);
    }

    const loginData = e => {
        e.preventDefault();
        console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password); 
        // loginUser(email, password)
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     console.log(user);
        //     // ...
        // })
        // .catch((error) => {
        //     const errorMessage = error.message;
        //     console.log(errorMessage);
        //     // ..
        // });
    }

    return (
        <div className="container px-4 mx-auto my-10">
            <div className="max-w-lg mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold">Sign in</h2>
                </div>
                <form action="" onSubmit={loginData}>
                    <div className="mb-6">
                        <label className="block mb-2 font-extrabold" htmlFor="">Email</label>
                        <input name="email" className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#1F2937] bg-white shadow border-2 border-[#1F2937] rounded" type="email" placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 font-extrabold" htmlFor="">Password</label>
                        <div className=" flex   leading-6 border-2 border-[#1F2937] rounded ">
                            <input name='password' className="text-lg p-4 w-full border-0	 font-extrabold placeholder-[#1F2937]" type={visible ? 'text' : 'password'}  id="" placeholder="**********" />
                            <div className="flex items-center px-4">
                                {
                                    visible ? <IoEye style={{ cursor: 'pointer' }} className="text-xl" onClick={showPassword} /> : <IoMdEyeOff style={{ cursor: 'pointer' }} className="text-xl" onClick={showPassword} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                        <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                            <label htmlFor="">
                                <input type="checkbox" />
                                <span className="ml-1 font-extrabold">Remember me</span>
                            </label>
                        </div>
                        <div className="w-full lg:w-auto px-4"><a className="inline-block font-extrabold hover:underline" href="#">Forgot your
                            password?</a></div>
                    </div>
                    <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#1F2937] hover:bg-[#1F2937] border-3 border-[#1F2937] shadow rounded transition duration-200">Sign in</button>
                    <p className="text-center font-extrabold">Don&rsquo;t have an account? <Link to='/signUp' className="text-red-500 hover:underline"
                    >Sign up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;