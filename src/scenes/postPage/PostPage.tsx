import { FaRegHeart } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { Profile2 } from "../../assets/svgs/svg.ts";
import { Bigthumb1 } from "../../assets/images/images.ts";
import BigAdvertisement from "../../components/common/advertisement/BigAdvertisement.tsx";
import CommonCards from "../../components/common/cards/commonCards/CommonCards.tsx";
// import SmallCard from "../../components/common/cards/SmallCard";

const PostPage = () => (
  <div className="  max-w-screen-xl mx-auto sm:mx-2 md:mx-4 lg:mx-8 my-4">
    {/* title */}
    <h2 className=" font-semibold text-2xl my-4 ">
      Top 10 tricky JavaScript questions that I used to ask in interviews.
    </h2>

    {/* author profile pic, name, published date */}
    <div className=" flex items-center gap-2 my-4">
      <img src={Profile2} alt="profile" className=" w-8 h-8 cursor-pointer" />
      <div>
        <h4 className=" text-sm font-semibold  cursor-pointer">John Doe</h4>
        <h5 className="text-sm text-gray-500 font-light  cursor-pointer">
          Published . 12Nov
        </h5>
      </div>
    </div>
    {/* like, read, share and save */}
    <div className=" flex items-center justify-between border-t-2 border-b-2 py-4 my-4">
      <div className=" flex items-center gap-8">
        <FaRegHeart className="cursor-pointer text-2xl  font-bold" />
        <h3 className=" text-sm text-gray-500">5 min read</h3>
      </div>

      {/* share and save */}
      <div className=" flex items-center gap-8">
        <IoShareOutline className="cursor-pointer text-2xl  font-bold" />
        <MdOutlineBookmarkAdd className="cursor-pointer text-2xl" />
      </div>
    </div>

    {/* Content starts here */}
    <div className=" my-8">
      <p className=" text-lg text-gray-600">
        Some tricky interview scheduling questions you will face. These
        questions seem easy, but there is something fishy about them. So today
        I’m going to show you 10 tricky questions to ask yourself before a
        programmer interview. Some tricky interview scheduling questions you
        will face. These questions seem easy, but there is something fishy about
        them. So today I’m going to show you 10 tricky questions to ask yourself
        before a programmer interview.
      </p>
      {/* image and source */}
      <div className=" my-8 flex flex-col gap-2">
        <img src={Bigthumb1} alt="blog thumbnail" className=" cursor-pointer" />
        <p className=" cursor-pointer text-sm text-gray-500">
          Source: Unsplash
        </p>
      </div>
      {/* more content */}
      <p className=" text-lg text-gray-600 my-2">
        Some tricky interview scheduling questions you will face. These
        questions seem easy, but there is something fishy about them. So today
        I’m going to show you 10 tricky questions to ask yourself before a
        programmer interview. Some tricky interview scheduling questions you
        will face. These questions seem easy, but there is something fishy about
        them. So today I’m going to show you 10 tricky questions to ask yourself
        before a programmer interview.
      </p>
      <p className=" text-lg text-gray-600 my-2">
        Storing global state in useState useStateis only suitable to store
        components local states. This could include input value, toggle flags
        and etc. Global state belongs to the app as a whole, it doesn’t relate
        only to one specific component. If your data is used within multiple
        pages or widgets — consider putting it into a global state (React
        Context, Redux, MobX and etc). Let’s go through that example. It is
        really simple, but let’s assume that we are going to have a much more
        complex app soon. So component hierarchy will be really deep and the
        user state will be used all over the app. In that case, we should
        separate our state into the global scope, so it can be easily accessed
        from any point of the app (and we don’t have to pass props 20–40 levels
        down). Let’s go through that example. It is really simple, but let’s
        assume that we are going to have a much more complex app soon. So
        component hierarchy will be really deep and the user state will be used
        all over the app. In that case, we should separate our state into the
        global scope, so it can be easily accessed from any point of the app
        (and we don’t have to pass props 20–40 levels down).
      </p>
    </div>
    {/* Content ends here */}
    {/* Tags */}
    <div className=" flex flex-col gap-4 my-8">
      <h2 className=" font-semibold  text-2xl">Tags</h2>
      <div className=" max-w-screen-sm flex gap-2">
        <button
          type="button"
          className=" font-semibold text-sm bg-slate-200 px-4 py-2 rounded-lg"
        >
          Technology
        </button>
        <button
          type="button"
          className=" font-semibold text-sm bg-slate-200 px-4 py-2 rounded-lg"
        >
          Art
        </button>
        <button
          type="button"
          className=" font-semibold text-sm bg-slate-200 px-4 py-2 rounded-lg"
        >
          Music
        </button>
      </div>
    </div>

  {/* Advertisement */}
    <BigAdvertisement />

    {/* Similar blogs */}   
    <CommonCards />

  </div>
);

export default PostPage;
