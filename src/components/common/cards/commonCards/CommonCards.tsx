import React from "react";
import SmallCard from "../SmallCard.tsx";
import { Blog } from "../../../../types/blog.ts";

type BlogProps={
  blogs: Blog[];
}

const CommonCards:React.FC<BlogProps> = ({blogs}) => (
  <>
    <h2 className="text-Zomp text-2xl font-bold my-4">Similar Blogs</h2>
    <div className="grid grid-cols-3 gap-4">
      {blogs.map((blog)=>(
        <div key={blog.id} className="col-span-1">
        <SmallCard blog={blog} />
      </div>
      )) }
      
    </div>

    <div className="flex justify-center mt-5">
      <button type="button" className=" text-Zomp text-lg font-bold">
        See more
      </button>
    </div>
  </>
);

export default CommonCards;
