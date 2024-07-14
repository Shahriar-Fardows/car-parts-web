import useAxios from "../Hooks/useAxios";

const AdminForm = () => {

    const axios = useAxios();

    const addAdmin = async (e) => {
        e.preventDefault();
    
        // Confirmation alert
        const isConfirmed = window.confirm("Are you sure you want to add this admin?");
        if (!isConfirmed) {
            return; // If user cancels, exit the function
        }
    
        console.log("Admin added");
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const role = e.target.countries.value;
        const data = { email, role, name, password };
        console.log(data);
    
        try {
            const adminAdd = await axios.post("/add-admin", data);
            console.log(adminAdd);
    
            // Reset form after submit
            e.target.email.value = "";
            e.target.password.value = "";
            e.target.name.value = "";
            e.target.countries.value = "";
        } catch (error) {
            console.error("Error adding admin:", error);
        }
    }
    

    
    

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col  justify-center px-6  mx-auto  lg:py-0">

                    <div className="">
                        <div className="">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an Admin
                            </h1>
                            <form onSubmit={addAdmin} className="space-y-4 md:space-y-6" action="#">
                                <div className="w-full">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="text" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                    <input type="text" name="name" id="name" placeholder="User Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>

                                <div className="max-w-sm mx-auto">
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                    <select id="countries" name="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="" disabled selected>Choose a role</option>
                                        <option value="admin">admin</option>
                                        <option value="moderator">moderator</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Create an account</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminForm;
