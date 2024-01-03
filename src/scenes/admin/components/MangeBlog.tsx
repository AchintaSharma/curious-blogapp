import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaSort } from "react-icons/fa";
import useBlogStore from "../../../store/blogStore.ts";

const MangeBlog = () => {
  
  const blogs = useBlogStore((state)=> state.blogs)
  // console.log(blogs)

  // sort by date
  const sortBlogs = [...blogs].sort(
    (a: any, b: any) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
    // b.id - a.id
  );

  // getAllBlog function
  const getAllBlogs = useBlogStore((state) => state.getAllBlog);

  // const [editMode, setEditMode] = useState(false);
  // const [editCategoryId, setEditCategoryId] = useState<number | null>(null);

  // const handleEditCategory = (categoryId: number) => {
  //   const categoryToEdit = categories.find(
  //     (category) => category.id === categoryId
  //   );
  //   if (categoryToEdit) {
  //     setNewCategory(categoryToEdit.category);
  //     setEditMode(true);
  //     setEditCategoryId(categoryId);
  //   }
  // };

  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  // see more state
  const [visibleRows, setVisibleRows] = useState(3);

  // see more function
  const showMoreRows = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 3);
  };

  // update blog state
  

  // delete blog
  const deleteBlog = useBlogStore((state)=> state.deleteBlog)

  // delete function

  const handleDeleteBlot =(id:string)=>{
    deleteBlog(id)
  }

  return (
    <div className=" max-w-screen-lg mx-auto my-2 px-4">
      
      {/* heading */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h2 className=" font-semibold text-xl mb-4">Manage Blogs</h2>
        <div className=" relative flex-shrink-0">
          <input
            type="search"
            placeholder="Search"
            className="border border-Zomp rounded-lg bg-transparent h-10 px-4 "
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
                
                Title{" "}
                <span className=" cursor-pointer">
                  <FaSort />
                </span>
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Author{" "}
                <span className=" cursor-pointer">
                  <FaSort />
                </span>
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Date Posted{" "}
                <span className=" cursor-pointer">
                  <FaSort />
                </span>
              </th>
            </td>
            <td>
              <th className="py-4 px-4 flex items-center gap-2">
                Category{" "}
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
            {sortBlogs.slice(0, visibleRows).map((blog)=>(
              // eslint-disable-next-line react/jsx-key
              <tr className=" border-b border-Zomp">
              <td className="py-4 px-4">
                {blog.title}
                {/* Hot to be Billionare */}
                </td>
              <td className="py-2 px-4">
                {blog.author}
                {/* Achinta Sharma */}
              </td>
              <td className="py-2 px-4">
                {blog.date}
                {/* 20 nov 2023 */}
                </td>
              <td className="py-2 px-4">
                {blog.category}
                {/* Web Development */}
                </td>
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
                    onClick={()=>handleDeleteBlot(blog.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            ))}
          

          {/* 2nd row */}
          {/* <tr className=" border-b border-Zomp">
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
          </tr> */}

          {/* 3rd row */}
          {/* <tr className=" border-b border-Zomp">
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
          </tr> */}

        </tbody>
      </table>
      {/* See more */}
      {visibleRows<blogs.length &&(
        <div className="flex justify-center">
        <button type="button" className=" text-Zomp px-2 py-1 rounded-lg" onClick={showMoreRows}>
          See more
        </button>
      </div>
      )}
      
    </div>
  );
};
export default MangeBlog;
