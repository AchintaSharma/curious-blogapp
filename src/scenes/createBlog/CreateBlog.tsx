import React, { useEffect, useState } from "react";
import { Blog } from "../../types/blog";
import useBlogStore from "../../store/blogStore";

const CreateBlog = () => {

  // zustand functions
  const [formData, setFormData] = useState<Blog>({
    id: "",
    title: "",
    category: "",
    message: "",
    thumbnail: "",
    author: "",
    date: "",
    content: "",
  });

  // add blog
  const addBlog = useBlogStore((state) => state.addBlog);

  // get all blog
  const getAllBlog = useBlogStore((state) => state.getAllBlog);

  useEffect(() => {
    getAllBlog();
  }, [getAllBlog]);


  // handle change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     try {
      await addBlog(formData);
      // fetch blogs after adding new one
      await getAllBlog()

      // reset form data
      setFormData({
        id: "",
        title: "",
        category: "",
        message: "",
        thumbnail: "",
        author: "",
        date: "",
        content: "",
      });

     } catch (error) {
      console.error(error)
      throw error
     }
  };

  return (
    <div className=" max-w-screen-sm  py-8 px-12 mx-auto  rounded-xl border border-gray-300  shadow-lg bg-white my-4">
      <h1 className=" mb-4 font-bold">Creat Blog</h1>

      <form className=" mx-auto" onSubmit={handleSubmit}>
        {/* title input */}
        <div className=" mb-4">
          <input
            type="text"
            placeholder="Title"
            className=" w-full h-12 pl-4 border border-Zomp rounded-lg"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        {/* category input */}

        {/* dropdown */}
        <select
          className=" w-full h-12 border border-Zomp rounded-lg px-4 block my-4"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Category</option>
          <option value="second">second</option>
          <option value="third">third</option>
        </select>

        {/* content area */}

        <div>
          <textarea
            placeholder="Content..."
            cols={50}
            rows={6}
            className=" w-full  pl-4 pt-4 border border-Zomp rounded-lg"
            style={{ resize: "none" }}
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>

        {/* author */}
        <div className="my-4">
          <input
            type="text"
            placeholder="Author"
            className=" w-full h-12 pl-4 border border-Zomp rounded-lg"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        {/* Date */}
        <div className="my-4">
          <input
            type="date"
            className=" w-full h-12 pl-4 border border-Zomp rounded-lg"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        {/* label */}
        <h3 className=" font-semibold mt-2">Add Thumbnail</h3>

        {/* image input */}
        <div className="my-2">
          <input
            type="file"
            className=" w-full pt-2 h-12 pl-4 border border-Zomp rounded-lg"
          />
        </div>

        {/* radio */}
        <div className="my-4">
          <input type="checkbox" />{" "}
          <span className=" font-semibold ml-2">Publish</span>
        </div>

        {/* submit button */}
        <div className="my-2">
          <button
            className="w-lg py-2 px-8 text-white bg-SpaceCadet rounded-2xl  hover:bg-PurpleNavy font-medium relative shadow-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
