const CreateBlog = () => (
    <div className=" max-w-screen-sm  py-8 px-12 mx-auto  rounded-xl border border-gray-300  shadow-lg bg-white my-4">
        <h1 className=" mb-4 font-bold">Creat Blog</h1>

        <form className=" mx-auto">
          {/* title input */}
          <div className=" mb-4">
            <input
              type="text"
              placeholder="Title"
              className=" w-full h-12 pl-4 border border-Zomp rounded-lg"
            />
          </div>
          {/* category input */}

          {/* dropdown */}
          <select className=" w-full h-12 border border-Zomp rounded-lg px-4 block my-4">
            <option value="first">Category</option>
            <option value="second">second</option>
            <option value="third">third</option>
          </select>

          {/* <div className=" mb-2">
            <input
              type="text"
              placeholder="Category"
              className=" w-full h-12 pl-4 border border-SpaceCadet rounded-lg"
            />
          </div> */}
          {/* content area */}

          <div>
            <textarea
              placeholder="Content..."
              cols={50}
              rows={6}
              className=" w-full  pl-4 pt-4 border border-Zomp rounded-lg"
             />
          </div>

          {/* label */}
          <h3 className=" font-semibold mt-2">Add Thumbnail</h3>

          {/* image input */}
          <div className="my-2">
            <input
              type="file"
              className=" w-full pt-2 h-12 pl-4 border border-Zomp rounded-lg"
            />
          </div>

          {/* radio */}
          <div className="my-4">
            <input type="checkbox" />{" "}
            <span className=" font-semibold ml-2">Publish</span>
          </div>

          {/* submit button */}
          <div className="my-2">
            <button
              className="w-lg py-2 px-8 text-white bg-SpaceCadet rounded-2xl  hover:bg-PurpleNavy font-medium relative shadow-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  );

export default CreateBlog;
