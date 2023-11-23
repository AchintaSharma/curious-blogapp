import PrimaryButton from "../buttons/PrimaryButton";

const NewsLetter = () => {
  return (
    <div className="max-w-[384px] flex flex-col gap-3 px-4 py-4  border-t-2 border-b-2 border-Zomp">
      <h2 className=" font-semibold">News Letter</h2>
      <p className=" text-sm font-medium ">
        Don’t miss our exclusive News Letter. Please enter your email, so that
        you don’t miss anything!
      </p>
      <div className=" flex gap-2 ">
        <input
          className=" bg-transparent w-full px-4 py-2 rounded-lg border border-Zomp"
          type="text"
          placeholder="Enter your email"
        />
        <PrimaryButton>Subscribe</PrimaryButton>
      </div>
    </div>
  );
};

export default NewsLetter;
