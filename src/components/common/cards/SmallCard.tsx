import { IoShareOutline } from "react-icons/io5";
import { Profile2 } from "../../../assets/svgs/svg.ts";
import { Blog } from "../../../types/blog.ts";
import React from "react";

type BlogProps = {
  blog: Blog;
};

const SmallCard: React.FC<BlogProps> = ({ blog }) => {
  return (
    <>
      <div className="px-4 py-4 bg-Zomp rounded-lg flex flex-col gap-2 my-4">
        {/* card profile, name, category */}
        <div className=" flex items-center gap-2">
          <img
            src={Profile2}
            alt="profile"
            className=" w-6 h-6 cursor-pointer"
          />
          <h4 className=" text-sm font-semibold text-white cursor-pointer">
            {/* {blogs[0].author} */}
            {blog.author}
          </h4>
          <h5 className="text-sm font-medium text-white cursor-pointer">
            {blog.category}
          </h5>
        </div>
        {/* card content */}
        <div>
          <h2 className=" text-lg font-semibold text-white cursor-pointer">
            {/* {blogs[0].title} */}
            {blog.title}
          </h2>
        </div>
        {/* card footer */}
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <p className=" text-sm text-white">{blog.date}</p>
            <p className=" text-white text-sm">5 min read</p>
          </div>
          <IoShareOutline className="cursor-pointer text-xl text-white font-bold" />
        </div>
      </div>
    </>
  );
};

export default SmallCard;
