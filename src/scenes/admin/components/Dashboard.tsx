import { MdOutlineSaveAs, MdDashboard , MdOutlineCategory } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { Profile1 } from "../../../assets/svgs/svg.ts";

const Dashboard = () => (
  <div className=" max-w-screen-xl sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24  mx-auto my-8 border border-SpaceCadet">
    {/* Overall grid container */}
    <div className="grid grid-cols-12 mx-[10%] gap-4 border border-red-600">
      {/* Left overall grid col */}
      <div className="col-span-3">
        <div className="flex flex-col">
          {/* Profile box */}
          <div className="flex items-center bg-Zomp rounded-lg gap-2 h-24 px-4">
            <div>
              <img src={Profile1} alt="profile" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white font-semibold">Jennifer Lawrance</p>
              <p className="text-white font-light">Admin</p>
            </div>
          </div>
          {/* menu box */}
          <div className="flex flex-col gap-8 mt-8 bg-LightSilver border border-Zomp h-80 px-4 py-8 rounded-lg">
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
                >
                  Overview
                </button>
              </div>
            </div>

            {/* second link */}
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
                >
                  Manage Users
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
                >
                  Manage Users
                </button>
              </div>
            </div>

            {/* Fifth link */}
            <div className="flex items-center gap-4">
              {/* icon */}
              <div>
                <MdOutlineCategory  className=" text-2xl hover:text-Zomp cursor-pointer" />
              </div>
              {/* button */}
              <div>
                <button
                  type="button"
                  className="hover:text-Zomp text-sm font-medium"
                >
                  Manage Users
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right overall grid col */}
      <div className="col-span-9 border border-Zomp">
        <div className="flex flex-col">
          {/* Welcome flex */}
          <div className="flex h-24 border border-Zomp">Good morning</div>
          {/* Metrics */}
          <div className="flex flex-row mt-10 h-20 justify-between border border-Zomp">
            <p className="w-72">Metric 1</p>
            <p className="w-72">Metric 2</p>
          </div>
          {/* Line break */}
          <hr className="my-5" />
          {/* Table */}
          <div className="flex h-fit border border-Zomp">Recent Blogs</div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
