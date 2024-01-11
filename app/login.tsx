import React from "react";

function login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg flex flex-col items-center lg:bg-white">
        <form className="w-full">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-bold text-gray-600"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-bold text-gray-600"
            >
              Mobile
            </label>
            <input
              type="mobile"
              id="mobile"
              className="mt-1 p-3 w-full border rounded-md"
              placeholder="Enter your mobile"
            />
          </div>
          <div className="flex flex-col items-center pt-2">
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
