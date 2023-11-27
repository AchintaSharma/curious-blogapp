import SmallCard from "../SmallCard.tsx"


const CommonCards = () => (
    <div className=" my-8">
      <h2 className=" text-center text-xl font-semibold my-4">Similar Blogs</h2>
      <div className=" flex justify-between my-4">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div className=" flex justify-between my-4">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div className=" flex justify-between my-4">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>

      {/* see more button */}
      <div className=" flex justify-center">
        <button type="button" className=" text-Zomp text-lg font-bold">
          {" "}
          See more
        </button>
      </div>
    </div>
  )

export default CommonCards