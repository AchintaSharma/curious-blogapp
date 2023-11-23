import { CuriousLogo } from "../../assets/svgs/svg";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className=" max-w-screen-xl mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 bg-Cultured px-4 py-4 flex flex-col items-center justify-between border border-t-2 ">
        {/* first row */}
        <div className="w-full flex items-center justify-between ">
          <div className="flex items-center">
            <img src={CuriousLogo} className=" w-12 h-12" alt="Curious Logo" />
            <h2 className=" text-Zomp font-semibold  text-2xl ml-2">Curious</h2>
          </div>
          <ul className="font-poppins flex items-center justify-between gap-4">
            <li className=" cursor-pointer">Help</li>
            <li className=" cursor-pointer">Our Story</li>
            <li className=" cursor-pointer">Write</li>
          </ul>
        </div>

        {/* second row */}
        <div className=" w-full  flex items-center gap-2 justify-end">
          <FaTwitter className=" cursor-pointer text-SpaceCadet hover:text-PurpleNavy text-lg" />
          <RiWhatsappFill className=" cursor-pointer text-SpaceCadet hover:text-PurpleNavy text-lg" />
          <FaFacebook className=" cursor-pointer text-SpaceCadet hover:text-PurpleNavy text-lg" />
        </div>
        {/* third row */}
        <p className=" w-full text-sm text-center mt-4">
          
          Copyright © {new Date().getFullYear()} Curious. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
