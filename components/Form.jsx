import React from "react";

const Form = () => {
    return (
        <div>
            <form className="grid lg:grid-cols-2 w-4/6 gap-4">
                <div className="input-type">
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="First name"
                        className="border w-full px-5 py-3 focus:outline-none rounded-md"
                    />
                </div>
                <div className="input-type">
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Last name"
                        className="border w-full px-5 py-3 focus:outline-none rounded-md"
                    />
                </div>
                <div className="input-type">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="border w-full px-5 py-3 focus:outline-none rounded-md"
                    />
                </div>
                <div className="input-type">
                    <input
                        type="text"
                        name="salary"
                        id="salary"
                        placeholder="Salary"
                        className="border w-full px-5 py-3 focus:outline-none rounded-md"
                    />
                </div>
                <div className="input-type">
                    <input
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        className="border px-5 py-3 focus:outline-none rounded-md"
                    />
                </div>
                {/* radio button */}
                <div className="flex gap-10 items-center">
                    <div className="form-check">
                        <input
                            type="radio"
                            name="status"
                            value="Active"
                            id="radioDefault1"
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-center bg-contain float-left mr-2 cursor-pointer"
                        />
                        <label htmlFor="radioDefault1" className="inline-block text-gray-800">
                            Active
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            name="status"
                            value="Inactive"
                            id="radioDefault2"
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-center bg-contain float-left mr-2 cursor-pointer"
                        />
                        <label htmlFor="radioDefault2" className="inline-block text-gray-800">
                            Inactive
                        </label>
                    </div>
                </div>
                {/* submit button */}
                <div>
                    <button className="flex justify-center text-lg w-2/6 bg-green-500 text-white px-5 py-2 border rounded-md hover:bg-green-600 hover:border-green-600 hover:text-gray-50 transition-transform active:scale-95">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
