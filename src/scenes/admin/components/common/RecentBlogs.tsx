const RecentBlogs: React.FC = () => (

<div className=" flex flex-col gap-6">  
    {/* heading */}
    <h2 className=" font-semibold  text-xl">Recent Blogs</h2>
    <div className="">
      {/* Table starts here */}
      <table className=" w-full bg-white border border-Zomp rounded-lg overflow-hidden shadow-md">
        <thead className=" bg-LightSilver text-left">
          <tr>
            <th className=" py-4 px-4">Title</th>
            <th className=" py-2 px-4">Author</th>
            <th className=" py-2 px-4">Date Posted</th>
            <th className=" py-2 px-4">Category</th>
            <th className=" py-2 px-4">Action</th>
          </tr>
        </thead>

        <tbody>
          
          <tr className=" border-b border-Zomp">
            <td className="py-2 px-4">React tips</td>
            <td className="py-2 px-4">Achinta Sharma</td>
            <td className="py-2 px-4">20 nov 2023</td>
            <td className="py-2 px-4">Web Development</td>
            <td className="py-2 px-4 flex gap-2">
              <button type="button" className=" bg-LightSilver hover:bg-SpaceCadet hover:text-white px-2 py-1 rounded-lg">Edit</button>
              <button type="button" className=" bg-red-600 text-white hover:bg-SpaceCadet px-2 py-1 rounded-lg">Delete</button>
            </td>
          </tr>
          <tr className=" border-b border-Zomp">
            <td className="py-2 px-4">React tips</td>
            <td className="py-2 px-4">Achinta Sharma</td>
            <td className="py-2 px-4">20 nov 2023</td>
            <td className="py-2 px-4">Web Development</td>
            <td className="py-2 px-4 flex gap-2">
              <button type="button" className=" bg-LightSilver hover:bg-SpaceCadet hover:text-white px-2 py-1 rounded-lg">Edit</button>
              <button type="button" className=" bg-red-600 text-white hover:bg-SpaceCadet px-2 py-1 rounded-lg">Delete</button>
            </td>
          </tr>
          <tr className=" border-b border-Zomp">
            <td className="py-2 px-4">React tips</td>
            <td className="py-2 px-4">Achinta Sharma</td>
            <td className="py-2 px-4">20 nov 2023</td>
            <td className="py-2 px-4">Web Development</td>
            <td className="py-2 px-4 flex gap-2">
              <button type="button" className=" bg-LightSilver hover:bg-SpaceCadet hover:text-white px-2 py-1 rounded-lg">Edit</button>
              <button type="button" className=" bg-red-600 text-white hover:bg-SpaceCadet px-2 py-1 rounded-lg">Delete</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    </div>
);

export default RecentBlogs;
