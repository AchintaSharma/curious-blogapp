import { FaSort } from "react-icons/fa";
import PrimaryButton from "../../../components/common/buttons/PrimaryButton.tsx";

const ManageCategories = () => (
  <div className="max-w-screen-lg mx-auto my-2">
    <div className=" grid grid-flow-col gap-14">
      {/* Existing Category */}
      <div className=" col-span-6">
        <h2 className=" font-semibold text-xl mb-4">Existing Category</h2>

        {/* table */}
        <table className="w-fit bg-white border border-Zomp rounded-lg overflow-hidden shadow-md my-4">
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
              <td className="py-4 px-4">Music</td>
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
              <td className="py-4 px-4">Technology</td>
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
              <td className="py-4 px-4">Web Development</td>
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

      {/* Add Category */}
      <div className=" col-span-6">
        <h2 className="font-semibold text-xl mb-4">Add Category</h2>
        <div className="flex-shrink-0">
          <input
            type="text"
            placeholder="Enter category"
            className=" border border-Zomp rounded-lg bg-transparent h-12 px-4 mb-4 w-full"
          />
        </div>
        <PrimaryButton> Add category</PrimaryButton>
      </div>
    </div>
  </div>
);

export default ManageCategories;
