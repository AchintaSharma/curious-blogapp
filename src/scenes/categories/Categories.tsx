import MainCard from "../../components/common/cards/MainCard.tsx";
import { Advertisement1 } from "../../assets/images/images.ts";
import { useEffect } from "react";
import useBlogStore from "../../store/blogStore.ts";
import CommonCards from "../../components/common/cards/commonCards/CommonCards.tsx";

const Categories = () => {
  // Array of blogs
  const blogs = useBlogStore((state) => state.blogs);

  // getAllBlog function
  const getAllBlogs = useBlogStore((state) => state.getAllBlog);

  // useEffect hook is used to trigger the getBlog function when the component mounts, ensuring that the data is fetched.
  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  // positioning to top:
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="max-w-screen-xl mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 my-8">
      {/* title */}
      <h1 className=" text-2xl text-Zomp font-semibold">Categories</h1>
      {/* main card */}
      <div className="my-8">
        <MainCard blogs={blogs} />
      </div>

      {/* see more button */}
      <div className=" flex justify-center">
        <button type="button" className=" text-Zomp text-lg font-bold">
          See more
        </button>
      </div>

      {/* Advertisement */}
      <div className=" border-t-2 border-b-2 py-4 my-8">
        <img src={Advertisement1} alt="Advertisement" />
      </div>
      {/* Similar blogs */}
      <div className=" my-8">
        <CommonCards blogs={blogs} />
      </div>
    </div>
  );
};

export default Categories;
