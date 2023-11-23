import { IoSearchOutline } from "react-icons/io5";
import { BsPencilFill } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";
import { CuriousLogo } from "../../assets/svgs/svg.ts";

const Nav = () => (
  <div className=" max-w-screen-2xl bg-Cultured border border-b-2">
    <nav className=" max-w-screen-xl mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 bg-Cultured px-4 py-4 flex items-center justify-between  ">
      {/* logo */}
      <div className=" flex items-center">
        <img src={CuriousLogo} className=" w-12 h-12" alt="Curious Logo" />
        <h1 className=" text-Zomp font-semibold text-2xl ml-2">Curious</h1>
      </div>
      {/* search */}
      <div className="relative flex items-stretched">
        <input
          type="search"
          placeholder="Search..."
          className="  border border-gray-500 rounded-3xl px-4 py-1 w-full bg-transparent"
        />
        <div className="absolute inset-y-0 flex items-center right-0 pr-4 cursor-pointer">
          <IoSearchOutline className=" text-xl" />
        </div>
      </div>

      {/* Nav Links */}
      <div className=" flex items-center justify-between">
        <ul className=" font-poppins flex items-center justify-between gap-4 mr-4 ">
          <li className="   cursor-pointer">Our Story</li>
          <li className="  cursor-pointer flex items-center">
            Write <BsPencilFill className=" ml-2" />
          </li>
          <li className=" cursor-pointer">
            <LuMoonStar className=" cursor-pointer text-Zomp text-2xl" />
          </li>
        </ul>

        {/* button */}
        <button
          type="submit"
          className=" font-poppins bg-SpaceCadet hover:bg-PurpleNavy px-4 py-2 rounded-2xl  text-white font-semibold"
        >
          Sign Up
        </button>
      </div>
    </nav>
  </div>
);

export default Nav;
