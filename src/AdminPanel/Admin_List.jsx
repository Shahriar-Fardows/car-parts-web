import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import AdminForm from "./AdminForm";

const Admin_List = () => {

    const [items, setItems] = useState([]);

    const axios = useAxios();
    
    useEffect(() => {
      fetchItems();
    }, []);
  
    const fetchItems = async () => {
      const response = await axios.get("/admin-list");
      setItems(response.data);
    };

    const handleDelete = (table) => {
        console.log(table);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await axios.delete(`/admin-deleted/${table._id}`);
            console.log(res);
            if (res.data.deletedCount > 0) {
              fetchItems();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          }
        });
      };

    const reload = () => {
        window.location.reload();
    }

    return (
        <div className="">
            <section>
                <div className="flex justify-between py-5">
                    <h1 className="text-3xl font-bold ">All Users</h1>
                    <div>
                        <button
                            onClick={() => document.getElementById('my_modal_1').showModal()}
                            className="flex gap-2 justify-center items-center border bg-[#3761bf] hover:bg-[#10327c] rounded-lg p-2 text-white"
                        >
                            <FaEdit className="text-xl" />
                            Add Admin
                        </button>
                    </div>
                   
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                           <AdminForm />
                            <div className="modal-action">
                                <form method="dialog">
                                    <button onClick={reload} className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                {/* table for shoe data */}
                <div>
                    <div className="p-6 overflow-scroll px-0">
                        <table className="mt-4 w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                        <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                                            #
                                        </p>
                                    </th>
                                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                        <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                                            Photo
                                        </p>
                                    </th>
                                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                        <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                                            Name
                                        </p>
                                    </th>
                                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                        <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                                            Email
                                        </p>
                                    </th>
                                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                        <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                                            Role
                                        </p>
                                    </th>
                                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                                        <p className="text-sm text-blue-gray-900  font-semibold leading-none opacity-70">
                                            Action
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((table, idx) => {
                                    return (
                                        <tr key={table._id}>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <div>
                                                    <p>{idx + 1}</p>
                                                </div>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <div>
                                                    <img
                                                        src={
                                                            table.image ||
                                                            "https://i.ibb.co/k8h5CJg/user-2935527-1280.png"
                                                        }
                                                        alt="John Michael"
                                                        className="inline-block relative object-cover object-center !rounded-full w-9 h-9"
                                                    />
                                                </div>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p>{table.name}</p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p>{table.email}</p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p>{table.role}</p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <div onClick={() => handleDelete(table)}>
                                                    <button className="p-2 border rounded-lg  bg-[#3761bf] hover:bg-[#10327c]">
                                                        <MdOutlineDeleteOutline className="text-2xl text-white" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admin_List;