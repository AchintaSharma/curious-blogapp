const Help = () => (
  <div className=" max-w-screen-sm  py-8 px-12 mx-auto  rounded-xl border border-gray-300  shadow-lg bg-white my-4">
    <h1 className=" text-xl mb-4 font-bold text-Zomp">Contact Us</h1>

    <form className=" mx-auto">
      {/* name */}
      <div className=" mb-4">
        <input
          type="text"
          placeholder="Name..."
          className=" w-full h-12 pl-4 border border-Zomp rounded-lg"
        />
      </div>
      {/* Email */}
      <div className=" mb-4">
        <input
          type="email"
          placeholder="Email..."
          className=" w-full h-12 pl-4 border border-Zomp rounded-lg"
        />
      </div>
     
      {/* Message area */}
      <div>
        <textarea
          placeholder="Your Message..."
          cols={50}
          rows={6}
          className=" w-full  pl-4 pt-4 border border-Zomp rounded-lg"
        />
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

export default Help;
