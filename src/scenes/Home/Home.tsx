
import { useEffect } from "react";
import BigAdvertisement from "../../components/common/advertisement/BigAdvertisement.tsx";
import SmallAd from "../../components/common/advertisement/SmallAd.tsx";
import MainCard from "../../components/common/cards/MainCard.tsx";
import NewsLetter from "../../components/common/cards/NewsLetter.tsx";
import CommonCards from "../../components/common/cards/commonCards/CommonCards.tsx";
import useBlogStore from "../../store/blogStore.ts";


const Home = () => {

  // Array of blogs
  const blogs = useBlogStore((state)=>state.blogs);

  // getAllBlog function
  const getAllBlogs = useBlogStore((state)=> state.getAllBlog)

  // useEffect hook is used to trigger the getBlog function when the component mounts, ensuring that the data is fetched.
  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  return (
    <div className="max-w-screen-xl mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 my-4">
      {/* grid starts here */}
      <div className="grid grid-cols-12 gap-12">
        {/* first grid */}
        <div className=" col-span-7">
          {/* title */}
          <h2 className=" font-semibold text-2xl text-Zomp">Popular Blogs </h2>
           <MainCard blogs={blogs} />
          {/* <MainCard />
          <MainCard />
          <MainCard /> */}
        </div>

        {/* /////////////////////////////////////////////////////////////// */}
        {/* second grid */}
        <div className=" col-span-5">
          {/* title */}
          <h2 className=" font-semibold text-2xl text-Zomp">Popular Blogs </h2>

          {/* news letter */}
          <div className=" flex justify-end">
            <NewsLetter />
          </div>

          {/* advertisement */}
          <SmallAd />
        </div>
      </div>

      {/* Advertisement */}
      <BigAdvertisement />

      {/* Recomended */}
      <CommonCards />
    </div>
  );
};

export default Home;
