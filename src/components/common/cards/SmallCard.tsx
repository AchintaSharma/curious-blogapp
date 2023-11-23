import { Profile2 } from "../../../assets/svgs/svg"
import { IoShareOutline } from "react-icons/io5";
// import {format} from 'date-fns'

const SmallCard = () => {
  return (
    <div className=" max-w-[304px] px-4 py-4 bg-Zomp rounded-lg flex flex-col gap-2">
        {/* card profile, name, category */}
        <div className=" flex items-center gap-2">
            <img src={Profile2} alt="profile image" className=" w-6 h-6 cursor-pointer" />
            <h4 className=" text-sm font-semibold text-white cursor-pointer">John Doe</h4>
            <h5 className="text-sm font-medium text-white cursor-pointer">React</h5>
        </div>
        {/* card content */}
        <div>
            <h2 className=" text-lg font-semibold text-white cursor-pointer">React Best Practices</h2>
        </div>
        {/* card footer */}
        <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-2">
                <p className=" text-sm text-white">12 Nov</p>
                <p className=" text-white text-sm">5 min read</p>
            </div>
            <IoShareOutline className="cursor-pointer text-xl text-white font-bold" />
        </div>
    </div>
  )
}

export default SmallCard