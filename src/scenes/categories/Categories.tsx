import SmallCard from "../../components/common/cards/SmallCard.tsx";
import MainCard from "../../components/common/cards/MainCard.tsx";
import { Advertisement1 } from "../../assets/images/images.ts";

const Categories = () => (
  <div className=" max-w-screen-xl sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24  mx-auto my-8">
    {/* title */}
    <h1 className=" text-2xl text-Zomp font-semibold">Categories</h1>
    {/* main card */}
    <div className="my-8">
      <MainCard />
    </div>
    {/* main card */}
    <div className="my-8">
      <MainCard />
    </div>
    {/* main card */}
    <div className="my-8">
      <MainCard />
    </div>
    {/* main card */}
    <div className="my-8">
      <MainCard />
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
      <h2 className=" text-center text-xl font-semibold my-4">Similar Blogs</h2>
      <div className=" flex justify-between my-4">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div className=" flex justify-between my-4">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div className=" flex justify-between my-4">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>

    {/* see more button */}
    <div className=" flex justify-center">
      <button type="button" className=" text-Zomp text-lg font-bold">
        
        See more
      </button>
    </div>
  </div>
);

export default Categories;
