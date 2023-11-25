import { FaSort } from "react-icons/fa";

const RecentBlogs: React.FC = () => (
  <div className=" flex flex-col gap-6">
    {/* heading */}
    <h2 className=" font-semibold  text-xl">Recent Blogs</h2>
    <div className="">
      {/* Table starts here */}
      <table className="w-full bg-white border border-Zomp rounded-lg overflow-hidden shadow-md">
        {/* table header */}
        <thead className="bg-LightSilver text-left">
          <tr>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Title{" "}
                <span>
                  <FaSort />{" "}
                </span>
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Author <FaSort />
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Date Posted <FaSort />
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Category <FaSort />
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Action <FaSort />
              </th>
            </td>
          </tr>
        </thead>

        <tbody>
          {/* 1st row */}
          <tr className=" border-b border-Zomp">
            <td className="py-4 px-4">Hot to be Billionare</td>
            <td className="py-2 px-4">Achinta Sharma</td>
            <td className="py-2 px-4">20 nov 2023</td>
            <td className="py-2 px-4">Web Development</td>
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
            <td className="py-4 px-4">Become WebDevelooper</td>
            <td className="py-2 px-4">Achinta Sharma</td>
            <td className="py-2 px-4">20 nov 2023</td>
            <td className="py-2 px-4">Web Development</td>
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
            <td className="py-4 px-4">Music Heals everything</td>
            <td className="py-2 px-4">Fujaiel</td>
            <td className="py-2 px-4">20 nov 2023</td>
            <td className="py-2 px-4">Music</td>
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
    </div>
  </div>
);

export default RecentBlogs;
