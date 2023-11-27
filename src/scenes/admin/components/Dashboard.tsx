import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import {
  MdOutlineSaveAs,
  MdDashboard,
  MdOutlineCategory,
} from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { Profile1 } from "../../../assets/svgs/svg.ts";
import { thumb1 } from "../../../assets/images/images.ts";

type DashboardProps ={
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({children}) => {
  const navigate = useNavigate();
  return(
    <div className=" max-w-screen-xl sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24  mx-auto my-8">
    {/* Overall grid container */}
    <div className="grid grid-cols-12  gap-4 border">
      {/* Left overall grid col */}
      <div className="col-span-3">
        <div className="flex flex-col">
          {/* Profile box */}
          <div className="flex items-center bg-Zomp shadow-md rounded-lg gap-2 h-24 px-4">
            <div>
              <img src={Profile1} alt="profile" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white font-semibold">Jennifer Lawrance</p>
              <p className="text-white font-light">Admin</p>
            </div>
          </div>
          {/* menu box */}
          <div className="flex flex-col gap-8 mt-8 bg-LightSilver shadow-md h-80 px-4 py-8 rounded-lg">
            {/* first link */}
            <div className="flex items-center gap-4">
              {/* icon */}
              <div>
                <MdDashboard className=" text-2xl hover:text-Zomp cursor-pointer" />
              </div>
              {/* button */}
              <div>
                <button
                  type="button"
                  className="hover:text-Zomp text-sm font-medium"
                  onClick={()=>(navigate("/admin/overview"))}
                >
                  Overview
                </button>
              </div>
            </div>

            {/* Add Blog */}
            <div className="flex items-center gap-4">
              {/* icon */}
              <div>
                <GoPlus className=" text-2xl hover:text-Zomp cursor-pointer" />
              </div>
              {/* button */}
              <div>
                <button
                  type="button"
                  className="hover:text-Zomp text-sm font-medium"
                  onClick={ ()=> (navigate("/create-blog"))}
                >
                  Add Blog
                </button>
              </div>
            </div>

            {/* Third link */}
            <div className="flex items-center gap-4">
              {/* icon */}
              <div>
                <MdOutlineSaveAs className=" text-2xl hover:text-Zomp cursor-pointer" />
              </div>
              {/* button */}
              <div>
                <button
                  type="button"
                  className="hover:text-Zomp text-sm font-medium"
                  onClick={ ()=> (navigate("/admin/manage-users"))}
                >
                  Manage Blogs
                </button>
              </div>
            </div>

            {/* Fourth link */}
            <div className="flex items-center gap-4">
              {/* icon */}
              <div>
                <HiOutlineUsers className=" text-2xl hover:text-Zomp cursor-pointer" />
              </div>
              {/* button */}
              <div>
                <button
                  type="button"
                  className="hover:text-Zomp text-sm font-medium"
                  onClick={ ()=> (navigate("/admin/manage-blog"))}
                >
                  Manage Users
                </button>
              </div>
            </div>

            {/* Fifth link */}
            <div className="flex items-center gap-4">
              {/* icon */}
              <div>
                <MdOutlineCategory className=" text-2xl hover:text-Zomp cursor-pointer" />
              </div>
              {/* button */}
              <div>
                <button
                  type="button"
                  className="hover:text-Zomp text-sm font-medium"
                  onClick={ ()=> (navigate("/admin/manage-categories"))}

                >
                  Manage Categories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right overall grid col */}
      <div className="col-span-9 border">
        {/* good morning card */}
        <div className="flex flex-col h-25 gap-2 px-4 py-2 bg-LightSilver rounded-lg shadow-md">
          {/* Welcome flex */}
          <div className=" flex justify-center items-center">
            <div className="flex flex-col">
              <div className=" flex items-center gap-2">
                <h2 className=" font-semibold">Good Morning</h2>
                <h4 className=" text-sm font-light">16 Nov 2023</h4>
              </div>
              <p className=" text-sm w-[90%]">
                m has been the industrys standard dummy text ever since the
                1500s, when an unknown printer too. m has been the industrys
                standard dummy text ever since the 1500s, when an unknown
                printer too.
              </p>
            </div>

            <div>
              <img src={thumb1} alt="thumb" className=" w-fit" />
            </div>
          </div>
        </div>
          
        {/* Line break */}
        <hr className="my-4 font-bold" />
        {/* Table */}
        <div className="flex h-fit">
          {children}
        </div>
      </div>
    </div>
  </div>
  
)};

export default Dashboard;
