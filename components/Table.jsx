import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

const Table = () => {
    return (
        <div>
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-800">
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Name</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Email</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Salary</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Birthday</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Status</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-200">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                    <tr className="text-center">
                        <td className="px-16 py-2 flex flex-row items-center">
                            <img src="#" alt="" />
                            <span className="ml-4 font-semibold">NAME</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>scorpdipesh@gmail.com</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>$20000</span>
                        </td>
                        <td className="px-16 py-2">
                            <span>17/01/1995</span>
                        </td>
                        <td className="px-16 py-2">
                            <button className="cursor-pointer">
                                <span className="bg-green-500 text-white rounded-full px-5 py-1">
                                    Active
                                </span>
                            </button>
                        </td>
                        <td className="px-16 py-2 flex justify-around gap-5">
                            <button className="cursor-pointer">
                                <BiEdit size={25} color={"rgb(34,197,94)"} />
                            </button>
                            <button className="cursor-pointer">
                                <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
