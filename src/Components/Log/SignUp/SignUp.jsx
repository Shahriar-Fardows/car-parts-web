import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
// import useAuthProvider from "../../../Hooks/useAuthProvider";



const SignUp = () => {
    const [visible, setVisible] = useState(false);
    // const { createUser } = useAuthProvider();
   
    const showPassword = () => {
        setVisible(!visible);
    }

    const signUpData = e => {
        e.preventDefault();
        console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // createUser(email, password)
        //     .then((userCredential) => {
        //         // Signed up 
        //         const user = userCredential.user;
        //         console.log(user);
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorMessage = error.message;
        //         console.log(errorMessage);
        //         // ..
        //     });


    }



    return (
        <div className="container px-4 mx-auto my-10">
            <div className="max-w-lg mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold">Sign up</h2>
                </div>
                <form action="" onSubmit={signUpData}>
                    <div className="mb-6">
                        <label className="block mb-2 font-extrabold" htmlFor="">Email</label>
                        <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#1F2937] bg-white shadow border-2 border-[#1F2937] rounded" type="email" name='email' placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 font-extrabold" htmlFor="">Password</label>
                        <div className=" flex   leading-6 border-2 border-[#1F2937] rounded ">
                            <input className="text-lg p-4 w-full border-0	 font-extrabold placeholder-[#1F2937]" type={visible ? 'text' : 'password'} name="password" id="" placeholder="**********" />
                            <div className="flex items-center px-4">
                                {
                                    visible ? <IoEye style={{ cursor: 'pointer' }} className="text-xl" onClick={showPassword} /> : <IoMdEyeOff style={{ cursor: 'pointer' }} className="text-xl" onClick={showPassword} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-6 items-center text-center justify-between">
                        <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                            <p>By creating an account, you are agreeing to our privacy policy and terms</p>
                        </div>
                        <div className="w-full lg:w-auto px-4"></div>
                    </div>
                    <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#1F2937] hover:bg-[#1F2937] border-3 border-[#1F2937] shadow rounded transition duration-200">Sign up</button>
                    <p className="text-center font-extrabold">Don&rsquo;t have an account? <Link to='/login' className="text-red-500 hover:underline"
                    >Sign in</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;