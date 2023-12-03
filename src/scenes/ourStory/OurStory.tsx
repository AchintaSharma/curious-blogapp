import { useEffect } from "react";
import { OurstoryImg } from "../../assets/images/images.ts";
import { Profile1 } from "../../assets/svgs/svg.ts";
import CommonCards from "../../components/common/cards/commonCards/CommonCards.tsx";
import useBlogStore from "../../store/blogStore.ts";

const OurStory = () => {
  // Array of blogs
  const blogs = useBlogStore((state) => state.blogs);

  // showing all blogs
  const getAllBlogs = useBlogStore((state)=> state.getAllBlog)
  
  // useEffect hook is used to trigger the getBlog function when the component mounts, ensuring that the data is fetched.
  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  return (
    <div className="max-w-screen-xl mx-auto sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 ">
      <div>
        <h1 className=" font-semibold text-2xl my-4 text-Zomp">Our Story</h1>
        <p className=" my-8">
          Some tricky interview scheduling questions you will face. These
          questions seem easy, but there is something fishy about them. So today
          I’m going to show you 10 tricky questions to ask yourself before a
          programmer interview. Some tricky interview scheduling questions you
          will face. These questions seem easy, but there is something fishy
          about them. So today I’m going to show you 10 tricky questions to ask
          yourself before a programmer interview.
        </p>
        <p className=" my-8">
          Some tricky interview scheduling questions you will face. These
          questions seem easy, but there is something fishy about them. So today
          I’m going to show you 10 tricky questions to ask yourself before a
          programmer interview. Some tricky interview scheduling questions you
          will face. These questions seem easy, but there is something fishy
          about them. So today I’m going to show you 10 tricky questions to ask
          yourself before a programmer interview.
        </p>
        <img src={OurstoryImg} alt="Ourstory" className=" mb-8" />
        <p className=" my-8">
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
          from any point of the app (and we don’t have to pass props 20–40
          levels down). Let’s go through that example. It is really simple, but
          let’s assume that we are going to have a much more complex app soon.
          So component hierarchy will be really deep and the user state will be
          used all over the app. In that case, we should separate our state into
          the global scope, so it can be easily accessed from any point of the
          app (and we don’t have to pass props 20–40 levels down).
        </p>
      </div>
      {/* Our team */}
      <div className="my-8">
        {/* heading */}
        <h2 className="text-xl font-semibold text-Zomp">Our Team</h2>
        {/* team members */}
        <div className=" flex justify-between px-4 my-4">
          {/* card-1 */}
          <div className="flex gap-2 border border-Zomp p-2 rounded-lg shadow-md">
            <img src={Profile1} alt="profile" />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-Zomp">Stacy</h2>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
          </div>
          {/* card-2 */}
          <div className="flex gap-2 border border-Zomp p-2 rounded-lg shadow-md">
            <img src={Profile1} alt="profile" />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-Zomp">Stacy</h2>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
          </div>
          {/* card-3 */}
          <div className="flex gap-2 border border-Zomp p-2 rounded-lg shadow-md">
            <img src={Profile1} alt="profile" />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-Zomp">Stacy</h2>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
          </div>
          {/* card-4 */}
          <div className="flex gap-2 border border-Zomp p-2 rounded-lg shadow-md">
            <img src={Profile1} alt="profile" />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-Zomp">Stacy</h2>
              <p className="text-sm text-gray-500">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Read more */}
      <div className="my-8">
        <CommonCards blogs={blogs} />
      </div>
    </div>
  );
};

export default OurStory;
