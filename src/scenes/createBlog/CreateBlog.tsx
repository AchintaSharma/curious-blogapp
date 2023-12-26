import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Blog } from "../../types/blog.ts";
import useBlogStore from "../../store/blogStore.ts";
import useCategoryStore from "../../store/categoryStore.ts";

// Function to convert image to base64
const convertImageToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });

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

  // handle change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });

    // validate input field and update
    switch (name) {
      case "title":
        // eslint-disable-next-line no-use-before-define
        setTitleValid(value.trim() !== "");
        break;
      case "category":
        // eslint-disable-next-line no-use-before-define
        setCategoryValid(value !== "");
        break;
      case "content":
        // eslint-disable-next-line no-use-before-define
        setContentValid(value.trim() !== "");
        break;
      default:
        break;
    }
  };

  // after submitting form
  const navigate = useNavigate();

  // modal state

  const [isModalOpen, setIsModalOpen] = useState(false);

  // close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // changing type to any
  const isFile = (value: unknown): value is File => value instanceof File;

  // Image converter
  // state for image  file
  const [imageFile, setImageFile] = useState<File | null>(null);

  // handle image change
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);

    if (file) {
      const base64String = await convertImageToBase64(file);
      setFormData((prevData) => {
        return { ...prevData, thumbnail: base64String };
      });
    }
  };

  // state variables to track validity of each input fields
  const [titleValid, setTitleValid] = useState(true);
  const [categoryValid, setCategoryValid] = useState(true);
  const [contentValid, setContentValid] = useState(true);

  const handleImageUpload = async () => {
    if (isFile(formData.thumbnail)) {
      const base64String = await convertImageToBase64(formData.thumbnail);
      setFormData((prevData) => {
        return { ...prevData, thumbnail: base64String };
      });
    }
  };

  // handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for the validity of each input field
    const isTitleValid = formData.title.trim() !== "";
    const isCategoryValid = formData.category !== "";
    const isContentValid = formData.content.trim() !== "";
    // Update state variables for input field validity
    setTitleValid(isTitleValid);
    setCategoryValid(isCategoryValid);
    setContentValid(isContentValid);

    try {
      handleImageUpload();

      // adding blog
      addBlog(formData);

      setIsModalOpen(true);
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
      console.error(error);
      throw error;
    }
  };

  // handle home click
  const handleHomeClick = () => {
    navigate("/");
    closeModal();
  };

  // viewPost
  // const {id} = useBlogStore((state)=>state.addBlog)
  // const [createdBlog, setCreatedBlog] = useState<Blog | null>();
  const currentBlogId = useBlogStore((state) => state.currentBlogId);
  // console.log(currentBlogId);

  // View post click
  const handleViewPostClick = () => {
    closeModal();
    navigate(`/post/${currentBlogId}`);
  };

  // add category
  const categories = useCategoryStore((state) => state.categories);
  const sortCategories = [...categories].sort(
    (a: any, b: any) =>
      // new Date(b.date).getTime() - new Date(a.date).getTime()
      b.id - a.id
  );
  const getCategory = useCategoryStore((state)=>state.getCategory)

  useEffect(() => {
    // Fetch initial categories when the component mounts
    getCategory();
  }, [getCategory]);

  return (
    <div className=" max-w-screen-sm  py-8 px-12 mx-auto  rounded-xl border border-gray-300 shadow-lg bg-white my-4">
      <h1 className=" mb-4 font-bold text-2xl text-Zomp">Create Blog</h1>

      {/* form starts here */}
      <form className=" mx-auto" onSubmit={handleSubmit}>
        {/* title input */}
        <div className=" mb-4">
          <input
            type="text"
            placeholder="Title"
            className={`w-full h-12 pl-4 border ${
              titleValid ? "border-Zomp" : "border-red-600"
            } rounded-lg`}
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        {/* category input */}

        {/* dropdown */}
        <select
          className={`w-full h-12 border ${
            categoryValid ? "border-Zomp" : "border-red-600"
          } rounded-lg px-4 block my-4`}
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Category</option>
          {sortCategories.map((category) => (
            <option key={category.id} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>

        {/* content area */}

        <div>
          <textarea
            placeholder="Content..."
            cols={50}
            rows={6}
            className={`w-full  pl-4 pt-4 border ${
              contentValid ? "border-Zomp" : "border-red-600"
            } rounded-lg resize-none`}
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
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
        <h3 className=" font-semibold mt-2 text-xl text-Zomp">Add Thumbnail</h3>

        {/* image input */}
        <div className="my-2">
          <input
            type="file"
            className=" w-full pt-2 h-12 pl-4 border border-Zomp rounded-lg"
            onChange={handleImageChange}
          />
        </div>

        {/* display error */}

        {/* <div className="my-4">
          {(!titleValid || !categoryValid || !contentValid) && (
            <p className="text-red-600">Please fill in all required fields</p>
          )}
        </div> */}

        {/* submit button */}
        <div className="my-3">
          <button
            className="w-lg py-2 px-8 text-white bg-SpaceCadet rounded-2xl  hover:bg-PurpleNavy font-medium relative shadow-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          // onClick={closeModal}
        >
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Blog Submitted Successfully!
            </h2>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-SpaceCadet text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleHomeClick}
              >
                Home
              </button>
              <button
                type="button"
                className="bg-PurpleNavy text-white px-4 py-2 rounded-lg"
                onClick={handleViewPostClick}
              >
                View Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBlog;
