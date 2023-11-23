import { thumb1 } from "../../../assets/images/images";
import { Profile1 } from "../../../assets/svgs/svg";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const MainCard = () => {
  return (
    <>
      <div className=" max-w-screen-sm mx-auto flex flex-col gap-3 shadow-md bg-white py-4 px-4 rounded-xl">
        {/* profile img, name, date */}
        <div className="flex items-center gap-2">
          <img src={Profile1} alt="profile image" className=" w-8 h-8 cursor-pointer" />
          <h5 className=" text-sm font-semibold cursor-pointer">John Doe</h5>
          <h6 className=" text-sm">12 Nov</h6>
        </div>
        {/* card conent part */}
        <div className=" flex items-center justify-between gap-2">
          <div>
            <h2 className="  text-md font-semibold cursor-pointer mb-2">Tips for Billionaires</h2>
            <p className=" text-sm w-3/4">
              Lorem ipsum dolor sit amet consectetur. Fusce at enim ultrices
              volutpat massa feugiat. Lorem ipsum dolor sit amet consectetur.
              Fusce at enim ultrices volutpat <a className=" text-Zomp" href="#">Read more</a>
            </p>
          </div>
          <div>
            <img src={thumb1} alt="thumbnail" className="cursor-pointer" />
          </div>
        </div>
        {/* card footer */}
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <h5 className=" text-sm font-semibold cursor-pointer">Enterpranur</h5>
            <p className=" text-sm">5 min read</p>
            <IoShareOutline className="cursor-pointer text-xl" />
          </div>
          <div>
            <MdOutlineBookmarkAdd className="cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
