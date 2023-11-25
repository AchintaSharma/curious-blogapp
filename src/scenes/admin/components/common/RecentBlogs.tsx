import { FaSort } from "react-icons/fa";

const RecentBlogs: React.FC = () => (
  <div className=" flex flex-col my-2">
    {/* heading */}
    <h2 className=" font-semibold  text-xl">Recent Blogs</h2>
    {/* Cards section */}
    <div>
       {/* Total cards */}
        <div className="flex flex-row mt-7 h-20 justify-between px-6">
          {/* total blogs */}
          <div className="flex flex-col items-center justify-center bg-LightSilver px-6 rounded-lg" style={{ width: "30%" }}>
            <h3 className=" font-semibold">Total Blogs</h3>
            <p className=" text-lg">50</p>
          </div>
          {/* total users */}
          <div className="flex flex-col items-center justify-center bg-LightSilver px-6 rounded-lg" style={{ width: "30%" }}>
            <h3 className=" font-semibold">Total Users</h3>
            <p className=" text-lg">100</p>
          </div>
          {/* total categories */}
          <div className="flex flex-col items-center justify-center bg-LightSilver px-6 rounded-lg" style={{ width: "30%" }}>
            <h3 className=" font-semibold">Total Categories</h3>
            <p className=" text-lg">10</p>
          </div>
        </div>
    </div>
    
    <hr className="my-4 font-bold" />

    <div>
      {/* Table starts here */}
      <table className="w-full bg-white border border-Zomp rounded-lg overflow-hidden shadow-md my-6">
        {/* table header */}
        <thead className="bg-LightSilver text-left">
          <tr>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Title{" "}
                <span className=" cursor-pointer">
                  <FaSort />
                </span>
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Author <span className=" cursor-pointer"><FaSort /></span> 
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Date Posted <span className=" cursor-pointer"><FaSort /></span> 
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Category <span className=" cursor-pointer"><FaSort /></span> 
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Action <span className=" cursor-pointer"><FaSort /></span> 
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
      {/* See more */}
      <div className="flex justify-center">
        <button
          type="button"
          className=" text-Zomp px-2 py-1 rounded-lg"
        >
          See more
        </button>
      </div>

    </div>
  </div>
);

export default RecentBlogs;
