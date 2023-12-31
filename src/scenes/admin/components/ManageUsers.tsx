import { IoSearchOutline } from "react-icons/io5";
import { FaSort } from "react-icons/fa";

const ManageUsers = () => (
  <div className=" max-w-screen-lg mx-auto my-2 px-4">
    {/* heading */}
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <h2 className=" font-semibold text-xl mb-4">Manage Users</h2>
      <div className=" relative flex-shrink-0">
        <input
          type="search"
          placeholder="Search"
          className=" border border-Zomp rounded-lg bg-transparent h-10 px-4 "
        />
        <div>
          <IoSearchOutline className="absolute top-2 right-4 inset-y-0  text-xl cursor-pointer" />
        </div>
      </div>
    </div>

    {/* table */}
    <table className="w-full bg-white border border-Zomp rounded-lg overflow-hidden shadow-md my-6">
      <thead className="bg-LightSilver text-left">
        <tr>
          <td>
            <th className="py-4 px-4 flex items-center gap-2">
              Name
              <span className=" cursor-pointer">
                <FaSort />
              </span>
            </th>
          </td>
          <td>
            <th className="py-4 px-4 flex items-center gap-2">
              Email
              <span className=" cursor-pointer">
                <FaSort />
              </span>
            </th>
          </td>
          <td>
            <th className="py-4 px-4 flex items-center gap-2">
              Registration Date
              <span className=" cursor-pointer">
                <FaSort />
              </span>
            </th>
          </td>
          <td>
            <th className="py-4 px-4 flex items-center gap-2">
              No. of Blogs
              <span className=" cursor-pointer">
                <FaSort />
              </span>
            </th>
          </td>
          <td>
            <th className="py-4 px-4 flex items-center gap-2">
              Action{" "}
              <span className=" cursor-pointer">
                <FaSort />
              </span>
            </th>
          </td>
        </tr>
      </thead>

      <tbody>
        {/* 1st row */}
        <tr className=" border-b border-Zomp">
          <td className="py-4 px-4">Achinta Sharma</td>
          <td className="py-2 px-4">Achinta@gmail.com</td>
          <td className="py-2 px-4">20 nov 2023</td>
          <td className="py-2 px-4">100</td>
          <td className="py-2 px-4 ">
            <div className="flex gap-2">
              <button
                type="button"
                className=" bg-LightSilver hover:bg-SpaceCadet hover:text-white px-2 py-1 rounded-lg"
              >
                Edit
              </button>
              <button
                type="button"
                className=" bg-red-600 text-white hover:bg-SpaceCadet px-2 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
        {/* 2nd row */}
        <tr className=" border-b border-Zomp">
          <td className="py-4 px-4">Fujaiel Rahman</td>
          <td className="py-2 px-4">fujaiel@gmail.com</td>
          <td className="py-2 px-4">20 nov 2023</td>
          <td className="py-2 px-4">65</td>
          <td className="py-2 px-4 ">
            <div className="flex gap-2">
              <button
                type="button"
                className=" bg-LightSilver hover:bg-SpaceCadet hover:text-white px-2 py-1 rounded-lg"
              >
                Edit
              </button>
              <button
                type="button"
                className=" bg-red-600 text-white hover:bg-SpaceCadet px-2 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>

        {/* 3rd row */}
        <tr className=" border-b border-Zomp">
          <td className="py-4 px-4">Masruck Rahman</td>
          <td className="py-2 px-4">masruck@gmail.com</td>
          <td className="py-2 px-4">20 nov 2023</td>
          <td className="py-2 px-4">35</td>
          <td className="py-2 px-4 ">
            <div className="flex gap-2">
              <button
                type="button"
                className=" bg-LightSilver hover:bg-SpaceCadet hover:text-white px-2 py-1 rounded-lg"
              >
                Edit
              </button>
              <button
                type="button"
                className=" bg-red-600 text-white hover:bg-SpaceCadet px-2 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
       
      </tbody>
    </table>
    {/* See more */}
    <div className="flex justify-center">
      <button type="button" className=" text-Zomp px-2 py-1 rounded-lg">
        See more
      </button>
    </div>
  </div>
);

export default ManageUsers;
